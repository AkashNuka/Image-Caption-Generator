import numpy as np
import pandas as pd
import pickle
from flask import Flask, request, render_template
app = Flask(__name__, template_folder='templates', static_url_path='/Flask/static')


# Load the model when the application starts
with open('C:/Users/akash/Downloads/project/flask/dt.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    # Return the home.html template
    return render_template('home.html')


@app.route('/predict', methods=["POST", "GET"])
def predict():
    if request.method == "POST":                              
        # Extract form data
        step = float(request.form["step"])
        type_val = float(request.form["type"])  # Changed variable name to avoid conflict with 'type' keyword
        amount = float(request.form["amount"])
        oldbalanceOrg = float(request.form["oldbalanceOrg"])
        newbalanceOrig = float(request.form["newbalanceOrig"])
        oldbalanceDest = float(request.form["oldbalanceDest"])
        newbalanceDest = float(request.form["newbalanceDest"])

        # Create a DataFrame from the input values
        features_values = np.array([[step, type_val, amount, oldbalanceOrg, newbalanceOrig, oldbalanceDest, newbalanceDest]])
        df = pd.DataFrame(features_values, columns=['step', 'type', 'amount', 'oldbalanceOrg', 'newbalanceOrig', 'oldbalanceDest', 'newbalanceDest'])

        # Make prediction using the loaded model
        prediction = model.predict(df)
        print(prediction[0])

        # Determine result based on prediction
        if prediction[0] == 0:
            result = "fraud ['is Fraud']"
        elif prediction[0] == 1:
            result = "not fraud ['is not Fraud']"

        # Prepare response
        text = "Hence, based on calculation:"
        prediction_text = f"{text} {result}"
        return render_template('submit.html', prediction=prediction_text)

    else:
        return render_template('predict.html')
@app.route('/submit')
def submit():
    # Function logic
    return render_template('submit.html')

#@app.route('/submit')   
#def submit(): 
    # Get prediction result from query parameter
    #prediction = request.args.get('prediction', '')
    #return render_template('submit.html', prediction=prediction)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
