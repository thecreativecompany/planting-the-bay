# Planting the Bay - Brief Implementation Notes

This static Vercel build was rewritten around the provided design brief.

## What changed

- Replaced the generic Webflow template pages with a Planting the Bay-specific site.
- Added the requested sitemap: Home, Our Story, Our Vision, Why the Bay, Get Involved, Give.
- Added recommended supporting pages: Team, Updates / Stories, Prayer, Partners, FAQ, Contact.
- Added persistent Give and Get Involved CTAs, plus sticky mobile quick actions.
- Added homepage modules from the brief: hero/video placeholder, at-a-glance roadmap, Year 1 goal progress meter, Why the Bay teaser, featured story, latest updates, and email capture.
- Added a donation page structure with recurring toggle, impact tiers, fund designation, budget transparency, and major gift notes.
- Added segmented Get Involved form for staff / relocation / volunteer / prayer pathways.
- Replaced old template imagery with neutral Bay Area SVG placeholders that are easy to swap later.

## Important TODOs before launch

- Replace all placeholder SVGs in `/images` with real Bay Area photo/video assets.
- Connect forms to Formspree, a CRM, newsletter provider, or CMS.
- Connect giving CTA to Stripe, Donorbox, Givebutter, Tithe.ly, Pushpay, or the selected provider.
- Replace placeholder fundraising progress and budget percentages with real approved numbers.
- Add final 501(c)(3), fund designation, receipt, and tax-deductibility language.
- Add analytics and conversion tracking for donations, forms, and email capture.
- Add CMS if non-developers need to manage updates, events, progress, and team content.
