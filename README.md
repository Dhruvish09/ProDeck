# ProDeck

ProDeck is an interactive resume and portfolio experience built with Next.js 14 and Tailwind CSS.  
It showcases professional experience, skills, projects, certifications, and social content with rich micro-interactions powered by Framer Motion.

## Quick Highlights
- 🚀 Instant resume overview delivered with cinematic animations
- 🧠 Data-driven skill cards that expand into deep-dive modals
- 📄 One-click PDF download for sharing and offline viewing
- 🌐 Responsive layout tuned for recruiters on any device

## Features
- 🎨 Animated single-page experience with smooth section transitions
- 💼 Interactive cards with modal overlays for experience, projects, skills, and certifications
- 📥 Downloadable PDF resume (`public/Dhruvish_Resume.pdf`) ready for quick sharing
- 📱 Mobile-first responsive layout tested across breakpoints
- 🧱 App Directory setup with reusable layout wrapper and component-driven architecture

## Tech Stack
- `Next.js 14` (App Router)
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide Icons`

## Getting Started

### Prerequisites
- Node.js 18+ (recommend v18.17 or newer)
- npm 9+ (bundled with Node) or a compatible package manager

### Installation
```bash
git clone https://github.com/<your-username>/ProDeck.git
cd ProDeck
npm install
```

### Local Development
```bash
npm run dev
# open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## Project Structure
- `src/app/` – Next.js App Router entry points (`page.tsx`, layout, global styles)
- `src/components/` – Shared UI components (`Layout.tsx`)
- `src/pages/Resume.tsx` – Core resume experience (data models, sections, modals)
- `public/` – Static assets including downloadable resume PDFs and favicons
- `.github/workflows/nextjs.yml` – CI workflow for linting/build checks

## Customization
- Update personal data, experience, and project details in `src/pages/Resume.tsx`
- Replace `public/Dhruvish_Resume.pdf` with a personalized PDF (update filename if needed)
- Tweak theme colors and typography via `src/app/globals.css` and `tailwind.config.js`
- Modify layout or navigation wrappers in `src/components/Layout.tsx`

## Deployment
- **Vercel** – Deploy directly from the GitHub repository; compatible with Next.js App Router defaults
- **Static Export** – Run `npm run build` and serve `.next` through any Node-capable host
- **CI/CD** – GitHub Actions workflow (`nextjs.yml`) runs lint and build on pushes to ensure deployment readiness

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a pull request

## Roadmap
- Add section toggles for alternative resume views (leadership, engineering, AI focus)
- Integrate CMS-driven data for easier content updates
- Expand automated tests for core components and animations

## Contact
- **Email:** pateldhruvish612000@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/dhruvish09
- **GitHub:** https://github.com/Dhruvish09

---
Created and maintained by Dhruvish Patel.