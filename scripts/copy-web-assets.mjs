import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'www');
const assets = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'logo-mark.png',
  'logo.jpg'
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of assets) {
  const source = resolve(root, file);
  if (!existsSync(source)) {
    throw new Error(`Required SmashX web asset is missing: ${file}`);
  }
  await cp(source, resolve(output, file));
}

console.log(`Prepared ${assets.length} original SmashX web assets in www/.`);
