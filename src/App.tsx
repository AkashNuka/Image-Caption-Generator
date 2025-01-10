import React, { useState } from 'react';
import { Header } from './components/ui/Header';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EmptyState } from './components/ui/EmptyState';
import { ImageUploader } from './components/ImageUploader';
import { ImageDisplay } from './components/ImageDisplay';
import { ImageData } from './types/image';
import { generateImageId, createObjectUrl } from './utils/image';
import { generateCaption } from './utils/api';

function App() {
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const imageUrl = createObjectUrl(file);
      const caption = await generateCaption(file);
      
      const newImage: ImageData = {
        id: generateImageId(),
        url: imageUrl,
        caption,
      };
      
      setCurrentImage(newImage);
    } catch (error) {
      console.error('Error processing image:', error);
      setError('Failed to generate caption. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveImage = () => {
    if (currentImage?.url) {
      URL.revokeObjectURL(currentImage.url);
    }
    setCurrentImage(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Header />
        
        <div className="max-w-2xl mx-auto mb-12">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {isLoading && <LoadingSpinner />}
        
        {!isLoading && !currentImage && !error ? (
          <EmptyState />
        ) : (
          currentImage && <ImageDisplay image={currentImage} onRemove={handleRemoveImage} />
        )}
      </div>
    </div>
  );
}

export default App;