import React from 'react';
import { ImageIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full shadow-sm mb-4">
        <ImageIcon className="w-5 h-5 text-blue-600 mr-2" />
        <h1 className="text-xl font-semibold text-gray-900">AI Caption Generator</h1>
      </div>
      <p className="text-sm text-gray-600">Transform your images with AI-powered captions</p>
    </header>
  );
}