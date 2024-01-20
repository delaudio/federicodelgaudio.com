import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    domains: ["astro.build"],
  },
});
