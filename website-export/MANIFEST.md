# website.pen export manifest

Snapshot of `website.pen` (Pencil, MCP-only) for review in git. Full re-export 2026-09-27 after the HeroUI redesign.

## Contents

| Set | Count | Notes |
|---|---|---|
| Screens + local website components (Nav `Qczsa`, Footer `gnZrl`, Docs Top Bar `SOdlr`, Reference Top Bar `egO9x`, Badge/Outline `X4Xyl`, Docs/Expanded Sidebar `K2Rt4H`) | 102 | 96 `Screen/…` frames + 6 components |
| HeroUI components (children of container `hYJwr`, "HeroUI: Design System Components") | 177 | copied from the dashboard's `design.pen` |
| **Total** | **279** | `json/<id>.json` + `screenshots/<id>.png` each |

The lunaris library (`H:`-prefixed ids and variables) was removed from the design; its 100 exports were deleted.

## Method

- JSON: `Get(id, {depth: 40, includePathGeometry: true})` printed one node per line from batched `execute` calls, split
  into files by script. All 279 parse; no `"..."` elisions (the one `"..."` in `U7t37` is pagination text content).
- PNG: `export_nodes` at 2×; 279 files, none empty.
- Content checks: `gnZrl` has "v0.2.0-beta.8 · AGPL", `B39hL` "Fourteen more arrive in v0.3.0", `Znh8i` "no paid
  tiers", `P5qsD` a v0.2.0-beta.8 entry; no `H:` refs or `$H:--` variables anywhere.

## 2026-09-27 redesign (what changed)

- Palette: local variables named after `design.pen`'s HeroUI tokens (`accent/accent`, `surface/surface`, `muted`,
  `border/border`, …; theme axis `semantic` light/dark), values from the dashboard's `web/src/styles/globals.css`.
  ~6,000 hardcoded colors re-pointed to tokens.
- Components: lunaris buttons → HeroUI Button refs; docs meta chips → Chip/Soft; reference tab rows → Tab refs;
  security disclosure → Alert/Warning; FAQ → Accordion/Open; docs search action → Button/Outline/Icon; callouts,
  search fields and Badge/Outline restyled with Alert/Chip tokens; radii → `radius/{md,xl,2xl,3xl}`.
- Content: v0.2.0-beta.8 everywhere; Changelog entries beta.4–beta.8; Games gains a "Coming in v0.3.0" section with
  the 14 new modules; table overflow fixes on Compare and Comparison.
