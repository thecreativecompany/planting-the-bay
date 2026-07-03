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


## Timeline roadmap component

Integrated the roadmap using a shadcn-style component path:

- `components/ui/timeline.tsx`
- Imported in `app/page.jsx` using `@/components/ui/timeline`

Dependencies added:

```bash
npm install framer-motion
npm install -D typescript @types/react @types/react-dom @types/node
```

This project already uses Tailwind CSS and the `@/*` path alias. A `tsconfig.json` file was added so the existing JavaScript pages can safely import the new TypeScript/TSX timeline component.


## Why the Bay grid feature cards

Integrated the grid feature card component into the homepage **Why the Bay** section.

Added:

- `components/ui/grid-feature-cards.tsx`
- `lib/utils.ts`
- `lucide-react` dependency
- White-background / black-text feature grid styling in `app/globals.css`

The Why the Bay section now uses six feature cards focused on the region, campus ministry, pop-up services, digital outreach, relocation, and donor confidence.


## Sanity CMS + Formspree setup

This version includes Sanity schema/config files and Formspree-ready forms.

### Sanity

Files added:

- `sanity.config.ts`
- `sanity/lib/client.ts`
- `sanity/lib/queries.ts`
- `sanity/schemas/*`
- `app/studio/[[...tool]]/page.tsx`

Content types included:

- Site Settings
- Updates / Stories
- Pop-up Services / Events
- Team Members
- Partners / Endorsements
- Budget / Where Gift Goes

Add these environment variables in Vercel:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Sanity Studio route:

```txt
/studio
```

### Formspree

Forms now use Formspree-ready actions through environment variables:

```bash
NEXT_PUBLIC_FORMSPREE_GET_INVOLVED_URL=https://formspree.io/f/your-get-involved-id
NEXT_PUBLIC_FORMSPREE_EMAIL_SIGNUP_URL=https://formspree.io/f/your-email-signup-id
NEXT_PUBLIC_FORMSPREE_PRAYER_URL=https://formspree.io/f/your-prayer-id
NEXT_PUBLIC_FORMSPREE_CONTACT_URL=https://formspree.io/f/your-contact-id
NEXT_PUBLIC_FORMSPREE_GIVING_URL=https://formspree.io/f/your-giving-id
```

Forms added:

- Homepage email signup
- Homepage Get Involved form
- `/get-involved` pathway form
- `/give` giving-interest form
- `/prayer` prayer form
- `/contact` contact form

After downloading, run:

```bash
npm install
npm run build
```

`package-lock.json` was removed because new Sanity/Formspree-related dependencies were added; running `npm install` will regenerate it.


## Sanity Studio build fix

The `/studio` route now lazy-loads `next-sanity/studio` on the client through `app/studio/[[...tool]]/StudioClient.tsx`. This prevents the Studio package from being prerendered during `next build` on Vercel.
