import PageBanner from '../components/layout/PageBanner'
import Partners from '../components/sections/Partners'
import WelcomeBanner from '../components/sections/WelcomeBanner'
import Newsletter from '../components/sections/Newsletter'
import SectionHeading from '../components/ui/SectionHeading'

export default function SponsorsPage() {
  return (
    <>
      <PageBanner title="Our sponsors" crumbs={[{ label: 'Sponsors' }]} ghost="Support" />
      <section className="pt-[70px] lg:pt-[110px]">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Partners"
            title="The businesses behind the club"
            text="Sponsorship keeps subs affordable and the academy free at the point of entry. Packages run from boundary boards to full shirt partnership."
          />
        </div>
      </section>
      <Partners />
      <WelcomeBanner />
      <Newsletter />
    </>
  )
}
