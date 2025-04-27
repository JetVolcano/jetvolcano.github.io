// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://jetvolcano.github.io/',
  integrations: [solidJs()]
});