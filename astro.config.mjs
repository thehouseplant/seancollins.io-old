import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://seancollins.io',
  integrations: [sitemap(), tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    }
  }
});