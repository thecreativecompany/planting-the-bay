# Planting the Bay - Vercel Static Site

This package is a Vercel-ready static Webflow export.

## Deploy to Vercel

1. Upload this folder/zip to Vercel or push it to GitHub and import the repo.
2. Use these Vercel settings:
   - Framework Preset: **Other**
   - Build Command: **None / leave empty**
   - Output Directory: **None / leave empty**
   - Install Command: **None / leave empty**
3. Vercel will serve `index.html` as the homepage.

## What was added

- `vercel.json` for static deploy behavior, clean URLs, and caching headers.
- `_project_docs/Planting-the-Bay-Web-Design-Brief_1.pdf` - original design brief for reference.
- `_project_docs/Planting-the-Bay-Brief.md` - quick implementation checklist from the brief.
- `.vercelignore` so internal project docs are not published on the live site by default.

## Updating assets later

Most visual assets are in:

- `images/`
- `fonts/`
- `css/the-creatives-stupendous-site-6cb212.webflow.css`

When replacing images, either keep the same file names or update the matching `src`, `srcset`, and CSS `url(...)` references.

## Local static check

Run this before deploying if you have Node installed:

```bash
npm run check
```

It checks all local HTML/CSS/JS/image/font links referenced by the static pages.
