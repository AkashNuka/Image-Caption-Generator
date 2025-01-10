import React from 'react';
import { ImageIcon } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
        <ImageIcon className="w-6 h-6 text-gray-400" />
      </div>
      <h3 className="text-sm font-medium text-gray-900">No images yet</h3>
      <p className="mt-1 text-sm text-gray-500">Start by uploading your first image</p>
    </div>
  );
}