import PageBanner from '../components/layout/PageBanner'
import LeagueTable from '../components/sections/LeagueTable'
import Newsletter from '../components/sections/Newsletter'

export default function TablePage() {
  return (
    <>
      <PageBanner title="League table" crumbs={[{ label: 'Table' }]} ghost="Table" />
      <LeagueTable showCta={false} />
      <Newsletter />
    </>
  )
}
