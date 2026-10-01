import { Link } from 'react-router-dom'
import { club } from '../../data/club'

/**
 * Original club wordmark: an angled badge holding a seamed ball, set beside the
 * club name. `variant="light"` flips the type for dark headers.
 */
export default function Logo({ variant = 'light', className = '' }) {
  const light = variant === 'light'

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${club.full} home`}>
      <span className="relative inline-block h-[46px] w-[46px] shrink-0">
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <path d="M32 2l26 9v25c0 14-10.5 24.5-26 30C16.5 60.5 6 50 6 36V11z" fill="#e03821" />
          <path
            d="M32 2l26 9v25c0 14-10.5 24.5-26 30C16.5 60.5 6 50 6 36V11z"
            fill="none"
            stroke="#fff"
            strokeOpacity=".4"
            strokeWidth="2"
          />
          <circle cx="32" cy="27" r="10.5" fill="#151a19" />
          <g stroke="#e8e8e8" strokeWidth="1.3" fill="none" strokeLinecap="round">
            <path d="M24.5 21.5c5 2.4 10 2.4 15 0" />
            <path d="M24.5 32.5c5-2.4 10-2.4 15 0" />
          </g>
          <g fill="#fff">
            <rect x="26" y="42" width="2.4" height="12" rx="1.2" />
            <rect x="30.8" y="42" width="2.4" height="12" rx="1.2" />
            <rect x="35.6" y="42" width="2.4" height="12" rx="1.2" />
          </g>
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[25px] font-bold tracking-tightest transition-colors duration-300 ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {club.name}
        </span>
        <span
          className={`mt-[3px] font-display text-[9px] font-semibold uppercase tracking-[3px] ${
            light ? 'text-white/55' : 'text-body'
          }`}
        >
          Cricket Club
        </span>
      </span>
    </Link>
  )
}
