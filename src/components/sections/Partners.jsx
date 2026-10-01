import Reveal from '../ui/Reveal'
import { partners } from '../../data/club'

/**
 * Sponsor board. Names are set as type rather than bitmap logos, so nothing
 * here reproduces a real company's mark.
 */
export default function Partners() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {partners.map((name, i) => (
            <Reveal key={name} delay={i * 60}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-[120px] items-center justify-center bg-white px-4 transition-colors duration-300 hover:bg-band"
              >
                <span className="select-none text-center font-display text-[19px] font-semibold uppercase tracking-[1.5px] text-ink/25 transition-colors duration-300 hover:text-accent">
                  {name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
