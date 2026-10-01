import { useState } from 'react'
import PageBanner from '../components/layout/PageBanner'
import { NewsCard } from '../components/sections/LatestNews'
import Newsletter from '../components/sections/Newsletter'
import GalleryStrip from '../components/sections/GalleryStrip'
import { news } from '../data/club'

const categories = ['All', ...new Set(news.map((n) => n.category))]

export default function NewsPage() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? news : news.filter((n) => n.category === active)

  return (
    <>
      <PageBanner title="Club news" crumbs={[{ label: 'News' }]} ghost="News" />

      <section className="section bg-white">
        <div className="container">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-7 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[1.3px] transition-colors duration-300 ${
                  active === c ? 'bg-accent text-white' : 'bg-band text-ink hover:bg-ink hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <GalleryStrip />
    </>
  )
}
