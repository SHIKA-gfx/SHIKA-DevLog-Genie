<div align="center">

# 🦌 SHIKA-DevLog-Ginie


[![Live Demo](https://img.shields.io/badge/🦌_DEMO-Visit_Website-blue?style=for-the-badge&logo=vercel)](https://shika-dev-log-genie.vercel.app/)
[![Built with AI](https://img.shields.io/badge/🤖_AI-Powered_by_Gemini-FFD700?style=for-the-badge&logo=google-gemini&logoColor=black)](https://deepmind.google/technologies/gemini/)


> **Turning your raw code into professional, Notion-style technical blog posts in seconds.**

<br>

<a href="https://shika-dev-log-genie.vercel.app/">
  <p align="center">
    <img src="./public/assets/SHIKA_DevLog_SetUp.png" width="45%" alt="Setup Screen" style="border-radius: 10px; border: 1px solid #eaeaea;">
    <img src="./public/assets/SHIKA_DevLog_Result.png" width="45%" alt="Result Screen" style="border-radius: 10px; border: 1px solid #eaeaea;">
  </p>
</a>

*Left: Easy API Setup | Right: Beautifully Rendered Result*

</div>

---

## ✨ Key Features

- **AI Code Analysis**: Uses **Gemini 2.5 Flash** to deeply understand and explain your logic.
- **Multilingual Support**: Generate posts in **English, 한국어, or 日本語**.
- **Notion-Ready**: Perfectly formatted with Markdown and beautiful **LaTeX ($$...$$)** math equations.
- **Privacy First (BYOK)**: Your API key is stored only in your browser's local storage. We never save your keys.
- **Live Preview**: See your rendered blog post in real-time.

---

## 🚀 How to Use

1. **Get API Key**: Obtain your free Gemini API key from [Google AI Studio](https://aistudio.google.com/).
2. **Setup**: Click the ⚙️ icon in the app and paste your key.
3. **Input**: Paste your code or technical logic in the left panel.
4. **Generate**: Click "Generate Tech Post" and watch the magic happen!
5. **Copy**: Copy the rendered result and paste it directly into your **Notion** or **Tech Blog**.

---

## 🛠 Tech Stack 

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router) |
| **AI Model** | Google Gemini 2.5 Flash |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Rendering** | React Markdown, KaTeX (for Math) |

---

## 📦 Local Setup 

```bash
# Clone the repository
git clone [https://github.com/SHIKA-gfx/SHIKA-DevLog-Genie.git](https://github.com/SHIKA-gfx/SHIKA-DevLog-Genie.git)

# Install dependencies
npm install

# Run the development server
npm run dev