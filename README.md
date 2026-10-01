# Yorker Cricket Club — React front-end

A front-end-only React rebuild of a cricket-club site layout, rewritten from scratch with
original branding, copy, crests and imagery. No backend, no CMS — all content lives in
[`src/data/club.js`](src/data/club.js).

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Routing | react-router-dom (`BrowserRouter`) |
| Styling | Tailwind CSS 3.4 + a component layer in `src/index.css` |
| Icons | `react-icons` (Feather / Font Awesome) |
| Fonts | Inter Tight (display) + DM Sans (body), via Google Fonts |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # emits dist/
npm run preview  # serve the production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Full landing page — hero slider, results strip, trending, league table, stats, video banner, squad rail, news, sponsors, welcome banner, newsletter, photo strip |
| `/about` | Club story, stats, four-moment history timeline |
| `/fixtures` | Upcoming / Results tabs |
| `/table` | Full league standings |
| `/squad` | Player cards with career figures |
| `/sponsors` | Partner board |
| `/news` | Post grid with category filter |
| `/news/:slug` | Match report with sidebar |
| `/contact` | Contact cards, FAQ accordion, validated form, ground locator |
| `*` | 404 |

## Project layout

```
src/
  components/
    layout/     Header (overlay→sticky nav, drawer, search), Footer, PageBanner, BackToTop
    sections/   Hero, MatchStrip, Trending, LeagueTable, Stats, VideoBanner, Squad,
                LatestNews, Partners, WelcomeBanner, Newsletter, GalleryStrip
    ui/         Logo, Crest, Reveal, SectionHeading
  data/club.js  Club details, nav, fixtures, standings, squad, news, FAQs
  hooks/        useInView (scroll reveals), useCountUp (animated stats)
  pages/        One component per route
public/images/  30 photographs, all served locally — see ATTRIBUTION.md
```

## Editing content

`src/data/club.js` drives everything. Change the club name, ground, league, fixtures,
standings, squad or news there and every page follows — including the wordmark and footer.

**League crests are generated, not image files.** Add a team to the `teams` map with a
`name`, `abbr` and two hex colours and `<Crest team="…" />` draws its badge:

```js
export const teams = {
  yorker: { name: 'Yorker', abbr: 'YCC', color: '#e03821', dark: '#151a19' },
  // …
}
```

Palette and type live in [`tailwind.config.js`](tailwind.config.js): `accent` (#e03821),
`ink`, `night`, `body`, `paper`, `band`.

## Interaction notes

- **Header** — transparent over the hero on `/`, flips to a solid fixed bar past 90px; inner
  pages use `sticky` so nothing jumps.
- **Hero & squad rail** — hero is a fade carousel with autoplay and pause-on-hover; the squad
  rail uses native scroll-snap so trackpad, touch and keyboard all work, with a progress bar
  tracking scroll position.
- **Reveals** — `useInView` adds `.is-visible`, and also checks the element rect on mount so an
  anchor jump or restored scroll position can never strand a section at `opacity: 0`.
- **Counters** — `requestAnimationFrame` easing that respects `prefers-reduced-motion`.
- **Forms** — newsletter and contact both validate client-side and confirm locally. There is no
  backend; nothing is transmitted.
- **Video banner** — opens a modal with a placeholder panel. Drop in an embed or `<video>` to
  make it real.
- Full `prefers-reduced-motion` block disables reveals, parallax and looping animation.

## Images & licensing

All 30 photographs are freely licensed and stored locally, so the build has no external image
dependencies. **Fifteen are CC BY-SA**, which requires attribution *and* share-alike — read
[ATTRIBUTION.md](ATTRIBUTION.md) before using this commercially. The logo, crests, favicon and
sponsor wordmarks are original to this project.

Player portraits are generic stock headshots rather than photographs of real cricketers —
casting identifiable athletes as a fictional club's roster would misrepresent them. A CSS
treatment (`.squad-photo`) desaturates them so the set reads as one squad.
