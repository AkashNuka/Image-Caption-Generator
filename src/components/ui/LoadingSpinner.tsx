import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="ml-3 text-sm text-gray-600">Processing image...</span>
    </div>
  );
}