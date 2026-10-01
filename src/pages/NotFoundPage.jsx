import { Link } from 'react-router-dom'
import PageBanner from '../components/layout/PageBanner'

export default function NotFoundPage() {
  return (
    <>
      <PageBanner title="404" crumbs={[{ label: 'Page not found' }]} ghost="Lost" />
      <section className="section bg-white text-center">
        <div className="container">
          <p className="font-display text-[110px] font-semibold leading-none tracking-tightest text-accent/15 sm:text-[160px]">
            404
          </p>
          <h2 className="-mt-4 display-2">Played on to your own stumps</h2>
          <p className="mx-auto mt-4 max-w-[520px]">
            That page is not in the scorebook. It may have been moved when the site was rebuilt.
          </p>
          <Link to="/" className="btn-accent mt-9">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  )
}
