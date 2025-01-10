import React from 'react';
import { X } from 'lucide-react';
import { ImageData } from '../types/image';

interface ImageDisplayProps {
  image: ImageData;
  onRemove: () => void;
}

export function ImageDisplay({ image, onRemove }: ImageDisplayProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg transition-colors duration-200 hover:bg-black/70"
          aria-label="Remove image"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        <img
          src={image.url}
          alt={image.caption}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">{image.caption}</p>
      </div>
    </div>
  );
}