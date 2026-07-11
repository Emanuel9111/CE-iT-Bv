// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages (project site). Bij overstap naar eigen domein (ce-it.be):
// site aanpassen en base verwijderen.
export default defineConfig({
  site: 'https://emanuel9111.github.io',
  base: '/CE-iT',
  vite: {
    plugins: [tailwindcss()],
  },
});
