/**
 * Translation dictionary for UI text
 */
export const translations = {
  ko: {
    title: "SHIKA-DevLog-Ginie",
    inputLabel: "분석할 코드를 입력하세요",
    previewLabel: "생성된 결과 미리보기",
    placeholder: "여기에 코드를 복사해서 붙여넣으세요...",
    btnGenerate: "기술 포스팅 생성하기",
    btnGenerating: "분석 중...",
    noCode: "분석할 코드가 없습니다.",
    waitAI: "AI가 열심히 코드를 읽고 있습니다...",
    settingsTitle: "Gemini API 설정",
    apiKeyHelp: "API 키가 없으신가요?",
    apiKeyLink: "Google AI Studio에서 무료로 발급받기",
    apiKeyPlaceholder: "AI API 키를 입력하세요",
    save: "저장하기",
    close: "닫기",
  },
  en: {
    title: "SHIKA-DevLog-Ginie",
    inputLabel: "Input your code to analyze",
    previewLabel: "Generated Preview",
    placeholder: "Paste your code here...",
    btnGenerate: "Generate Tech Post",
    btnGenerating: "Analyzing...",
    noCode: "No code to analyze.",
    waitAI: "AI is reading your code...",
    settingsTitle: "Gemini API Settings",
    apiKeyHelp: "Don't have an API key?",
    apiKeyLink: "Get a free API key from Google AI Studio",
    apiKeyPlaceholder: "Enter your Gemini API Key",
    save: "Save",
    close: "Close",
  },
  ja: {
    title: "SHIKA-DevLog-Ginie",
    inputLabel: "分析するコードを入力してください",
    previewLabel: "生成されたプレビュー",
    placeholder: "ここにコード를 貼り付けてください...",
    btnGenerate: "技術記事を生成する",
    btnGenerating: "分析中...",
    noCode: "分析するコードがありません。",
    waitAI: "AIがコードを読んでいます...",
    settingsTitle: "Gemini API 設定",
    apiKeyHelp: "APIキーをお持ちではありませんか？",
    apiKeyLink: "Google AI Studioで無料発行",
    apiKeyPlaceholder: "API キーを入力してください",
    save: "保存",
    close: "閉じる",
  }
};

export type Language = "ko" | "en" | "ja";