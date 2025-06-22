import React from 'react';

interface ImageDisplayProps {
  imageUrl: string;
  altText: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => {
  return (
    <div className="mt-8 p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-xl animate-fadeIn">
      <div className="bg-gray-700 p-2 rounded-md">
         <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto object-contain rounded shadow-lg mx-auto block"
            style={{ imageRendering: 'pixelated' }} // Preserve sharp pixels
          />
      </div>
      <p className="text-center text-xs text-gray-400 mt-2 font-mono italic">
        {altText}
      </p>
    </div>
  );
}; 