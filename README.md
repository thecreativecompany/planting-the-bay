# Planting the Bay — polished Next.js starter

A Vercel-ready front-end for the Planting the Bay website.

## What this polished version includes

- Cleaned homepage hierarchy with fewer decorative-only elements
- Non-autoplay vision video embed for better performance and user control
- Berkeley-first roadmap, Why the Bay case, fundraising momentum, story, get-involved, give, and updates sections
- Mobile-first navigation with accessible mobile menu semantics
- Consolidated CSS: removed the oversized unused style sheet and kept only the current site styles
- Removed duplicate roadmap photo assets; one optimized content image remains in `public/roadmap-photo-1.png`
- Real Next.js routes for primary and footer/mobile navigation

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build check

```bash
npm run build
```

## Deploy to Vercel

1. Upload this folder to GitHub.
2. Import the repo in Vercel.
3. Use default Next.js settings.
4. Set the canonical domain to `plantingthebay.com` and redirect `plantthebay.com` to it.

## Main files

- `app/page.jsx`
- `app/globals.css`
- `app/layout.jsx`
- `app/components/SiteHeader.jsx`
- `app/components/InteriorPage.jsx`

## Routes

- `/story`
- `/vision`
- `/why-the-bay`
- `/get-involved`
- `/give`
- `/team`
- `/updates`
- `/prayer`
- `/partners`
- `/faq`
- `/contact`
