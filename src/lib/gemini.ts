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
    You are a professional technical content creator. 
    Write a high-quality technical blog post in ${langMap[language]} based on the provided code.

    CRITICAL FORMATTING RULES for readability:
     1. Use clear H1 for the title and H2/H3 for subsections.
     2. Use DOUBLE LINE BREAKS between all paragraphs and sections to ensure a clean look.
     3. Use Bullet Points for logic steps or feature lists.
     4. Surround all mathematical formulas with double dollar signs for LaTeX: $$formula$$.
     5. Bold the most important variables and terms.

    Structure:
     - Catchy Title
     - Brief Introduction
     - Logic & Math Principles (Deep Dive)
     - Code Walkthrough (Focus on key lines)
     - Practical Use Case or Conclusion
    
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