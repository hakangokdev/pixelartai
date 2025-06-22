import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!API_KEY) {
  // This message is for developers. User-facing errors are handled in the component.
  console.error("NEXT_PUBLIC_GEMINI_API_KEY environment variable is not set. Image generation will fail.");
}

// Initialize with a check for API_KEY to avoid runtime errors if it's missing during construction
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generatePixelArt = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    throw new Error("Gemini API client is not initialized. Is the API_KEY configured?");
  }
  if (!userPrompt.trim()) {
    throw new Error("Prompt cannot be empty.");
  }

  // Enhanced prompt for better pixel art results
  const fullPrompt = `pixel art of ${userPrompt}, 8-bit style, 16-bit style, retro video game aesthetic, vibrant colors, clear outlines, simple background`;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002', 
      prompt: fullPrompt,
      config: { 
        numberOfImages: 1, 
        outputMimeType: 'image/png' // PNG is generally better for sharp pixel art
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image?.imageBytes) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      // This case handles API success but no image (e.g., safety filters)
      console.warn("API response did not contain image data. Response:", response);
      throw new Error("The API did not return an image. This could be due to safety filters or an issue with the prompt.");
    }
  } catch (error) {
    console.error("Error generating pixel art with Imagen API:", error);
    if (error instanceof Error) {
      // Try to provide a more specific message if known, otherwise use the original.
      if (error.message.includes("API key not valid")) {
        throw new Error("Invalid API Key. Please check your configuration.");
      }
      if (error.message.includes("quota")) {
        throw new Error("API quota exceeded. Please try again later or check your quota limits.");
      }
       throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the image generation service.");
  }
}; 