import React from 'react';
import { X } from 'lucide-react';
import { ImageData } from '../types/image';

interface ImageCardProps {
  image: ImageData;
  onRemove: (id: string) => void;
}

export function ImageCard({ image, onRemove }: ImageCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => onRemove(image.id)}
        className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
        aria-label="Remove image"
      >
        <X className="w-4 h-4 text-white" />
      </button>
      <div className="aspect-[4/3]">
        <img
          src={image.url}
          alt={image.caption}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 leading-relaxed">{image.caption}</p>
      </div>
    </div>
  );
}