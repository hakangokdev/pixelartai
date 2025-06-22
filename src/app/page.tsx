'use client';

import React, { useState, useCallback } from 'react';
import { PromptInput } from '../components/PromptInput';
import { ImageDisplay } from '../components/ImageDisplay';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorDisplay } from '../components/ErrorDisplay';
import { generatePixelArt } from '../services/geminiService';
import { GithubIcon } from '../components/GithubIcon';

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedPrompt, setSubmittedPrompt] = useState<string>('');

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate pixel art.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null); // Clear previous image
    setSubmittedPrompt(prompt); 

    try {
      const imageUrl = await generatePixelArt(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while generating the image.");
      }
      setGeneratedImage(null);
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transform transition-all duration-500">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-fadeIn">
            Pixel Art Generator
          </h1>
          <p className="mt-3 text-lg text-gray-400 font-mono">
            Craft unique pixel art with Imagen AI
          </p>
        </header>

        <main>
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerateImage}
            isLoading={isLoading}
          />

          {error && <ErrorDisplay message={error} />}
          
          {isLoading && <LoadingSpinner />}

          {generatedImage && !isLoading && (
            <ImageDisplay 
              imageUrl={generatedImage} 
              altText={`Pixel art generated for prompt: "${submittedPrompt}"`} 
            />
          )}

          {!generatedImage && !isLoading && !error && (
            <div className="mt-8 text-center text-gray-500 font-mono p-6 border-2 border-dashed border-gray-700 rounded-lg">
              <p className="text-xl mb-2">(^‿^)</p>
              Your pixel art creation will appear here!
            </div>
          )}
        </main>
      </div>
      <footer className="mt-12 text-center text-gray-500 font-mono text-sm">
        <p>Powered by Google Gemini & Imagen API</p>
        <a 
          href="https://github.com/google/generative-ai-docs/tree/main/site/en/gemini-api/docs/imagen-quickstart" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View Imagen Quickstart
        </a>
      </footer>
    </div>
  );
}
