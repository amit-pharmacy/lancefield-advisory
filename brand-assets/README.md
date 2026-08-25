# Lancefield Advisory brand assets

Everything the build needs that is not copy. 71 files.

All artwork is original geometric vector. There is no photography anywhere, per brand
guidelines, and none should be added: the panels exist so that long pages can be broken
up without reaching for stock imagery.

## Folders

- `panels/`  12 section panels (400x340). Decorative, they fill their frame.
- `icons/`   17 line icons (24x24). Teal by default; change the SVG `stroke` to recolour.
- `motifs/`  the four-square brand mark and the checklist tick.
- `logos/`   horizontal lockup and the LA mark, navy for light backgrounds.
- `png/`     raster copies of all of the above, for tools that cannot take SVG.
- `fonts/`   DM Serif Display and DM Sans as woff2, self-hosted.

## Colours

| Name | Hex | Token | Used for |
|---|---|---|---|
| Navy | #1B2A4A | --navy | Headers, footers, hero grounds, headings |
| Navy dark | #121D33 | --navy-dark | The darker end of the hero gradient |
| Teal | #2A7B7B | --teal | Links, icons, eyebrows, secondary accents |
| Teal dark | #1E5C5C | --teal-dark | Teal hover states |
| Teal tint | #E5F1F1 | --teal-tint | Icon circles and quiet panel grounds |
| Brass | #C18F4B | --brass | Primary calls to action only, nothing else |
| Stone | #E8DFD0 | --stone | Warm dividers and borders |
| Stone light | #F4EFE6 | --stone-light | Page ground behind white cards |
| Ink | #22252A | --ink | Body text |
| Warm grey | #6B6B6B | --warm-grey | Captions, small print, meta text |

Brass is for primary calls to action and nothing else. That single rule is what keeps
the palette calm; spending brass on anything decorative undoes it.

## Type

DM Serif Display for headings and the wordmark, 400 only. DM Sans for body, navigation,
buttons and captions, variable 300 to 700. Both are self-hosted here. Do not load them
from the Google Fonts CDN: the pages already serve them locally.

## Stylesheet

`lancefield.css` holds every colour above as a custom property, plus the button, card,
accordion and header components the 50 pages are built from. Read it before rebuilding
any component by hand.
