import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yoursite.com', // Replace with your domain before deploying
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  output: 'static',
});
