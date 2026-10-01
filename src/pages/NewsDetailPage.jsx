import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiMessageSquare, FiTag } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import Newsletter from '../components/sections/Newsletter'
import Reveal from '../components/ui/Reveal'
import { news, trending } from '../data/club'

/** Detail view resolves against both the news list and the trending side posts. */
function findPost(slug) {
  const fromNews = news.find((n) => n.slug === slug)
  if (fromNews) return fromNews
  if (trending.main.slug === slug) {
    return { ...trending.main, date: `${trending.main.month} ${trending.main.day}, 2026`, comments: trending.main.comments }
  }
  const side = trending.side.find((s) => s.slug === slug)
  return side ? { ...side, comments: 0, excerpt: '' } : null
}

export default function NewsDetailPage() {
  const { slug } = useParams()
  const post = findPost(slug)
  const related = news.filter((n) => n.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <>
        <PageBanner title="Article not found" crumbs={[{ label: 'News', to: '/news' }, { label: 'Not found' }]} />
        <section className="section text-center">
          <div className="container">
            <p className="mb-8">That report has been moved or taken down.</p>
            <Link to="/news" className="btn-accent">
              Back To News
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title={post.title} crumbs={[{ label: 'News', to: '/news' }, { label: post.category }]} />

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12">
            <article className="lg:col-span-8">
              <Reveal>
                <img src={post.image} alt={post.title} className="h-[400px] w-full object-cover" />
              </Reveal>

              <Reveal delay={90}>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-[14px] text-body">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-accent" /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiTag className="text-accent" /> {post.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMessageSquare className="text-accent" /> {post.comments} Comments
                  </span>
                </div>


                <div className="mt-6 space-y-5 leading-[1.85]">
                  {post.excerpt && <p className="text-[19px] text-ink">{post.excerpt}</p>}
                  <p>
                    The light had gone flat and the ball was twenty overs old when the equation finally came within
                    reach. Nobody in the pavilion said the number out loud, which is the surest sign a club knows it is
                    close.
                  </p>
                  <blockquote className="border-l-2 border-accent bg-paper px-8 py-7 font-display text-[21px] font-medium leading-relaxed tracking-tightest text-ink">
                    You do not win a chase like that with shots. You win it by refusing to give the bowler a single thing
                    to aim at.
                  </blockquote>
                  <p>
                    Two overs of hard running turned a defendable score into a nervous one. The partnership never once
                    tried to clear the rope — it simply took everything on offer square of the wicket and made the field
                    move.
                  </p>
                  <h3 className="pt-2 font-display text-[24px] font-semibold tracking-tightest">What it means</h3>
                  <p>
                    Four wins from five leaves us clear at the top with the return fixtures still to come. The bowlers
                    have taken twenty wickets in three of those games, which is the number that actually decides
                    seasons.
                  </p>
                </div>
              </Reveal>
            </article>

            <aside className="lg:col-span-4">
              <Reveal delay={140}>
                <div className="bg-paper p-8">
                  <h3 className="mb-6 font-display text-[20px] font-semibold tracking-tightest">Recent posts</h3>
                  <ul className="space-y-6">
                    {related.map((item) => (
                      <li key={item.slug} className="flex gap-4">
                        <Link to={`/news/${item.slug}`} className="shrink-0 overflow-hidden">
                          <img src={item.image} alt="" className="h-[76px] w-[88px] object-cover" loading="lazy" />
                        </Link>
                        <div>
                          <span className="text-[13px] text-body">{item.date}</span>
                          <h4 className="font-display text-[15px] font-semibold leading-snug tracking-tightest">
                            <Link to={`/news/${item.slug}`} className="transition hover:text-accent">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-8 bg-night p-8">
                  <h3 className="font-display text-[21px] font-semibold tracking-tightest text-white">
                    Play for Yorker
                  </h3>
                  <p className="mt-3 text-white/60">
                    Winter nets open in January. All standards, all ages, no trial required.
                  </p>
                  <Link to="/contact" className="btn-accent mt-6 w-full">
                    Get In Touch
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
