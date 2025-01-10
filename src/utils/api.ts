import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const generateCaption = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_URL}/generate-caption`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.caption;
  } catch (error) {
    console.error('Error generating caption:', error);
    throw new Error('Failed to generate caption');
  }
};