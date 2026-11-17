// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { BASE, SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Mermaid fences are left as plain <pre><code class="language-mermaid"> blocks
    // and drawn in the browser by src/scripts/mermaid-diagrams.ts.
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    shikiConfig: {
      // Dark theme with warm orange accents, close to the site's palette;
      // the block background is overridden to --terminal in global.css.
      theme: "vesper",
    },
  },
});
