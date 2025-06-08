Performance Benchmarking Tool
Problem Statement
Create a browser-based app that benchmarks frontend performance of websites (using Lighthouse APIs or similar) and provides optimization tips.

Short Description
A web app for benchmarking any site’s frontend performance with:

Landing page

URL input page
Validates user-entered addresses in real time (requires a valid domain and protocol) and only enables the “Analyze” button when the input passes validation.

Output page
Fetches and visualizes key metrics (LCP, FCP, TTFB, CLS, etc.) for the given URL, with actionable optimization tips.

Designed to be fully responsive, minimal-config, and easily extensible to support additional performance checks or custom visualizations.

Tech Stack
Front-End
Framework: React (with React Router)

Language: TypeScript

Styling: Tailwind CSS

Back-End / API
Runtime: Node.js

Framework: Express (or Next.js API routes)

Performance Data: Google PageSpeed Insights API + Chrome UX Report

HTTP Client: httpx 0.28.1

LLM Orchestration:

langchain_core 0.3.64

langchain_groq 0.3.2

Data Validation & Settings:

pydantic 2.11.5

pydantic_settings 2.9.1

Features
PageSpeed Insights Integration
Calls the Google PageSpeed Insights API under the hood to fetch key metrics (LCP, FCP, TTFB, CLS, etc.).

Real-Time Dashboard
Displays those performance metrics in a clean, responsive UI.

LLM-Powered Optimization Tips
Sends the raw metrics to an LLM (via LangChain/OpenAI) and surfaces human-readable, actionable recommendations for speed improvements.

Fully Responsive
Tailwind-powered layouts ensure it looks great on mobile, tablet, and desktop.

How to Run
Frontend
bash
Copy
npm install
npm run dev
Backend
(Include your backend run steps here, e.g.,)

bash
Copy
pip install -r requirements.txt
uvicorn main:app --reload
AI Usage Explanation
The app sends the performance data fetched from PageSpeed Insights API to an LLM through LangChain orchestration, which processes and generates actionable, human-readable optimization tips. This integration enables enhanced insights beyond raw metrics, helping users improve website speed and user experience efficiently.
