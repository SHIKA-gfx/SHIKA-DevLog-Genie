import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Service to handle communication with Gemini API
 */
export const generateDevLog = async (apiKey: string, code: string, language: string) => {
  // 1. Initialize with the provided API Key
  const genAI = new GoogleGenerativeAI(apiKey);
  

  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash" 
  }); 

  const langMap: Record<string, string> = {
    ko: "Korean",
    en: "English",
    ja: "Japanese"
  };

  const prompt = `
    You are a professional technical writer.
    Analyze the provided code and write a technical blog post in ${langMap[language] || "English"}.
    
    Requirements:
    - Explain the purpose and technical logic.
    - Use Markdown for structure.
    - Use LaTeX ($$ formula $$) for any math.
    
    Code:
    ${code}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};