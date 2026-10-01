import { teams } from '../../data/club'

/**
 * Generated club badge — a shield with a stitched-ball motif and the club's
 * abbreviation. Drawn from the team's palette so every crest in the league is
 * original artwork rather than a borrowed logo.
 */
export default function Crest({ team, size = 44, className = '' }) {
  const t = teams[team] ?? teams.yorker
  const id = `crest-${team}`

  return (
    <svg
      viewBox="0 0 64 72"
      width={size}
      height={(size * 72) / 64}
      className={className}
      role="img"
      aria-label={`${t.name} club crest`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={t.color} />
          <stop offset="100%" stopColor={t.dark} />
        </linearGradient>
      </defs>

      {/* Shield */}
      <path d="M32 1.5 60 9v29c0 15.2-11 26.6-28 32.4C15 64.6 4 53.2 4 38V9z" fill={`url(#${id})`} />
      <path
        d="M32 1.5 60 9v29c0 15.2-11 26.6-28 32.4C15 64.6 4 53.2 4 38V9z"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="1.6"
      />

      {/* Seam arcs, echoing a cricket ball */}
      <g stroke="#fff" strokeOpacity="0.5" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M13 20c8 3 30 3 38 0" />
        <path d="M13 25c8 3 30 3 38 0" />
      </g>

      {/* Stumps */}
      <g fill="#fff" fillOpacity="0.9">
        <rect x="26" y="47" width="2.2" height="13" rx="1.1" />
        <rect x="31" y="47" width="2.2" height="13" rx="1.1" />
        <rect x="36" y="47" width="2.2" height="13" rx="1.1" />
        <rect x="25" y="45" width="6" height="1.6" rx="0.8" />
        <rect x="33" y="45" width="6" height="1.6" rx="0.8" />
      </g>

      <text
        x="32"
        y="41"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="700"
        fontFamily="Inter Tight, sans-serif"
        letterSpacing="0.5"
      >
        {t.abbr}
      </text>
    </svg>
  )
}
