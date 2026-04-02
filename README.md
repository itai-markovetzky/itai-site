# Itai Markovetzky — Personal Portfolio

> Automation & AI Developer · Personal brand + project showcase site

[![Live Site](https://img.shields.io/badge/Live-itai--site.vercel.app-00f5ff?style=flat-square&logo=vercel&logoColor=black)](https://itai-site.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## Overview

A dark-themed, hacker-aesthetic personal portfolio built to communicate technical credibility at a glance. Showcases automation projects, AI work, and professional background — with interactive features that reflect the skill set behind them.

---

## Features

| Feature | Description |
|---|---|
| **Particle Hero** | Animated neural-network background using tsparticles |
| **Typewriter** | Cycles through titles: Automation Developer → AI Enthusiast → Problem Solver |
| **Terminal Widget** | Fake terminal that types out on load |
| **AI Chatbot** | RAG-powered assistant answers questions about Itai using his CV (Gemini 2.0) |
| **Project Showcase** | Card grid with glitch-on-hover effect for all GitHub projects |
| **GitHub Stats** | Live contribution graph and top languages |
| **CV Download** | One-click PDF download |
| **Konami Easter Egg** | ↑↑↓↓←→←→BA — try it |
| **Scroll Animations** | Framer Motion fade/slide transitions on each section |
| **Mobile Responsive** | Tailwind breakpoints, hamburger nav |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom dark palette
- **Animations:** Framer Motion + tsparticles
- **AI:** Google Gemini 2.0 Flash via `@google/generative-ai`
- **Fonts:** JetBrains Mono + Inter
- **Deployment:** Vercel

---

## Getting Started

```bash
# Clone
git clone https://github.com/itai-markovetzky/itai-site.git
cd itai-site

# Install (requires Node.js >= 18.17)
npm install

# Add environment variables
echo "GOOGLE_GEMINI_API_KEY=your_key_here" > .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
itai-site/
├── app/
│   ├── api/chat/route.ts   # Gemini RAG chatbot endpoint
│   ├── layout.tsx
│   └── page.tsx
├── components/             # All UI components
├── data/
│   ├── projects.ts         # Project list
│   ├── now.ts              # "What I'm building now"
│   └── cv-text.ts          # CV text for RAG context
└── public/
    └── cv.pdf              # Downloadable CV
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `GOOGLE_GEMINI_API_KEY` | Google Gemini API key for the AI chatbot |

---

## License

MIT
