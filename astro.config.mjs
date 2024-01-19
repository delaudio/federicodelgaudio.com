import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/icons",
    }),
    sitemap(),
  ],
  image: {
    domains: ["astro.build"],
  },
});
