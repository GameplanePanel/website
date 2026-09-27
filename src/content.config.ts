import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ base: "./src/content/docs", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      "start-here",
      "core-concepts",
      "operate",
      "platform",
      "develop",
      "reference",
    ]),
    order: z.number().int(),
    /** Lucide icon name shown in the docs sidebar. */
    icon: z.string(),
    /** Shorter sidebar label when the page title is long. */
    sidebarLabel: z.string().optional(),
    /** Sidebar group id (optional; start-here and core-concepts pages have no group). */
    group: z.string().optional(),
    /** Page eyebrow (e.g. "CONFIGURE"). Falls back to section label if absent. */
    eyebrow: z.string().optional(),
    /** Estimated read time (e.g. "9 MIN"). Computed from word count if absent. */
    readTime: z.string().optional(),
    /** List of topics this page covers (for the right rail "COVERS" section). */
    covers: z.array(z.string()).optional(),
    /** Optional override slug for the next guide link (defaults to next doc in sequence). */
    next: z.string().optional(),
  }),
});

export const collections = { docs };
