import { cp, readFile, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Existing GitHub Pages publishes main at repository root. Only copy known build output.
const root = resolve(import.meta.dirname, '..');
for (const file of ['generated/teleoperation.png', 'generated/interaction.png', 'brand/lingju-huijing-logo.svg']) {
  await stat(resolve(root, 'dist', file));
}
const html = await readFile(resolve(root, 'dist/index.html'), 'utf8');
if (!html.includes('/ChenyuZhangPersonalPage/assets/') || !html.includes('Robotics')) throw new Error('Invalid production entrypoint');
for (const item of ['assets', 'generated', 'brand', 'index.html']) {
  await cp(resolve(root, 'dist', item), resolve(root, item), { recursive: true });
}
await writeFile(resolve(root, '.nojekyll'), '');
console.log('Validated build copied to the existing GitHub Pages root.');
