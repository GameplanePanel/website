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

## 2026-11-11 incremental: v0.4.0 docs and marketing sync

Docs, marketing and footer screens updated to the v0.4.0 release (`chore(release): v0.4.0` and `docs: correct stale v0.4.0 status`
in the main repo). Condensed text only; v0.4.0 changes are marked "(v0.4.0)" where the screen has room.

- New screens: `xA0uh` (Docs — Standalone Panel, copied from `CuW6O`, 1440x1120) and `H8zQ2X` (Docs — Languages & Translations,
  copied from `mYDXb`, 1440x900). Breadcrumb and active-sidebar state inside the Docs Top Bar instances (`egez2`, `rGlFW`)
  still show the source page labels; these instances were not edited.
- New sections and items: `FKsn6` (Upgrade notes for v0.4.0, on `D4SNhN`), `SQjeX` (Translations, on `N4TBV`), `Gxcze`
  (Orientation item 4 on `X0DeYH`), `NmHVl` (Clusters and nodes reference block on `upO5i`), `Qzd2s` and `q53ll` (table rows on
  `eDaA6` and `a0X2rT`), `tLPlD` (FAQ item on `Znh8i`), `iFA89` (language section on `yUfLD`), `J4pkIA` (NetworkCapture row on `IEkUB`).
- Components changed: footer `gnZrl` versionLine now reads "v0.4.0 · AGPL-3.0-or-later · Built on Kubernetes".
- Screens with text updates: `kTRsn` `n8pnD` `Yog9e` `SKMOT` `r4WPE` `aZAEs` `kSyrZ` `zeM79` `W3y92` `ZwM1N` `EWLk2` `g8vHa`
  `cUrQn` `a33qlt` `b5srx` `PSdPq` `z6p3NP` `s3NwF` `M3eBWD` `CuW6O` `OIN7m` `rW1Ux` `iif2F` `TESyw` `Gx9Xj` `b5u3Ui` `oX22m`
  `p5Gci` `SmOzJ` `KvC6V` `X0DeYH` `Yemnl` `QHFdH` `IwY6K` `mu58o` `QdLzE` `opatX` `yuCG9` `yUfLD` `D4SNhN` `N4TBV` `l1vmU`
  `deVW7` `HpLFh` `BlviB` `oi58h` `ydcNa` `qXFiI` `P5qsD` `vAYOC` `mYDXb` `gEOuV` `ivU89` `wvEgh` `IEkUB` `KFLCi` `cpCjN`
  `o5zdzd` `eDaA6` `a0X2rT` `Znh8i` `B39hL` `hnTHJ` `JjbY2` `IGuE6` `ei1qC` `K6tq5Z`.
- Heights changed: `xA0uh` 1120, `H8zQ2X` 900, `ZwM1N` 900, `zeM79` 1060, `W3y92` 900, `QHFdH` 1140, `yUfLD` 1000,
  `D4SNhN` 1050, `N4TBV` 960, `B39hL` 2970 (29 game cards in 10 rows; the screen grew, so the root screens below it moved).
- Screens reviewed with no change: `K2Rt4H` (group-level sidebar only), `wCt6V`, `s0Q7Lf`, `lRCKI`, `ZTnNa`, `ac8lF`, `o7PQv`,
  `A2sAtw`, `Dnjfp`, `FclAt`, `FUcVx`, `BEcZK`, `Nnd3Y`, `F7wFpj`, `U8xlE8`, `rqx1v`, `e8fTgD`, `h0PWaP`, `ncP9x`, `b7zNA`
  (diff lines do not map to visible text on the condensed screen).
