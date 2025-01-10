import React from 'react';
import { ImageCard } from './ImageCard';
import { ImageData } from '../types/image';

interface ImageGridProps {
  images: ImageData[];
  onRemoveImage: (id: string) => void;
}

export function ImageGrid({ images, onRemoveImage }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map(image => (
        <ImageCard
          key={image.id}
          image={image}
          onRemove={onRemoveImage}
        />
      ))}
    </div>
  );
}