import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

// Middleware-only transform context: no network listener or browser preview.
const compiler = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await compiler.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  const file = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(file, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender target');
  // Static content is readable even when JavaScript is unavailable; hydrate for interaction.
  await writeFile(file, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`).replace(/<noscript>[\s\S]*?<\/noscript>/, '').replace(/[ \t]+$/gm, ''));
  console.log('Prerendered portfolio content for search engines and no-JavaScript visitors.');
} finally { await compiler.close(); }
