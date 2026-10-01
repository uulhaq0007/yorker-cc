import { useState } from 'react'
import PageBanner from '../components/layout/PageBanner'
import Newsletter from '../components/sections/Newsletter'
import Crest from '../components/ui/Crest'
import Reveal from '../components/ui/Reveal'
import { recentMatches, teams, upcoming } from '../data/club'

const TABS = ['Upcoming', 'Results']

export default function FixturesPage() {
  const [tab, setTab] = useState('Upcoming')

  return (
    <>
      <PageBanner title="Fixtures & results" crumbs={[{ label: 'Fixtures' }]} ghost="Season" />

      <section className="section bg-white">
        <div className="container">
          <div className="mb-10 flex justify-center gap-3">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className={`rounded-full px-8 py-3 font-display text-[13px] font-semibold uppercase tracking-[1.3px] transition-colors duration-300 ${
                  tab === t ? 'bg-accent text-white' : 'bg-band text-ink hover:bg-ink hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-[900px] divide-y divide-line border-y border-line">
            {tab === 'Upcoming'
              ? upcoming.map((m, i) => (
                  <Reveal key={`${m.date}-${m.home}`} delay={i * 90}>
                    <div className="grid items-center gap-4 py-7 sm:grid-cols-[1fr_auto_1fr]">
                      <div className="flex items-center justify-end gap-4">
                        <span className="font-display text-[19px] font-semibold tracking-tightest text-ink">
                          {teams[m.home].name}
                        </span>
                        <Crest team={m.home} size={40} />
                      </div>

                      <div className="text-center">
                        <p className="font-display text-[15px] font-semibold uppercase tracking-[1.3px] text-accent">
                          {m.time}
                        </p>
                        <p className="mt-1 text-[14px] text-body">{m.date}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Crest team={m.away} size={40} />
                        <span className="font-display text-[19px] font-semibold tracking-tightest text-ink">
                          {teams[m.away].name}
                        </span>
                      </div>

                      <p className="col-span-full text-center text-[14px] text-body">
                        {m.comp} · {m.venue}
                      </p>
                    </div>
                  </Reveal>
                ))
              : recentMatches.map((m, i) => (
                  <Reveal key={`${m.date}-${m.home}-r`} delay={i * 90}>
                    <div className="grid items-center gap-4 py-7 sm:grid-cols-[1fr_auto_1fr]">
                      <div className="flex items-center justify-end gap-4">
                        <span className="font-display text-[19px] font-semibold tracking-tightest text-ink">
                          {teams[m.home].name}
                        </span>
                        <Crest team={m.home} size={40} />
                      </div>

                      <div className="text-center">
                        <p className="font-display text-[24px] font-semibold tracking-tightest text-ink">
                          {m.hs} – {m.as}
                        </p>
                        <p className="mt-1 text-[14px] text-body">{m.date}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Crest team={m.away} size={40} />
                        <span className="font-display text-[19px] font-semibold tracking-tightest text-ink">
                          {teams[m.away].name}
                        </span>
                      </div>

                      <p className="col-span-full text-center text-[14px] text-body">
                        {m.comp} · {m.venue}
                      </p>
                    </div>
                  </Reveal>
                ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
