import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
const attrs = ['href', 'src', 'poster'];
const urlPattern = /(?:href|src|poster)=["']([^"']+)["']/gi;
const cssUrlPattern = /url\(["']?([^"')]+)["']?\)/gi;
const externalPrefixes = ['http://', 'https://', 'mailto:', 'tel:', '#', 'data:', 'javascript:'];
const missing = [];

function isExternal(value) {
  return externalPrefixes.some((prefix) => value.startsWith(prefix));
}

function cleanPath(value) {
  return decodeURIComponent(value.split('#')[0].split('?')[0]);
}

function checkRef(sourceFile, value) {
  if (!value || isExternal(value)) return;
  const cleaned = cleanPath(value);
  if (!cleaned) return;
  const localPath = cleaned.startsWith('/')
    ? path.join(root, cleaned.slice(1))
    : path.resolve(root, path.dirname(sourceFile), cleaned);
  const directExists = fs.existsSync(localPath);
  const htmlExists = fs.existsSync(`${localPath}.html`);
  if (!directExists && !htmlExists) {
    missing.push({ sourceFile, value, resolved: localPath });
  }
}

for (const file of htmlFiles) {
  const body = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of body.matchAll(urlPattern)) checkRef(file, match[1]);
}

for (const dir of ['css']) {
  const dirPath = path.join(root, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath).filter((f) => f.endsWith('.css'))) {
    const sourceFile = path.join(dir, file);
    const body = fs.readFileSync(path.join(root, sourceFile), 'utf8');
    for (const match of body.matchAll(cssUrlPattern)) checkRef(sourceFile, match[1]);
  }
}

if (missing.length) {
  console.error(`Missing local references: ${missing.length}`);
  for (const item of missing) console.error(`${item.sourceFile} -> ${item.value}`);
  process.exit(1);
}

console.log(`OK: checked ${htmlFiles.length} HTML file(s). No missing local references found.`);
