import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { squad } from '../../data/club'

/**
 * Horizontal squad rail. Uses native scroll-snap so it stays usable with a
 * trackpad, touch or keyboard, with a progress bar mirroring scroll position.
 */
export default function Squad() {
  const railRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const update = useCallback(() => {
    const el = railRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 100)
  }, [])

  useEffect(() => {
    const el = railRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollBy = (dir) => {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-night py-[70px] lg:py-[110px]">
      <div className="container">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow eyebrow-light">Players</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-2 text-white">Our main squad</h2>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          tabIndex={0}
          aria-label="Squad members, scrollable"
        >
          {squad.map((p) => (
            <article
              key={p.name}
              className="group w-[230px] shrink-0 snap-start sm:w-[250px]"
            >
              <Link to="/squad" className="relative block overflow-hidden bg-coal">
                <img
                  src={p.image}
                  alt={p.name}
                  className="squad-photo h-[300px] w-full object-cover object-top group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-3 font-display text-[38px] font-semibold leading-none tracking-tightest text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]">
                  {p.no}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              </Link>

              <h3 className="mt-5 font-display text-[19px] font-semibold tracking-tightest text-white transition-colors duration-300 group-hover:text-accent">
                {p.name}
              </h3>
              <p className="mt-0.5 text-[15px] text-white/50">{p.role}</p>
            </article>
          ))}
        </div>

        {/* Progress bar + arrows */}
        <div className="mt-9 flex items-center gap-6">
          <div className="h-[3px] flex-1 bg-white/15">
            <div
              className="h-full bg-accent transition-[width] duration-200"
              style={{ width: `${Math.max(progress, 8)}%` }}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous players"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="More players"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:bg-accent"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
