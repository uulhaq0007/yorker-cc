import { Link } from 'react-router-dom'
import Crest from '../ui/Crest'
import Reveal from '../ui/Reveal'
import { recentMatches, teams } from '../../data/club'

/** The four most recent results, as score cards on a light band. */
export default function MatchStrip() {
  return (
    <section id="matches" className="bg-band py-14 lg:py-16">
      <div className="container">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {recentMatches.map((m, i) => {
            const home = teams[m.home]
            const away = teams[m.away]
            const homeWon = m.hs > m.as

            return (
              <Reveal key={`${m.date}-${m.home}`} delay={i * 90}>
                <Link
                  to="/fixtures"
                  className="group block bg-white px-6 py-7 text-center transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,.09)]"
                >
                  <p className="text-[14px] text-body">{m.date}</p>

                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Crest team={m.home} size={38} />
                    <span className="font-display text-[27px] font-semibold tracking-tightest text-ink">
                      <span className={homeWon ? '' : 'text-body'}>{m.hs}</span>
                      <span className="mx-1.5 text-body">–</span>
                      <span className={homeWon ? 'text-body' : ''}>{m.as}</span>
                    </span>
                    <Crest team={m.away} size={38} />
                  </div>

                  <p className="mt-3 font-display text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                    {home.name} v {away.name}
                  </p>
                  <p className="mt-0.5 text-[14px] text-body">{m.comp}</p>
                  <p className="mt-2 text-[13px] uppercase tracking-[1.1px] text-body/70">{m.venue}</p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
