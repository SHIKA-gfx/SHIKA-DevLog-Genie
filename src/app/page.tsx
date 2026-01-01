"use client";

import { useState, useEffect } from "react";
import { Settings, Send, BookOpen, Key, Loader2, Globe } from "lucide-react";
import { generateDevLog } from "@/lib/gemini";
import { translations, Language } from "@/lib/translations"; // Import translations
import MarkdownPreview from "@/components/MarkdownPreview";

export default function Home() {
  const [lang, setLang] = useState<Language>("en"); // Language state
  const t = translations[lang]; // Current translation shortcut

  const [apiKey, setApiKey] = useState("");
  const [isKeySaved, setIsKeySaved] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) {
      setApiKey(savedKey);
      setIsKeySaved(true);
    } else {
      setShowSettings(true);
    }
  }, []);

  const saveApiKey = () => {
    localStorage.setItem("gemini_api_key", apiKey);
    setIsKeySaved(true);
    setShowSettings(false);
  };

  const handleGenerate = async () => {
    if (!inputCode || !apiKey) return;
    setIsLoading(true);
    try {
      // Pass the current language to the AI
      const generatedText = await generateDevLog(apiKey, inputCode, lang);
      setResult(generatedText);
    } catch (error) {
      alert("Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar with Language Selector */}
      <nav className="border-b bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <BookOpen size={28} />
          <span>{t.title}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border">
            <Globe size={18} className="text-slate-500" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-sm font-medium outline-none cursor-pointer"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
          <button onClick={() => setShowSettings(true)} className="p-2 hover:bg-slate-100 rounded-full">
            <Settings size={24} className="text-slate-600" />
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 p-1 rounded">1</span>
            {t.inputLabel}
          </h2>
          <textarea
            className="w-full h-[500px] p-4 rounded-lg border border-slate-200 shadow-inner font-mono text-sm outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t.placeholder}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <button 
            onClick={handleGenerate}
            disabled={!isKeySaved || !inputCode || isLoading}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-slate-300 transition-all"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            {isLoading ? t.btnGenerating : t.btnGenerate}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="bg-green-100 text-green-600 p-1 rounded">2</span>
            {t.previewLabel}
          </h2>
          <div className="w-full h-[500px] p-6 rounded-lg border border-slate-200 bg-white shadow-sm overflow-y-auto">
            {result ? (
            <MarkdownPreview content={result} />
         ) : (
            <p className="text-slate-400 italic text-center mt-20">
            {isLoading ? t.waitAI : t.noCode}
          </p>
        )}
        </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-xl">
            <h3 className="flex items-center gap-2 mb-6 font-bold text-xl">
              <Key /> {t.settingsTitle}
            </h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100 text-center">
              <p className="text-sm text-blue-800 mb-2 font-medium">
                 {t.apiKeyHelp}
              </p>
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-800 font-semibold"
              >
                {t.apiKeyLink} ↗
              </a>
            </div>

            <input
              type="password"
              className="w-full p-3 border rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t.apiKeyPlaceholder}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            
            <div className="flex gap-2">
              <button 
                onClick={() => setShowSettings(false)} 
                className="flex-1 py-3 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                {t.close}
              </button>
              <button 
                onClick={saveApiKey} 
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}