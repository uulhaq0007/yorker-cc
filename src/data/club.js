export const club = {
  name: 'Yorker',
  full: 'Yorker Cricket Club',
  short: 'YCC',
  founded: 1978,
  league: 'Meridian Premier League',
  ground: 'Ashfield Oval, Fenwick Road, Ashfield',
  email: 'club@yorkercc.co',
  phone: '+44 20 7946 0812',
  colors: { primary: '#e03821', secondary: '#151a19' },
}

export const navigation = [
  {
    label: 'Home',
    to: '/',
    children: [
      { label: 'Club Overview', to: '/' },
      { label: 'Fixtures & Results', to: '/fixtures' },
      { label: 'League Table', to: '/table' },
    ],
  },
  {
    label: 'Club',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Ground', to: '/about' },
      { label: 'Academy', to: '/about' },
      { label: 'Sponsors', to: '/sponsors' },
    ],
  },
  { label: 'Squad', to: '/squad' },
  {
    label: 'Cricket',
    to: '/fixtures',
    children: [
      { label: 'Fixtures', to: '/fixtures' },
      { label: 'Results', to: '/fixtures' },
      { label: 'League Table', to: '/table' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

/* Crest colours drive the generated SVG badges — no third-party logos anywhere. */
export const teams = {
  yorker:   { name: 'Yorker',      abbr: 'YCC', color: '#e03821', dark: '#151a19' },
  ravens:   { name: 'Ravens',      abbr: 'ASR', color: '#3d3d6b', dark: '#1b1b33' },
  kings:    { name: 'Harbour Kings', abbr: 'HRK', color: '#c9a227', dark: '#3b3110' },
  falcons:  { name: 'Falcons',     abbr: 'RDF', color: '#1f7a5a', dark: '#0d3125' },
  titans:   { name: 'Titans',      abbr: 'CST', color: '#2266aa', dark: '#0e2b45' },
  united:   { name: 'Northgate',   abbr: 'NGU', color: '#8a3d8f', dark: '#331436' },
  lions:    { name: 'Lions',       abbr: 'RSL', color: '#d1691f', dark: '#452009' },
}

export const recentMatches = [
  { date: 'Aug 24, 2026', home: 'yorker', away: 'ravens',  hs: 186, as: 152, comp: 'Premier League', venue: 'Ashfield Oval' },
  { date: 'Aug 17, 2026', home: 'yorker', away: 'kings',   hs: 141, as: 138, comp: 'Premier League', venue: 'Harbour Park' },
  { date: 'Aug 10, 2026', home: 'yorker', away: 'falcons', hs: 204, as: 177, comp: 'T20 Cup',        venue: 'Ashfield Oval' },
  { date: 'Aug 03, 2026', home: 'titans', away: 'yorker',  hs: 119, as: 163, comp: 'Premier League', venue: 'Coastal Ground' },
]

export const upcoming = [
  { date: 'Sep 07, 2026', time: '11:00', home: 'yorker', away: 'lions',  comp: 'Premier League', venue: 'Ashfield Oval' },
  { date: 'Sep 14, 2026', time: '13:30', home: 'united', away: 'yorker', comp: 'Premier League', venue: 'Northgate Fields' },
  { date: 'Sep 21, 2026', time: '11:00', home: 'yorker', away: 'titans', comp: 'T20 Cup Semi',   venue: 'Ashfield Oval' },
]

export const standings = [
  { pos: 1, team: 'yorker',  p: 5, w: 4, l: 1, pts: 8 },
  { pos: 2, team: 'ravens',  p: 5, w: 3, l: 2, pts: 6 },
  { pos: 3, team: 'kings',   p: 4, w: 2, l: 1, pts: 5 },
  { pos: 4, team: 'falcons', p: 4, w: 2, l: 2, pts: 4 },
  { pos: 5, team: 'titans',  p: 5, w: 2, l: 3, pts: 4 },
  { pos: 6, team: 'united',  p: 4, w: 1, l: 3, pts: 2 },
  { pos: 7, team: 'lions',   p: 5, w: 1, l: 4, pts: 2 },
]

export const stats = [
  { label: 'Members', value: 340, suffix: '+' },
  { label: 'Matches Played', value: 2148, suffix: '' },
  { label: 'Years', value: 48, suffix: '+' },
  { label: 'Trophies', value: 31, suffix: '' },
]

export const squad = [
  { no: 7,  name: 'Idris Fenwick',   role: 'Captain / Batter',  image: `${import.meta.env.BASE_URL}images/player-1.jpg`, bats: 'Right', bowls: 'Off spin',   matches: 148, runs: 4820 },
  { no: 12, name: 'Owen Delacroix',  role: 'Fast Bowler',       image: `${import.meta.env.BASE_URL}images/player-2.jpg`, bats: 'Left',  bowls: 'Right fast', matches: 96,  runs: 610 },
  { no: 4,  name: 'Rosa Whitlam',    role: 'All-rounder',       image: `${import.meta.env.BASE_URL}images/player-3.jpg`, bats: 'Right', bowls: 'Leg spin',   matches: 112, runs: 2740 },
  { no: 21, name: 'Nadia Berrick',   role: 'Wicketkeeper',      image: `${import.meta.env.BASE_URL}images/player-4.jpg`, bats: 'Right', bowls: '—',          matches: 87,  runs: 1985 },
  { no: 9,  name: 'Gerald Ainsworth',role: 'Opening Batter',    image: `${import.meta.env.BASE_URL}images/player-5.jpg`, bats: 'Left',  bowls: 'Medium',     matches: 203, runs: 7310 },
  { no: 33, name: 'Camille Okonjo',  role: 'Spin Bowler',       image: `${import.meta.env.BASE_URL}images/player-6.jpg`, bats: 'Right', bowls: 'Left spin',  matches: 74,  runs: 480 },
  { no: 18, name: 'Marta Sundqvist', role: 'Middle Order',      image: `${import.meta.env.BASE_URL}images/player-7.jpg`, bats: 'Right', bowls: 'Medium',     matches: 129, runs: 3560 },
  { no: 5,  name: 'Priya Vasanth',   role: 'All-rounder',       image: `${import.meta.env.BASE_URL}images/player-8.jpg`, bats: 'Left',  bowls: 'Right fast', matches: 91,  runs: 2210 },
]

export const trending = {
  main: {
    slug: 'ashfield-run-chase',
    day: '24', month: 'Aug',
    category: 'Match Report',
    title: 'The run chase that turned Ashfield into a fortress',
    excerpt:
      'Thirty-eight needed off eighteen, two wickets standing and a crowd that would not sit down. How the middle order held its nerve at the Oval.',
    image: `${import.meta.env.BASE_URL}images/trending-main.jpg`,
    likes: 214, comments: 18,
  },
  side: [
    { slug: 'reading-the-seam', category: 'Coaching', date: 'Aug 21, 2026', title: 'Reading the seam: what quick bowlers watch for', image: `${import.meta.env.BASE_URL}images/trending-1.jpg` },
    { slug: 'chasing-under-lights', category: 'Analysis', date: 'Aug 19, 2026', title: 'Why chasing under lights is a different sport', image: `${import.meta.env.BASE_URL}images/trending-2.jpg` },
    { slug: 'square-that-drains', category: 'Groundskeeping', date: 'Aug 15, 2026', title: 'Building a square that drains in forty minutes', image: `${import.meta.env.BASE_URL}images/trending-3.jpg` },
  ],
}

export const news = [
  { slug: 'ashfield-run-chase',   category: 'Match Report', date: 'Aug 24, 2026', comments: 18, title: 'The run chase that turned Ashfield into a fortress', image: `${import.meta.env.BASE_URL}images/news-1.jpg`,
    excerpt: 'Thirty-eight needed off eighteen, two wickets standing and a crowd that would not sit down.' },
  { slug: 'academy-intake-2027',  category: 'Academy',      date: 'Aug 20, 2026', comments: 6,  title: 'Academy opens winter intake for under-17 seamers',   image: `${import.meta.env.BASE_URL}images/news-2.jpg`,
    excerpt: 'Twenty-four places, eight weeks of indoor work and a pathway that has fed the first XI for a decade.' },
  { slug: 'keeping-standards',    category: 'Coaching',     date: 'Aug 16, 2026', comments: 11, title: 'Keeping standards: the drills behind clean hands',   image: `${import.meta.env.BASE_URL}images/news-3.jpg`,
    excerpt: 'Our wicketkeeping coach breaks down the four drills every glovesman repeats before a match day.' },
  { slug: 'floodlit-fixtures',    category: 'Club News',    date: 'Aug 12, 2026', comments: 3,  title: 'Floodlit fixtures confirmed for the autumn block',  image: `${import.meta.env.BASE_URL}images/news-4.jpg`,
    excerpt: 'Three evening games join the calendar as the county signs off on the new lighting rig at the Oval.' },
  { slug: 'volunteers-weekend',   category: 'Community',    date: 'Aug 08, 2026', comments: 9,  title: 'The volunteers who get the Oval ready every weekend', image: `${import.meta.env.BASE_URL}images/news-5.jpg`,
    excerpt: 'Rollers at six, teas at eleven, sightscreens by noon. Meet the people the fixture list depends on.' },
]

export const partners = [
  'Ashfield Mills', 'Kestrel Sports', 'Harrow & Vane', 'Meridian Bank',
  'Copperline', 'Fenwick Motors', 'Northolt Print', 'Rowan Insurance',
]

export const gallery = [
  { image: `${import.meta.env.BASE_URL}images/gallery-1.jpg`, count: '2.8k' },
  { image: `${import.meta.env.BASE_URL}images/gallery-2.jpg`, count: '1.4k' },
  { image: `${import.meta.env.BASE_URL}images/gallery-3.jpg`, count: '3.1k' },
  { image: `${import.meta.env.BASE_URL}images/gallery-4.jpg`, count: '947' },
  { image: `${import.meta.env.BASE_URL}images/gallery-5.jpg`, count: '2.2k' },
  { image: `${import.meta.env.BASE_URL}images/gallery-6.jpg`, count: '1.9k' },
]

export const heroSlides = [
  {
    image: `${import.meta.env.BASE_URL}images/hero-1.jpg`,
    eyebrow: 'Matchday',
    title: 'Detailed match reports & live scoring',
    text: 'Every ball logged, every innings written up before the covers come on. Follow the first XI through the Meridian Premier League.',
    cta: { label: 'Read More', to: '/news' },
    ghost: 'Cricket',
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-2.jpg`,
    eyebrow: 'Season 2026',
    title: 'Four wins from five at the top of the table',
    text: 'A young side, a fast outfield and the best home record in the division. There has never been a better season to join us at the Oval.',
    cta: { label: 'View Fixtures', to: '/fixtures' },
    ghost: 'Season',
  },
]

export const faqs = [
  { q: 'How do I join the club?', a: 'Winter nets run from January and are open to anyone over sixteen. Turn up to a Tuesday session or send us a note and we will pair you with a squad coach.' },
  { q: 'Is there a junior section?', a: 'Yes — the academy runs under-11 through under-17 age groups, with a dedicated girls pathway from under-13 upward.' },
  { q: 'Can I hire the ground?', a: 'The Oval and the pavilion are available for midweek fixtures and private events outside the league calendar. Rates include a prepared square.' },
  { q: 'Where can I park on match days?', a: 'There are 60 spaces behind the pavilion on Fenwick Road, free for members and £3 for visitors on league Saturdays.' },
  { q: 'Do you stream matches?', a: 'Home league games and both cup semi-finals are streamed from the pavilion camera, with live scorecards on the fixtures page.' },
]
