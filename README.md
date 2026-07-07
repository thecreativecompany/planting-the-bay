# Planting the Bay - Vercel Static Build

This is a Vercel-ready static Webflow export.

## Why this package exists

The previous deployment log showed Vercel running `next build`, then failing because this export is not a Next.js app and has no `app/` or `pages/` directory.

This package fixes that by:

- Adding `vercel.json` with `framework: null`
- Adding a safe `vercel-build` script that prepares static files only
- Outputting the deployable website into `dist/`
- Keeping the Planting the Bay design brief inside `_project_docs/`

## Vercel settings

Use these settings when creating/importing the project:

- Framework Preset: Other
- Build Command: `npm run vercel-build`
- Output Directory: `dist`
- Install Command: `npm install`

If this is an existing Vercel project that previously used Next.js, also check:

Project Settings -> Build & Development Settings

Remove any command that says `next build`. Use `npm run vercel-build` instead.

## Local check

```bash
npm install
npm run vercel-build
```

Then preview the files inside `dist/`.

## Included project docs

The design brief is included in `_project_docs/`:

- `Planting-the-Bay-Web-Design-Brief_1.pdf`
- `Planting-the-Bay-Brief.md`

These files are included for project reference. They are not copied into the public `dist/` deployment output.
