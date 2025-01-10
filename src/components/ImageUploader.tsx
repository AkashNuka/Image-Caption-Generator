import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    onDrop: files => files[0] && onImageUpload(files[0])
  });

  return (
    <div
      {...getRootProps()}
      className={`
        relative rounded-xl border-2 border-dashed transition-all duration-200
        ${isDragActive 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-200 hover:border-blue-400 bg-white/50 hover:bg-white/80'
        }
      `}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <div className={`
          p-3 rounded-full mb-3 transition-colors duration-200
          ${isDragActive ? 'bg-blue-100' : 'bg-gray-100'}
        `}>
          <Upload className={`w-5 h-5 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
        <p className="text-sm text-gray-600 text-center">
          {isDragActive ? (
            "Drop to upload your image"
          ) : (
            <>
              Drag and drop your image, or <span className="text-blue-500">browse</span>
            </>
          )}
        </p>
        <p className="mt-2 text-xs text-gray-400">Supports JPG, PNG and WebP</p>
      </div>
    </div>
  );
}