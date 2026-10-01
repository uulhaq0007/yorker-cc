import { Link } from 'react-router-dom'

export default function PageBanner({ title, crumbs = [], ghost }) {
  return (
    <section className="relative overflow-hidden bg-night py-24 lg:py-32">
      <img
        src="/images/page-banner.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/40" />

      {ghost && (
        <span
          className="ghost-word absolute inset-x-0 bottom-[-8%] text-center text-[18vw] text-white/[0.05]"
          aria-hidden="true"
        >
          {ghost}
        </span>
      )}

      <div className="container relative text-center">
        <h1 className="display-1 text-white">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-[15px] text-white/55">
            <li>
              <Link to="/" className="transition hover:text-accent">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                <span className="text-white/30">/</span>
                {i === crumbs.length - 1 || !c.to ? (
                  <span className="text-white">{c.label}</span>
                ) : (
                  <Link to={c.to} className="transition hover:text-accent">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
