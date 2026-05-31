// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const siteUrl = env.PUBLIC_SITE_URL || process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://www.energiemakler-beispiel.de';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
});

