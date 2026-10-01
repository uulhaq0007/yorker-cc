import Hero from '../components/sections/Hero'
import MatchStrip from '../components/sections/MatchStrip'
import Trending from '../components/sections/Trending'
import LeagueTable from '../components/sections/LeagueTable'
import Stats from '../components/sections/Stats'
import VideoBanner from '../components/sections/VideoBanner'
import Squad from '../components/sections/Squad'
import LatestNews from '../components/sections/LatestNews'
import Partners from '../components/sections/Partners'
import WelcomeBanner from '../components/sections/WelcomeBanner'
import Newsletter from '../components/sections/Newsletter'
import GalleryStrip from '../components/sections/GalleryStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <MatchStrip />
      <Trending />
      <LeagueTable />
      <Stats />
      <VideoBanner />
      <Squad />
      <LatestNews />
      <Partners />
      <WelcomeBanner />
      <Newsletter />
      <GalleryStrip />
    </>
  )
}
