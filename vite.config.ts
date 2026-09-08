import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'site',
  base: '/ChenyuZhangPersonalPage/',
  publicDir: '../public',
  plugins: [react()],
  build: { outDir: '../dist', emptyOutDir: true, assetsDir: 'assets' },
});
