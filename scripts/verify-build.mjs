import { readFile, stat, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const output = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate HTML IDs');
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(match[1]), `Broken anchor: ${match[1]}`);
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One identity heading expected');
assert(html.includes('Polymarket analytics') && html.includes('Blockspace/tree/main/Polymarket'), 'Missing quant project');
assert(html.includes('HK Uni Quant Trading Hackathon') && html.includes('Kevin-freshman/hackathon'), 'Missing Team 48 quant hackathon project');
assert(html.includes('Team captain'), 'Missing quant hackathon leadership role');
assert(html.includes('profile/chenyu-zhang.webp'), 'Missing profile portrait');
assert(html.includes('Summer Session, 2026'), 'Berkeley must be described as Summer Session');
const hero = html.slice(html.indexOf('<header'), html.indexOf('id="research"'));
assert(!hero.includes('Berkeley'), 'Berkeley should not appear in the first viewport');
assert(!html.includes('kevin.zhang@connect.ust.hk'), 'Incorrect generated email');
assert(html.includes('czhangew@connect.ust.hk'), 'Missing verified email');
const localRefs = new Set([...html.matchAll(/(?:src|href)="\/ChenyuZhangPersonalPage\/([^"#]+)"/g)].map(match => match[1]));
for (const path of localRefs) await stat(new URL(path, output));
for (const file of await readdir(new URL('assets/', output))) {
  if (!file.endsWith('.css')) continue;
  const css = await readFile(new URL(`assets/${file}`, output), 'utf8');
  for (const match of css.matchAll(/url\(["']?\/ChenyuZhangPersonalPage\/([^)'"\s]+)["']?\)/g)) await stat(new URL(match[1], output));
  assert(css.includes('@media print'), 'Missing PDF print styling');
  assert(css.includes('prefers-reduced-motion'), 'Missing reduced-motion fallback');
}
for (const match of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="[^"]*"/.test(match[0]), 'Missing image alt attribute');
assert.equal((html.match(/class="concept-label"/g) || []).length, 4, 'Every concept figure needs a visible disclosure');
console.log(`Verified prerendered content, navigation, ${localRefs.size} local assets, typography resources, concept labels and print/reduced-motion styles.`);
