import { Link } from 'react-router-dom'
import { FiHeart, FiMessageSquare } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { trending } from '../../data/club'

/** Editorial block: one large feature beside a stack of three secondary posts. */
export default function Trending() {
  const { main, side } = trending

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-12">
          <Reveal>
            <span className="eyebrow">Our Articles</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-2">Trending now</h2>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Featured */}
          <Reveal>
            <article className="group">
              <Link to={`/news/${main.slug}`} className="block overflow-hidden">
                <img
                  src={main.image}
                  alt={main.title}
                  className="h-[380px] w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              <div className="mt-7 flex gap-6">
                <div className="shrink-0 text-center">
                  <span className="block font-display text-[38px] font-semibold leading-none tracking-tightest text-ink">
                    {main.day}
                  </span>
                  <span className="mt-1 block text-[13px] uppercase tracking-[1.4px] text-body">{main.month}</span>
                </div>

                <div>
                  <h3 className="display-3">
                    <Link to={`/news/${main.slug}`} className="transition-colors duration-300 hover:text-accent">
                      {main.title}
                    </Link>
                  </h3>
                  <p className="mt-3">{main.excerpt}</p>
                  <div className="mt-4 flex items-center gap-5 text-[14px] text-body">
                    <span className="flex items-center gap-2">
                      <FiHeart className="text-accent" /> {main.likes} Likes
                    </span>
                    <span className="flex items-center gap-2">
                      <FiMessageSquare className="text-accent" /> {main.comments} Comments
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Secondary stack */}
          <div className="flex flex-col gap-8">
            {side.map((post, i) => (
              <Reveal key={post.slug} delay={i * 110}>
                <article className="group flex gap-6">
                  <Link to={`/news/${post.slug}`} className="shrink-0 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[130px] w-[180px] object-cover transition-transform duration-[900ms] group-hover:scale-110 sm:w-[210px]"
                      loading="lazy"
                    />
                  </Link>
                  <div className="self-center">
                    <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold uppercase tracking-[1.2px] text-ink">
                      {post.category}
                      <span className="h-1 w-1 rounded-full bg-body/50" />
                      <span className="font-normal normal-case tracking-normal text-body">{post.date}</span>
                    </div>
                    <h3 className="mt-2 font-display text-[21px] font-semibold leading-snug tracking-tightest">
                      <Link to={`/news/${post.slug}`} className="transition-colors duration-300 hover:text-accent">
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
