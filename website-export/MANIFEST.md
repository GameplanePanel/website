# website.fig export manifest

`website.fig` at the repository root is the website design. This folder is its snapshot for review in git: one entry per screen in three forms.

| Folder | Holds |
|---|---|
| `fig/<file>.fig` | The screen on its own, with the components and icons it uses, so it opens by itself in Figma or OpenPencil |
| `json/<file>.json` | Layout, paints, text, and the design variable each layer binds; an instance lists the text it shows instead of its component's layers |
| `screenshots/<file>.png` | The screen rendered at 2x |

`screens.json` lists every screen: its file name, its ID in `website.fig`, its name, and its size. `parts.json` lists the six website components that sit at the top level of the canvas (Nav, Footer, Docs Top Bar, Reference Top Bar, Badge/Outline, Docs/Expanded Sidebar); each is exported in the same three forms.

## Which frames are screens

Every top-level frame or instance on the `Website` page, except the `HeroUI: Design System Components` board (a copy of the dashboard's HeroUI components, exported with the dashboard design in the main repo).

## File names

A screen keeps the node ID it had in the old `website.pen` as its file name (`hnTHJ.json` is the landing page). A new screen is named after its `website.fig` ID with `:` written as `-` (`1-232.json`). `screens.json` maps one to the other.

## Regenerating

The main repository's `hack/design/fig-export.ts` writes all three forms, `screens.json` and `parts.json`. It runs on OpenPencil's headless CLI from a checkout of [ValgulNecron/open-pencil](https://github.com/ValgulNecron/open-pencil) `master`; the script's header gives the commands:

```sh
cp <gameplane>/hack/design/fig-export.ts <open-pencil>/packages/cli/fig-export.ts
cd <open-pencil>/packages/cli
bun fig-export.ts <website>/website.fig <website>/website-export
```

Re-run it after every change to `website.fig` and commit the export with the change. Unchanged screens come out byte-identical.

## History

`website.fig` was converted from `website.pen` with OpenPencil on 2026-11-22. The Pencil export made before then, and this manifest's earlier log of it, are in git history.
