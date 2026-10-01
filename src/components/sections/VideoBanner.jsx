import { useEffect, useState } from 'react'
import { FiPlay, FiX } from 'react-icons/fi'

/**
 * Full-bleed still with a play control. Opening the modal only reveals a
 * placeholder panel — this build ships no third-party video embed.
 */
export default function VideoBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <section className="relative h-[420px] overflow-hidden lg:h-[540px]">
        <img
          src="/images/video-banner.jpg"
          alt="Fielders set for the next delivery at Ashfield Oval"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,.45) 0%, transparent 26%)' }}
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play season highlights"
          className="group absolute left-1/2 top-1/2 grid h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 text-white transition-colors duration-300 hover:border-accent hover:bg-accent"
        >
          <span className="absolute inset-0 animate-pulseRing rounded-full border border-white/50" />
          <span className="relative font-display text-[13px] font-semibold uppercase tracking-[1.6px]">Play</span>
        </button>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Season highlights"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-7 top-7 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:bg-accent"
          >
            <FiX className="text-2xl" />
          </button>
          <div
            className="grid aspect-video w-full max-w-[900px] place-items-center bg-night text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-8">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
                <FiPlay className="ml-1 text-2xl" />
              </span>
              <p className="mt-6 font-display text-[22px] font-semibold tracking-tightest text-white">
                Season highlights
              </p>
              <p className="mt-2 text-white/55">
                Front-end demo — drop your video embed or a &lt;video&gt; source in here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
