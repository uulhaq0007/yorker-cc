import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { heroSlides, trending } from '../../data/club'

const AUTOPLAY = 8000
const socials = [FaFacebookF, FaTwitter, FaYoutube, FaInstagram]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => {
    setIndex((cur) => (next + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), AUTOPLAY)
    return () => clearTimeout(t)
  }, [index, paused, go])

  const slide = heroSlides[index]
  const feature = trending.side[0]

  return (
    <section
      className="relative isolate min-h-[760px] overflow-hidden bg-night lg:min-h-[880px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Club highlights"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt=""
            className={`h-full w-full object-cover ${i === index ? 'animate-slowZoom' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night/95 via-night/60 to-night/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-night/45" />
        </div>
      ))}

      {/* Oversized ghost word behind the copy */}
      <span
        key={`ghost-${index}`}
        className="ghost-word absolute bottom-[6%] left-0 right-0 text-center text-[22vw] text-white/[0.055]"
        aria-hidden="true"
      >
        {slide.ghost}
      </span>

      <div className="container relative flex min-h-[760px] flex-col justify-center py-32 lg:min-h-[880px]">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Headline */}
          <div className="lg:col-span-7">
            <div key={index}>
              <span className="eyebrow eyebrow-light">{slide.eyebrow}</span>
              <h1 className="display-1 max-w-[620px] text-white">{slide.title}</h1>
              <p className="mt-7 max-w-[470px] text-white/65">{slide.text}</p>
              <Link to={slide.cta.to} className="btn-accent mt-9">
                {slide.cta.label}
              </Link>
            </div>
          </div>

          {/* Floating recent-post card */}
          <div className="lg:col-span-5">
            <div className="ml-auto max-w-[400px]">
              <h2 className="mb-5 font-display text-[22px] font-semibold tracking-tightest text-white">Recent Post</h2>
              <Link to={`/news/${feature.slug}`} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/recent-post.jpg`}
                    alt={feature.title}
                    className="h-[230px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[1.2px] text-white">
                  Trending
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span className="font-normal normal-case tracking-normal text-white/50">{feature.date}</span>
                </div>
                <h3 className="mt-2 font-display text-[22px] font-semibold tracking-tightest text-white transition-colors duration-300 group-hover:text-accent">
                  {feature.title}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: scroll cue, slide dots, socials */}
      <div className="container absolute inset-x-0 bottom-8 z-10">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#matches"
            className="group flex items-center gap-3 font-display text-[12px] font-semibold uppercase tracking-[1.6px] text-white transition hover:text-accent"
          >
            <FiArrowDown className="animate-bounceDown text-lg" />
            Scroll Down
          </a>

          <div className="flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className={`h-[3px] transition-all duration-500 ${
                  i === index ? 'w-10 bg-accent' : 'w-5 bg-white/35 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="hidden items-center gap-5 text-white sm:flex">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Club social profile"
                className="text-[15px] transition hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
