import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import FixturesPage from './pages/FixturesPage'
import TablePage from './pages/TablePage'
import SquadPage from './pages/SquadPage'
import SponsorsPage from './pages/SponsorsPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

/** Reset scroll on navigation — the router does not do this for us. */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollReset />
      <Header overlay={isHome} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/squad" element={<SquadPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
