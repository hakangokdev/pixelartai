import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isLoading) {
      onSubmit();
    }
  };
  
  return (
    <div className="space-y-4 mb-8">
      <label htmlFor="prompt-input" className="block text-sm font-medium text-gray-300 font-mono">
        Enter your creative vision:
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="prompt-input"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., a knight fighting a dragon"
          className="flex-grow p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 font-mono"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !prompt.trim()}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {isLoading ? 'Generating...' : 'Generate Pixel Art'}
        </button>
      </div>
    </div>
  );
}; 