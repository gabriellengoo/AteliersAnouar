import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ghalid126.github.io',
  base: '/ateliers-anouar',
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
