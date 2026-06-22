# Planting the Bay — Next.js + Tailwind Starter

A Vercel-ready front-end starter for the Planting the Bay website.

This version is aligned to the uploaded design brief:

- Fundraising + storytelling homepage
- Mobile-first navigation and sticky giving CTA
- Hero with vision-video placeholder
- Clear Give and Get Involved actions
- Berkeley-first expansion roadmap
- Year 1 fundraising momentum meter placeholder
- Why the Bay teaser section
- Stuart & Ashley / story section placeholder
- Get Involved pathway cards
- Giving section with recurring partner framing
- Email capture module
- Parallax on video, image cards, and flyover area
- Section color-wipe animations, headline slide-ins, staggered cards, and motion polish

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Upload this folder to GitHub.
2. Import the repo in Vercel.
3. Use default Next.js settings.
4. Set the canonical domain to `plantingthebay.com` and redirect `plantthebay.com` to it.

## Main files

- `app/page.jsx`
- `app/globals.css`
- `app/layout.jsx`


## Added page navigation routes

The primary navigation now links to real Next.js routes instead of only homepage anchor sections:

- `/story`
- `/vision`
- `/why-the-bay`
- `/get-involved`
- `/give`

Secondary placeholder routes were also added for footer/mobile navigation:

- `/team`
- `/updates`
- `/prayer`
- `/partners`
- `/faq`
- `/contact`

These pages use starter placeholder content so the navigation works immediately on Vercel.
