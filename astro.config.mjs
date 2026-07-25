// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Eigen domein op GitHub Pages: de site draait op de root van ce-it.be,
// dus base '/' (geen /CE-iT-Bv/ meer). public/CNAME koppelt het domein.
export default defineConfig({
  site: 'https://ce-it.be',
  base: '/',
  // De sitemap stond met de hand in public/, met een vaste lastmod-datum en
  // zonder slash op het einde (wat 301 doorstuurde). De build maakt hem nu
  // uit de echte routes: sitemap-index.xml + sitemap-0.xml.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
