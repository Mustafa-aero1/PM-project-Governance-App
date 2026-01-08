
import { GoogleGenAI } from "@google/genai";

// The API key is sourced from the environment variable as per instructions.
// This removes the need for manual UI input or localStorage management.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-3-flash-preview';

/**
 * Strips all asterisks from the string to satisfy user preference for plain text.
 */
const cleanResponse = (text: string): string => {
  return text.replace(/\*/g, '');
};

export const generatePMContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are a professional PMO Assistant. Generate content without using any asterisks for bolding or italics. Use plain text and clear headers.",
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    const rawText = response.text || "No response generated.";
    return cleanResponse(rawText);
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && (error.message.includes("404") || error.message.includes("not found"))) {
      return "Error: Model not found. The app is configured to use 'gemini-3-flash-preview'. Please check your API project permissions.";
    }
    return `Error: ${error instanceof Error ? error.message : String(error)}`;
  }
};
