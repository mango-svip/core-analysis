import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify()
});