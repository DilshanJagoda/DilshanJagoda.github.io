# How It Works: Architectural Deep-Dive

This document provides a comprehensive overview of how the **AI Resume Analyzer & Interactive Interview Simulator** functions under the hood, detailing the frontend, backend, and Gemini AI integration.

---

## 🏛️ System Architecture Overview

The application utilizes a cohesive, full-stack **Single-Port Architecture** that unifies a high-performance React client and an Express.js server behind a single port (`3000`).

```
                    ┌────────────────────────┐
                    │     React Frontend     │
                    │   (Vite / Tailwind)    │
                    └───────────┬────────────┘
                                │
              HTTPS Requests    │    Vite Asset Dev Server
              (e.g., /api/*)    │    (or Static Production Files)
                                ▼
                    ┌────────────────────────┐
                    │     Express Backend    │
                    │      (Node.js API)     │
                    └───────────┬────────────┘
                                │
                                │ Google GenAI SDK (Server-Side)
                                ▼
                    ┌────────────────────────┐
                    │     Google Gemini      │
                    │   (3.5-Flash & Lites)  │
                    └────────────────────────┘
```

### 1. Unified Development Port
During development (`npm run dev`), Express is configured as the main listener on port `3000`. It utilizes **Vite's programmatic middleware mode** to serve the hot-rebuilding React assets. In production (`npm run start`), Express serves the compiled static files from the `dist/` directory directly. 
This means you never have to manage separate frontend/backend URLs or worry about Cross-Origin Resource Sharing (CORS) errors.

### 2. Built for Large Payloads
To support resume document uploads (e.g., highly formatted PDFs, DOCX, or heavy text contents), the Express server includes a custom body parser limit:
```typescript
app.use(express.json({ limit: "25mb" }));
```
This allows users to drag-and-drop resumes safely without running into HTTP 413 (Payload Too Large) errors.

---

## 🦾 Resilient Gemini AI Integration

The system communicates with Google AI via the modern `@google/genai` TypeScript SDK. Since public AI endpoints can occasionally experience heavy traffic or transient availability issues, we've engineered a highly robust **Retry and Fallback System** directly in the backend (`server.ts`).

### 🔄 Multi-Model Fallback & Exponential Backoff
When an API request is dispatched to Gemini, the server runs it through `generateWithRetryAndFallback`.

1. **Model Cascade**: If the primary model fails or is congested, the system automatically falls back to secondary and tertiary models in this sequence:
   1. `gemini-3.5-flash` (Highest intelligence, default)
   2. `gemini-3.1-flash-lite` (Ultra-fast, light fallback)
   3. `gemini-flash-latest` (Stable legacy fallback)
2. **Transient Error Retry**: For rate limits (`429`) or server overloads (`503`), the system retries up to **3 times per model** using **Exponential Backoff** (waiting 1s, then 2s, then 4s) before trying the next model.
3. **Failsafe Delivery**: Only if all three models fail after three attempts each does the backend throw an error. This guarantees maximum uptime and reliability.

---

## 📊 Core Data Flows & Prompts

### 📁 Feature 1: Resume Analysis
```
User Uploads Resume ──> Base64/Raw Text ──> /api/analyze-resume ──> Prompt Engineering ──> UI Display
```
- **The Prompt**: Instructs Gemini to behave as an ATS parser and professional recruiter.
- **The Format**: Requests structured JSON including arrays for `skills`, `gaps`, and specific sections like `experienceReview` and `formattingReview` with visual scores (0 to 100).
- **The Output**: Rendered dynamically in the `ResumeAnalysis` component with color-coded circular progress bars and animated lists.

### 🎯 Feature 2: ATS & Job Matching
```
Resume + Job Description ──> /api/match-job ──> Structured Delta Comparison ──> ATS Alignment Score
```
- **The Prompt**: The AI behaves as a senior technical recruiter. It is handed both the candidate's parsed resume and the target job description.
- **The Output**: Returns an ATS Match percentage, listing "Matching Skills", "Missing Critical Skills", "Recommended Keywords", and a clear resume adjustment checklist.

### 🤖 Feature 3: Interactive Interview Simulator & Feedback Loop
```
Start Interview ──> Initial Question ──> User Response ──> /api/interview/chat ──> Follow-up Question + Feedback
```
- **State Preservation**: The frontend stores the rolling message history.
- **The Prompt**: Guides Gemini to review the last response, generate exactly **ONE** highly realistic question at a time (keeping questions conversational), and simultaneously score the candidate's previous response behind-the-scenes.
- **STAR Evaluation**: At the end of the simulation, the final report breaks down the conversation history, providing clear strengths and actionable points using the STAR methodology (Situation, Task, Action, Result).
