import { defineConfig } from 'astro/config';
import adapter from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: adapter(),
  vite: {
    plugins: [tailwindcss()]
  }
});
