import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quizzone.replit.app',
  redirects: {
    '/quiz/iq': '/quiz/free-iq-test',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
  server: {
    port: parseInt(process.env.PORT) || 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: parseInt(process.env.PORT) || 3000,
    host: '0.0.0.0',
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
