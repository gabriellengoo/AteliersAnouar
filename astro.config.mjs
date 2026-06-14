import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabriellengoo.github.io',
  base: '/AteliersAnouar',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    assets: 'assets',
  },
});
