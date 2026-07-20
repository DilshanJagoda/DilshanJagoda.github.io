# AI Resume Analyzer & Interactive Interview Simulator

An elegant, full-stack application built with **React + Vite** and **Express + Node.js**, powered by Google's **Gemini AI**. It helps job seekers optimize their resumes, evaluate their alignment against target job descriptions, and practice with a highly interactive, simulated AI interviewer.

---

## 🌟 Key Features

1. **Smart Resume Parser & Analyzer**: Upload resumes (text or files) to receive deep, actionable breakdowns of skills, experience, visual structure, formatting, and areas for improvement.
2. **ATS & Job Match Evaluator**: Paste any target job description to run a direct comparison, yielding an Applicant Tracking System (ATS) score, gap analysis, and keyword match recommendations.
3. **Conversational AI Interviewer**: Simulates a live, realistic technical or behavioral interview. It responds to your answers conversationaly, tests target skills, and generates customized follow-up questions one at a time.
4. **Objective Feedback Generator**: Evaluates your performance after the interview, scoring answers and providing concrete feedback using the STAR method (Situation, Task, Action, Result).

---

## 🛠️ Project Stack

- **Frontend**: React (v19), Vite (v6), Tailwind CSS (v4), Motion (for smooth, gorgeous transitions & animations), and Lucide React Icons.
- **Backend**: Express.js (handling API requests, processing heavy base64 resume file payloads), Node.js, and ESBuild (for bundling the server).
- **AI Engine**: Google's modern `@google/genai` TypeScript SDK with an automated multi-model retry and fallback resilience system.

---

## 🚀 How to Run Locally

You can run this full-stack application on your own computer completely for free in just a few minutes.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A **Gemini API Key** (Get one for free from [Google AI Studio](https://aistudio.google.com/))

### Step-by-Step Setup

1. **Clone or Extract the Project**
   Download the project ZIP file (or clone the repository) and open it in your favorite code editor (e.g., VS Code).

2. **Install Dependencies**
   Open your terminal in the project root directory and run:
   ```bash
   npm install
   ```
   This will install all required frontend and backend dependencies.

3. **Configure Environment Variables**
   Create a new file named `.env` in the root directory (you can copy `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```
   Open your newly created `.env` file and insert your Gemini API Key:
   ```env
   GEMINI_API_KEY="your-actual-api-key-here"
   APP_URL="http://localhost:3000"
   ```

4. **Start the Development Server**
   Run the following command in your terminal:
   ```bash
   npm run dev
   ```
   This boots up the backend Express server on port `3000` using `tsx` (TypeScript Executor). The server also mounts the Vite middleware to serve the React frontend under the same port!

5. **Access the App**
   Open your web browser and go to:
   **[http://localhost:3000](http://localhost:3000)**

---

## 📜 Key NPM Scripts

Manage the application during development and production with the following commands:

- **`npm run dev`**: Starts the application in development mode. HMR (Hot Module Replacement) is handled by Vite, and the server runs dynamically with automatic TypeScript compilation.
- **`npm run build`**: Compiles the React frontend static assets into the `dist/` directory, and bundles the Express backend (`server.ts`) into a standalone production file `dist/server.cjs` using `esbuild`.
- **`npm run start`**: Launches the pre-built, production-ready application directly from `dist/server.cjs` on the specified `PORT` (defaults to `3000`).
- **`npm run clean`**: Cleans up previous build directories and bundles (`dist/`).
- **`npm run lint`**: Runs TypeScript type-checks (`tsc --noEmit`) to verify code health.

---

## 🔒 Security Notice
Your **Gemini API Key** is stored strictly on the server-side (`.env` file) and is **never** exposed to the client's browser. The frontend communicates with local `/api/*` endpoints which act as a secure proxy to Google's servers. Keep your `.env` file private and never commit it to public version control systems (like GitHub).
