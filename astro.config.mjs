// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` en `base` worden ingesteld bij deploy (GitHub Pages / eigen domein).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
