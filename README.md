# Narrative Lens

Turn any news article into clear, engaging narratives — instantly.

Narrative Lens isn't a chatbot and it isn't a summarizer. It's a narrative
transformation engine: paste in a news article and get it rewritten as a
teen-friendly explainer, a neutral fact-only version, an engaging story,
or a comic-book script — or compare all three core styles side by side.

**Live demo:** https://narrative-lens.onrender.com

---

## The problem

News is often written at a reading level and tone that excludes people —
dense language, one-sided framing, no accessibility for younger readers
or anyone who just wants the facts without the noise. Narrative Lens
makes news easier to read, understand, and share, without changing the
underlying facts.

## Features

- **Single Style mode** — rewrite an article as Teen-Friendly, Neutral,
  Story, or Comic Script
- **Compare Perspectives mode** — generate all three core styles at once
  and read them side by side in a clean, collapsible layout
- **Input validation** — character limit with live counter, clear error
  messaging
- **One-click copy** on every generated output
- **Responsive design** — built mobile-first, works cleanly at any
  screen size

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS, custom dark theme
- **Language model:** Llama 3.3 70B via Groq API
- **Deployment:** Render

## Running locally

```bash
git clone https://github.com/kaycee3y/narrative-lens.git
cd narrative-lens/narrative-lens
npm install
```

Create a `.env.local` file in the project root with your Groq API key:

```
GROQ_API_KEY=your_key_here
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
narrative-lens/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── app/page.tsx          # Main tool interface
│   │   ├── api/generate/route.ts # Groq API integration
│   │   └── globals.css
```

---

Built for STEMist Hacks IV.