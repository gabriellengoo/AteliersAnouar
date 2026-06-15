import { defineConfig } from 'astro/config';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: isVercel ? undefined : 'https://gabriellengoo.github.io',
  base: isVercel ? '/' : '/AteliersAnouar',
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
    format: isVercel ? 'file' : 'directory',
  },
});
