# gameplane-website — AI assistant guide

Public marketing + docs site for Gameplane; the `website/` submodule of `GameplanePanel/Gameplane`. Static Astro, strict TypeScript, Tailwind CSS 4, no client framework. Default branch: `main`.

## House rules

- **Design-first:** visual source of truth is `website.pen` in this repo (Pencil MCP only — never read/edit the file directly). Update the design first; export touched nodes to `website-export/json/<id>.json` + `website-export/screenshots/<id>.png` in the same commit. Palette follows the main app's HeroUI theme (`web/src/styles/globals.css` in the main repo).
- **CI verifies:** locally only `npm run build` / `npm run check`; never run lint/tests locally. Fix what CI flags; no suppressions or loosened rules.
- **Git:** signed commits (`git commit -s`), conventional prefixes, one logical unit each; one branch per unit of work, PR to `main`, delete branch after merge. Then bump the submodule pointer in the main repo (`git add website`).
- **TypeScript:** strict; `no-explicit-any` and `no-floating-promises` are errors.
- **Multi-agent work** follows main-repo rules 13/17/18 (batched agents, sliced briefs, one diff review per batch, scripts for mechanical changes).

## Architecture

- **Semantic tokens only:** Tailwind utilities backed by CSS custom properties in `src/styles/global.css` (`bg-background`, `text-foreground`, `text-primary`, …), never raw hex — this keeps the `.theme-light` band on the landing page working.
- **Internal links via `withBase()`** (`src/lib/url.ts`): the site deploys under `/website` on GitHub Pages, so bare root-relative hrefs 404. Markdown cross-doc links are relative (`./architecture/`).
- **Docs:** content collection `src/content/docs/*.mdx` (schema `src/content.config.ts`); sidebar order and prev/next derive from `src/lib/docs-nav.ts`, so adding a page is frontmatter-only.
- OG/canonical meta use absolute URLs from `Astro.site`. Deployment config (origin, base path, GitHub URL, displayed version) lives in `src/config.ts`.

## Development

Dev server in background mode: `astro dev --background`; manage with `astro dev stop|status|logs`.

Astro docs: https://docs.astro.build (routing, components, content collections, styling).
