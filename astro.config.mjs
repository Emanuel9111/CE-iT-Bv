// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages (project site). Bij overstap naar eigen domein (ce-it.be):
// site aanpassen en base verwijderen.
// base geldt alleen op GitHub Actions (deploy) — lokaal blijft de site op /.
const onGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://emanuel9111.github.io',
  base: onGitHubActions ? '/CE-iT-Bv' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
