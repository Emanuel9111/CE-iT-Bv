// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Eigen domein op GitHub Pages: de site draait op de root van ce-it.be,
// dus base '/' (geen /CE-iT-Bv/ meer). public/CNAME koppelt het domein.
export default defineConfig({
  site: 'https://ce-it.be',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
