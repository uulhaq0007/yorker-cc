import PageBanner from '../components/layout/PageBanner'
import Stats from '../components/sections/Stats'
import VideoBanner from '../components/sections/VideoBanner'
import Newsletter from '../components/sections/Newsletter'
import GalleryStrip from '../components/sections/GalleryStrip'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { club } from '../data/club'

const timeline = [
  { year: '1978', title: 'Founded on a rented field', text: 'Eleven players, one roller and a pavilion built from a converted goods shed on Fenwick Road.' },
  { year: '1994', title: 'The Oval is bought outright', text: 'A members’ share issue funds the freehold. The square is relaid and has not moved since.' },
  { year: '2009', title: 'Academy opens', text: 'Junior sections from under-11 upward, with a girls pathway added four seasons later.' },
  { year: '2026', title: 'Top of the Premier League', text: 'Four wins from five, the best home record in the division and floodlights signed off for autumn.' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About the club" crumbs={[{ label: 'About' }]} ghost="Club" />

      <section className="section bg-white">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/feature.jpg`}
                  alt="Cricket kit laid out before a match at the Oval"
                  className="h-[460px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-4 bg-accent px-8 py-6 text-white lg:-right-8">
                  <span className="block font-display text-[40px] font-semibold leading-none tracking-tightest">
                    {new Date().getFullYear() - club.founded}
                  </span>
                  <span className="mt-1 block text-[13px] uppercase tracking-[1.4px] text-white/80">
                    Years of cricket
                  </span>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="A club built by the people who play for it"
                text="Yorker has never had a benefactor. Every net, every roller and every yard of the outfield was paid for by subs, raffles and the bar takings on a wet Saturday."
              />
              <Reveal delay={230}>
                <p className="mt-5">
                  Four senior sides play league cricket every weekend from April, backed by an academy that now supplies
                  more than half the first XI. Whether you last held a bat at school or you are chasing a county trial,
                  there is a side here for you.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <dl className="mt-9 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-display text-[13px] font-semibold uppercase tracking-[1.3px] text-body">Ground</dt>
                    <dd className="mt-1 font-display text-[17px] font-semibold text-ink">{club.ground}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[13px] font-semibold uppercase tracking-[1.3px] text-body">League</dt>
                    <dd className="mt-1 font-display text-[17px] font-semibold text-ink">{club.league}</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section bg-paper">
        <div className="container">
          <SectionHeading align="center" eyebrow="History" title="Four moments that made us" className="mb-14" />
          <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 110}>
                <div className="group h-full bg-white p-9 transition-colors duration-300 hover:bg-night">
                  <span className="font-display text-[15px] font-semibold uppercase tracking-[1.4px] text-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-4 font-display text-[21px] font-semibold tracking-tightest transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] transition-colors duration-300 group-hover:text-white/60">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoBanner />
      <Newsletter />
      <GalleryStrip />
    </>
  )
}
