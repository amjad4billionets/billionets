# Billionets Marketing Website

Production-ready marketing site for **Billionets**, an AI-first digital studio in Dubai. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

## Getting Started

```bash
npm install
npm run dev
```

The app will start on `http://localhost:8080` (configured via Vite).

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn-ui
- React Router

## Visual & Motion System

Global CSS and the footer script provide the following interaction primitives:

- **Card Tilt**: `.card.tilt` with `data-tilt-strength` (desktop pointer-based)
- **Reveal Mask**: `.reveal-wrap`, `.reveal-img`, `.reveal-overlay` (scroll-based image sweep)
- **Link Reveal**: `.link-reveal` underline animation on hover/focus
- **Hero Parallax**: `.hero-parallax` with pointer parallax on desktop and scroll-based parallax on mobile
- **Cursor Follower**: `.cursor-dot` custom cursor on desktop

All effects respect `prefers-reduced-motion` and degrade on touch devices for performance and accessibility.

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

