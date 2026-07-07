import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const staticDirs = ['css', 'js', 'images', 'fonts'];
const htmlFiles = readdirSync(root).filter((file) => file.endsWith('.html'));

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of htmlFiles) {
  await cp(path.join(root, file), path.join(dist, file));
}

for (const entry of staticDirs) {
  const source = path.join(root, entry);
  if (!existsSync(source)) continue;
  const info = await stat(source);
  await cp(source, path.join(dist, entry), { recursive: info.isDirectory() });
}

console.log(`Prepared ${htmlFiles.length} HTML page(s) and static assets in ./dist`);
