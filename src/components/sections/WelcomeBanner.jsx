import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'

export default function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/welcome.jpg"
        alt=""
        aria-hidden="true"
        className="h-[460px] w-full object-cover lg:h-[540px]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      <div className="absolute inset-0">
        <div className="container flex h-full flex-col justify-center">
          <div className="max-w-[620px]">
            <Reveal>
              <span className="eyebrow eyebrow-light">Welcome</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-2 text-white">Experience the true joy of club cricket</h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-[460px] text-white/70">
                Four senior sides, a full junior academy and a square that plays true from April to September. New
                members are welcome at every level.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link to="/about" className="btn-accent mt-8">
                About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
