# website.pen export manifest

Snapshot of `website.pen` (Pencil, MCP-only) for review in git. Full re-export 2026-09-27 after the HeroUI redesign.

## Contents

| Set | Count | Notes |
|---|---|---|
| Screens + local website components (Nav `Qczsa`, Footer `gnZrl`, Docs Top Bar `SOdlr`, Reference Top Bar `egO9x`, Badge/Outline `X4Xyl`, Docs/Expanded Sidebar `K2Rt4H`) | 104 | 98 `Screen/…` frames + 6 components |
| HeroUI components (children of container `hYJwr`, "HeroUI: Design System Components") | 177 | copied from the dashboard's `design.pen` |
| **Total** | **281** | `json/<id>.json` + `screenshots/<id>.png` each |

The lunaris library (`H:`-prefixed ids and variables) was removed from the design; its 100 exports were deleted.

## Method

- JSON: `Get(id, {depth: 40, includePathGeometry: true})` printed one node per line from batched `execute` calls, split
  into files by script, written like the dashboard's `design-export/` (2-space indent, UTF-8, trailing newline).
  All 279 parse; no `"..."` elisions (the one `"..."` in `U7t37` is pagination text content).
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

## 2026-09-27 incremental: comparison + logos

- `ei1qC` (Compare) and `HpLFh` (Docs — Comparison): four-way table (Gameplane, Pterodactyl, CubeCoders AMP, Agones;
  9 dimensions) from the main repo README, plus sources line on `ei1qC`.
- Logo mark in Nav `Qczsa`, Footer `gnZrl`, Docs sidebar `K2Rt4H` and the mobile screens `JjbY2`/`Bnjed` is an image fill
  of `design-assets/gameplane-icon.png`; Not Found `vh8hz` shows `design-assets/gameplane-mark.png` (PNGs rendered from
  the SVG logos, since Pencil does not render SVG image fills).
- Re-exported: JSON for the 102 screens/components (8 changed), screenshots for all 102 (component instances changed).

## 2026-10-06 incremental: docs sync with the main repo (v0.3.0 docs)

Docs screens updated to mirror the `docs: sync the docs with the main repo's October changes` commit (pages under
`src/content/docs/`). Condensed text only, plus new sections where a page gained an H2; v0.3.0-only content is marked.

- New screens: `QHFdH` (Docs — Remote Agent Gateway, copied from `CuW6O`) and `wCt6V` (Docs — Server Networking &
  Tunnels, copied from `s3NwF`).
- New sections: `OIN7m` (Multiple clusters and the gateway), `CuW6O` (Manage independent clusters), `D4SNhN` (CRD updates
  on upgrade, Upgrade notes for v0.3.0), `KFLCi` (API ↔ remote gateway), `N4TBV` (Submitting a change, Game modules and
  submodules), `TESyw` (folder delete item), `s3NwF` (relay tunnels item).
- Text and pager updates: `zeM79` `A2sAtw` `SKMOT` `QdLzE` `P5qsD` `rW1Ux` `n8pnD` `HpLFh` `X0DeYH` `p5Gci` `BEcZK`
  `b5u3Ui` `o7PQv` `ydcNa` `cpCjN` `Nnd3Y` `rqx1v` `b5srx` `aZAEs` `gEOuV` `mYDXb` `yuCG9` `ZwM1N` `VgF1s`.
- Heights changed: `OIN7m` 1000, `CuW6O` 1120, `D4SNhN` 1000, `N4TBV` 960, `HpLFh` 1280, `BEcZK` 1000, `VgF1s` 1000,
  `QHFdH` 1140.
- Reviewed with no change: `VtYGz` `kTRsn` `ZTnNa` `upO5i` `eDaA6` `ac8lF` (nothing on the screen maps to the page diff;
  not re-exported).
- JSON: `Print(JSON.stringify(Get(id, {depth: 30, includePathGeometry: true})))`, re-serialized with `jq .`; `jq empty`
  passes, zero `"..."` elisions, node counts match the live file. Screenshots: `Export([id], "png", …, {scale: 2})`.

## 2026-10-07 incremental: telemetry

Spec 022 (default telemetry) in the main repo: footer link, docs updates and two new pages
(`src/pages/telemetry.astro`, `src/content/docs/telemetry-provider-kubernetes.mdx`).

- New screens: `s0Q7Lf` (Docs — Telemetry Provider on Kubernetes, copied from `cpCjN`; next link → Modules & Sources)
  and `K6tq5Z` (Telemetry Statement, copied from `ei1qC`).
- Footer `gnZrl`: "Telemetry" link before GitHub in the Resources column; the inline mobile footer on `JjbY2` gets the
  same link.
- Text updates: `cpCjN` (Platform Settings: telemetry text, quick reference, next link → Telemetry Provider on
  Kubernetes), `kTRsn` (Helm Values Reference: new Telemetry block for `api.telemetry.enabled`, `api.telemetry.endpoint`,
  `api.telemetry.receiver.enabled`), `zeM79` (Air-gapped Installation: new section "Disable usage telemetry").
- Heights changed: `kTRsn` 1100, `zeM79` 1060.
- Re-exported: JSON + screenshots for `gnZrl` `JjbY2` `cpCjN` `kTRsn` `zeM79` `s0Q7Lf` `K6tq5Z`; screenshots only for
  the screens whose footer instance changed but whose JSON did not: `B39hL` `hnTHJ` `ei1qC` `vh8hz` `tfxmL` `IGuE6`.
- JSON: `JSON.stringify(Get(id, {depth: 30, includePathGeometry: true}))`, checked against the length and FNV-1a hash
  Pencil printed, then pretty-printed (2-space indent, UTF-8, trailing newline); zero `"..."` elisions. Screenshots:
  `export_nodes` at 2×.
