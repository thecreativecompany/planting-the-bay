# Planting the Bay - Vercel Static Site

This is a static Vercel-ready redesign based on the Planting the Bay website design brief.

## Deploy on Vercel

Use these settings:

- Framework Preset: `Other`
- Install Command: `npm install`
- Build Command: `npm run vercel-build`
- Output Directory: `dist`

The `vercel.json` already forces Vercel to treat this project as a static site, not Next.js.

## Local check

```bash
npm install
npm run check
npm run build
```

## Important project files

- `index.html` - homepage
- `our-story.html` - story page
- `our-vision.html` - vision and roadmap page
- `why-the-bay.html` - donor-confidence/data page
- `get-involved.html` - segmented involvement form
- `give.html` - giving conversion page
- `team.html`, `updates.html`, `prayer.html`, `partners.html`, `faq.html`, `contact.html` - supporting pages
- `css/planting-the-bay.css` - full visual system
- `js/planting-the-bay.js` - mobile menu, demo forms, donation toggle, FAQ accordion
- `_project_docs/Planting-the-Bay-Web-Design-Brief_1.pdf` - original brief
- `_project_docs/Planting-the-Bay-Brief-Implementation-Notes.md` - implementation notes and TODOs

## Replace assets later

Current images are neutral SVG placeholders in `/images`:

- `hero-bay-placeholder.svg`
- `bay-map-placeholder.svg`
- `story-people-placeholder.svg`
- `team-placeholder.svg`
- `og-planting-the-bay.svg`

Replace them with real Bay Area photography, Stuart/Ashley photos, the vision video, and the 3D Bay Area flyover when ready.

## Forms and giving

Forms are demo-only and show a local success message. Before launch, connect them to Formspree, CRM, newsletter, or CMS.

The Give page CTA currently points to Contact. Replace it with the final giving provider URL or embed once the provider is selected.
