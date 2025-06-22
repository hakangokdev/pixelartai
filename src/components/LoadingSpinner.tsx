import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col justify-center items-center my-10 animate-fadeIn">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
        👾
      </div>
    </div>
    <p className="mt-4 text-gray-400 font-mono">Conjuring pixels...</p>
  </div>
); 