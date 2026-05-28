// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://OCA-Internet-Brasileira.github.io',
  base: '/oca-vitrine',
  build: {
    assets: 'ativos',
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_GITHUB_TOKEN': JSON.stringify(process.env.PUBLIC_GITHUB_TOKEN || ''),
    },
  },
});
