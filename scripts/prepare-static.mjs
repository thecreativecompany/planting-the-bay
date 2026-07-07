import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const htmlEntries = readdirSync(root).filter((file) => file.endsWith('.html'));
const publicEntries = [
  ...htmlEntries,
  'css',
  'js',
  'images',
  'fonts'
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of publicEntries) {
  const source = path.join(root, entry);
  if (!existsSync(source)) continue;
  const target = path.join(dist, entry);
  const info = await stat(source);
  await cp(source, target, { recursive: info.isDirectory() });
}

console.log('Static Webflow export prepared in ./dist');
