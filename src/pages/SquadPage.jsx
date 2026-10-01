import PageBanner from '../components/layout/PageBanner'
import Stats from '../components/sections/Stats'
import Newsletter from '../components/sections/Newsletter'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { squad } from '../data/club'

export default function SquadPage() {
  return (
    <>
      <PageBanner title="First XI squad" crumbs={[{ label: 'Squad' }]} ghost="Players" />

      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Players"
            title="The 2026 senior squad"
            text="Career figures cover all senior club cricket, league and cup combined."
            className="mb-14"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {squad.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <article className="group">
                  <div className="relative overflow-hidden bg-band">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="squad-photo h-[330px] w-full object-cover object-top group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-3 font-display text-[38px] font-semibold leading-none tracking-tightest text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]">
                      {p.no}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  <h3 className="mt-5 font-display text-[20px] font-semibold tracking-tightest transition-colors duration-300 group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-[15px] text-accent">{p.role}</p>

                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4 text-[14px]">
                    <dt className="text-body">Bats</dt>
                    <dd className="text-right text-ink">{p.bats}</dd>
                    <dt className="text-body">Bowls</dt>
                    <dd className="text-right text-ink">{p.bowls}</dd>
                    <dt className="text-body">Matches</dt>
                    <dd className="text-right text-ink">{p.matches}</dd>
                    <dt className="text-body">Runs</dt>
                    <dd className="text-right font-semibold text-ink">{p.runs.toLocaleString()}</dd>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Newsletter />
    </>
  )
}
