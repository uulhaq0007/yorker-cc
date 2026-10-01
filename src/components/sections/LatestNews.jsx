import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { news } from '../../data/club'

export function NewsCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group h-full">
        <Link to={`/news/${post.slug}`} className="block overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-[260px] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <p className="mt-5 font-display text-[13px] font-semibold uppercase tracking-[1.3px] text-ink">
          {post.category}
        </p>
        <h3 className="mt-2 font-display text-[22px] font-semibold leading-snug tracking-tightest">
          <Link to={`/news/${post.slug}`} className="transition-colors duration-300 hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex items-center gap-3 text-[14px] text-body">
          {post.date}
          <span className="h-1 w-1 rounded-full bg-body/50" />
          {post.comments} Comments
        </p>
      </article>
    </Reveal>
  )
}

export default function LatestNews() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading align="center" eyebrow="Blog" title="Latest news" className="mb-12" />

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((post, i) => (
            <NewsCard key={post.slug} post={post} delay={i * 110} />
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <Link to="/news" className="btn-outline">
              All News
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
