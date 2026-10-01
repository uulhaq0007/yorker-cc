import { Link } from 'react-router-dom'
import Crest from '../ui/Crest'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { club, standings, teams } from '../../data/club'

const COLS = [
  { key: 'p', label: 'P', title: 'Played' },
  { key: 'w', label: 'W', title: 'Won' },
  { key: 'l', label: 'L', title: 'Lost' },
  { key: 'pts', label: 'Pts', title: 'Points' },
]

export default function LeagueTable({ showCta = true }) {
  return (
    <section className="section bg-paper">
      <div className="container">
        <SectionHeading align="center" eyebrow="Table" title={club.league} className="mb-12" />

        <Reveal>
          <div className="overflow-x-auto">
            <div className="min-w-[620px] bg-white shadow-[0_10px_40px_rgba(0,0,0,.05)]">
              <div className="h-1 w-full bg-accent" />
              <div className="bg-ink px-6 py-4">
                <h3 className="font-display text-[17px] font-semibold tracking-tightest text-white">Team standing</h3>
              </div>

              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{club.league} standings, matchday 5</caption>
                <thead>
                  <tr className="border-b border-line text-[14px] text-body">
                    <th scope="col" className="w-[70px] px-6 py-4 font-normal">Pos</th>
                    <th scope="col" className="px-2 py-4 font-normal">Team</th>
                    {COLS.map((c) => (
                      <th key={c.key} scope="col" className="w-[80px] px-2 py-4 text-center font-normal" title={c.title}>
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {standings.map((row) => {
                    const t = teams[row.team]
                    const isUs = row.team === 'yorker'
                    return (
                      <tr
                        key={row.team}
                        className={`border-b border-line transition-colors duration-200 last:border-0 hover:bg-paper ${
                          isUs ? 'bg-accent/[0.04]' : ''
                        }`}
                      >
                        <td className={`px-6 py-4 font-display font-semibold ${isUs ? 'text-accent' : 'text-ink'}`}>
                          {row.pos}
                        </td>
                        <td className="px-2 py-4">
                          <span className="flex items-center gap-3">
                            <Crest team={row.team} size={26} />
                            <span
                              className={`font-display text-[16px] font-semibold tracking-tightest ${
                                isUs ? 'text-accent' : 'text-ink'
                              }`}
                            >
                              {t.name}
                            </span>
                          </span>
                        </td>
                        {COLS.map((c) => (
                          <td
                            key={c.key}
                            className={`px-2 py-4 text-center ${
                              c.key === 'pts' ? 'font-display font-semibold text-ink' : 'text-body'
                            }`}
                          >
                            {row[c.key]}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {showCta && (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Link to="/table" className="btn-accent">
                View Full Table
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
