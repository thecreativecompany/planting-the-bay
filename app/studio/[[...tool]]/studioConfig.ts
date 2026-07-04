import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Keep the hosted /studio route self-contained so Vercel builds do not fail
// when the root-level Sanity CLI config is omitted from a deploy artifact.
// The editable schema can be wired back in from `sanity/schemas` once a real
// Sanity project is connected.
const config = defineConfig({
  name: 'default',
  title: 'Planting the Bay CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'devprojectid',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [],
  },
});

export default config;