- Moved roots (review-pass restack): all 102 root `Screen/` frames at x=0 were restacked in y order with 80 px gaps. The first one
  (`hnTHJ`, Screen/Landing Page) keeps y=268; each next root sits at previous.y + previous.height + 80. The restack removed the
  pre-existing overlaps (`B39hL`/`tfxmL`, `ei1qC`/`vh8hz`, `vh8hz`/`JjbY2`, `HpLFh`/`b5srx`). Overlap check: none among Screen roots.
  Top-level `y` was patched in the JSON exports of all 101 moved roots (the first root is unchanged). Several exports held stale y
  values (for example `ei1qC` 22443 and `zeM79` 61408 versus Pencil's pre-restack 22647 and 61612), and they were overwritten.
  `hYJwr` is not among the 102 Screen roots and was not moved; it has no JSON export.
- PNG sweep (review pass): all 102 root `Screen/` frames and the footer `gnZrl` were re-exported at 2x into `screenshots/`
  (every PNG is non-empty). This supersedes the earlier partial sweep described above.
- JSON method: `JSON.stringify(Get(id, {depth: 40, includePathGeometry: true}))`, printed in full (zero `"..."` elisions), written
  verbatim, length checked against Pencil's printed length, then formatted with `jq .`.
- Review fixes:
  - Docs version chips: the `changedScreens` list in the chip note holds 67 ids, not the 68 the note states. The list was not
    reconciled against Pencil, so the count is unverified. Chips were set to "v0.4" as described in the note. Chip JSON patches
    were made in place and are not affected by the restack beyond the top-level y.
  - Screen fixes, docs (7 screens): `X0DeYH` (callout text matches dashboard-tour.mdx; BFP6W item left as is), `ydcNa` (callout
    matches ownership-danger-zone.mdx), `Znh8i` (pre-v1 v0.4.0 answer wording), `b5srx` (roadmap item now reads as a backup/restore
    drill gap; a judgment call against roadmap.mdx), `D4SNhN` (TOC gains a "v0.4.0 notes" row, a duplicate of TOC Row 4; the
    stray first copy was deleted), `CuW6O` (first sentence of the multi-cluster.mdx callout; the "In v0.2.0-beta.8" sentence was
    dropped, so please confirm), `QHFdH` ("The agent gateway is available since v0.3.0.").
  - Screen fixes, marketing and changelog (3 screens): `P5qsD` (v0.3.0 changelog entry added after v0.4.0; the root grew to 1189
    px), `HpLFh` (headers GAMEPLANE / PTERODACTYL / CUBECODERS AMP / AGONES, PUFFERPANEL removed, " [BETA]" suffix removed; the
    multi-tenancy Gameplane cell wording still differs from comparison.mdx and was not changed), `vAYOC` (push example image path
    now ghcr.io/gameplanepanel/...). `b5u3Ui` had no OIDC install section and was not changed.
  - Screen fixes, landing and Docs chrome (4 screens): `hnTHJ` (install command `--version 0.4.0`), `JjbY2` (footer line
    "v0.4.0 · AGPL-3.0-or-later · Built on Kubernetes"), `xA0uh` and `H8zQ2X` (breadcrumb labels and active sidebar item set).
  - Screens edited in Pencil are live in the open file and need saving through the Pencil UI. Their PNGs were covered by the
    review-pass sweep above. Nothing was committed.
  - Last design-fix pass (2026-11-11):
    - Sidebar on `xA0uh` (instance `qlxUA`) and `H8zQ2X` (instance `bKw0z`): the overrides on `w7U9E`, `Ammc4` and `UNTiv` already equal the `K2Rt4H` component values (`$foreground/foreground` and `$muted`). Update cannot clear a descendants map (an empty object and `null` both left it unchanged), so the overrides remain as no-ops. Screenshots of `xA0uh`, `H8zQ2X` and `CuW6O` show the same highlight state.
    - `P5qsD` changelog: bullet `I4g7Xd` (v0.3.0) already reads "(30 at v0.3.0; Hell Let Loose was withdrawn in v0.4.0)". No change.
    - `b5srx` roadmap: first "Known limitations" item `uJQ0g` already reads "Users page: Service accounts and Identity providers tabs are placeholders, planned for v1.1 (OIDC is managed under Admin Settings → Authentication)." No change.
    - Nav `Qczsa`: betaBadge `Y4gJBd` already overrides the label to "Pre-v1"; no "Beta" text remains in the document. The Badge/Outline component `X4Xyl` keeps its generic "Badge" label. Screenshot shows the badge unclipped.
    - Exports: JSON for `xA0uh`, `H8zQ2X`, `P5qsD`, `b5srx` and `Qczsa` (zero elisions, lengths checked against Pencil). PNG re-export of all 102 root `Screen/` frames and `Qczsa` at 2x into `screenshots/`.
