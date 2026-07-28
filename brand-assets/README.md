# Lancefield Advisory — brand image assets

All artwork is original geometric vector (SVG). **No photography** anywhere, per brand guidelines.
Everything here is resolution-independent and tiny — the whole set is 44.3 KB, so it adds
no meaningful page weight (raster images would; these do not).

## Folders
- `panels/`  — 12 decorative section panels (400×340, fill their frame). Used beside text to break up long copy.
- `icons/`   — 17 line icons (24×24). Cards/related links. Files are teal by default; change the `stroke` colour to recolour.
- `motifs/`  — the four-square brand mark and the tick used in checklists.
- `logos/`   — horizontal lockup + the LA mark (navy on light backgrounds).

## Colours
navy #1B2A4A · teal #2A7B7B · brass #C18F4B · stone #EEEAE0 · teal-tint #E4EEED · cream #F4F1EA

## Which panel represents what
- **panel-rose.svg** — generic / section opener (Glasgow rose)
- **panel-stems.svg** — generic (Mackintosh stems)
- **panel-grid.svg** — generic (four-square structure)
- **panel-waterfall.svg** — priority / who gets paid, in what order
- **panel-flow.svg** — a process or sequence of steps
- **panel-scales.svg** — legal order, fairness, the rules
- **panel-figures.svg** — people — employees, stakeholders
- **panel-cycle.svg** — turnaround, restructuring, refinancing
- **panel-shield.svg** — director duties, guarantees, protection
- **panel-clock.svg** — timing / how long things take
- **panel-growth.svg** — recovery, value, what it costs
- **panel-layers.svg** — liquidation types, documents, strata

## Which icon is what
- **icon-document.svg** — CVL / paperwork / claims
- **icon-coins.svg** — MVL / money / funds
- **icon-court.svg** — compulsory liquidation / court / winding-up
- **icon-scale.svg** — legal / order
- **icon-alert.svg** — risk / director consequences
- **icon-users.svg** — people / stakeholders
- **icon-building.svg** — HMRC / offices
- **icon-search.svg** — review / assessment
- **icon-target.svg** — planning / options
- **icon-layers.svg** — group structure / simplification
- **icon-shield.svg** — protection / guarantee
- **icon-check2.svg** — solvent / viable
- **icon-refresh.svg** — turnaround / restructure
- **icon-handshake.svg** — negotiation / agreement
- **icon-clock.svg** — timing
- **icon-chart.svg** — trends
- **icon-briefcase.svg** — administration / receivership

## Note for the developer
In the HTML mockups these SVGs are **inlined** (embedded directly in the markup) so the pages make
zero extra network requests. When you rebuild, you can either keep them inline or reference these
files with <img src> / <use> — either is fine; they are only a few KB each.
