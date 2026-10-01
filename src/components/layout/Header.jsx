import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiChevronDown, FiGrid, FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'
import { navigation } from '../../data/club'

/**
 * Overlays the hero transparently on the home page, then turns into a solid
 * sticky bar once the user scrolls past it. Inner pages start solid.
 */
export default function Header({ overlay = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [search, setSearch] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawer(false)
    setSearch(false)
    setOpenSub(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawer || search ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer, search])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDrawer(false)
        setSearch(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Home overlays the hero and flips to a fixed bar on scroll; inner pages just stick.
  const position = overlay
    ? scrolled
      ? 'fixed inset-x-0 top-0 bg-night shadow-[0_6px_30px_rgba(0,0,0,.25)]'
      : 'absolute inset-x-0 top-0'
    : `sticky top-0 bg-night ${scrolled ? 'shadow-[0_6px_30px_rgba(0,0,0,.25)]' : ''}`

  return (
    <header className={`z-50 w-full transition-all duration-300 ${position}`}>
      <div className="container flex h-[92px] items-center justify-between gap-6">
        <Logo variant="light" />

        <nav className="hidden items-center xl:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-8 font-display text-[14px] font-semibold uppercase tracking-[1.1px] transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-white hover:text-accent'
                  }`
                }
              >
                {item.label}
                {item.children && (
                  <FiChevronDown className="text-[12px] transition-transform duration-300 group-hover:rotate-180" />
                )}
              </NavLink>

              {item.children && (
                <ul className="invisible absolute left-0 top-full z-20 w-[220px] translate-y-3 bg-night py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        className="block px-6 py-2 text-[15px] text-white/70 transition-all duration-200 hover:translate-x-1.5 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-white">
          <button
            type="button"
            aria-label="Shop basket (0 items)"
            onClick={(e) => e.preventDefault()}
            className="relative hidden transition hover:text-accent sm:block"
          >
            <FiShoppingBag className="text-[19px]" />
            <span className="absolute -bottom-1.5 -right-2 grid h-[17px] w-[17px] place-items-center rounded-full bg-accent text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Open search"
            className="transition hover:text-accent"
          >
            <FiSearch className="text-[19px]" />
          </button>
          <button
            type="button"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
            className="transition hover:text-accent"
          >
            <span className="hidden xl:block">
              <FiGrid className="text-[19px]" />
            </span>
            <span className="xl:hidden">
              <FiMenu className="text-[23px]" />
            </span>
          </button>
        </div>
      </div>

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-night/95 px-6 transition-opacity duration-300 ${
          search ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setSearch(false)}
          aria-label="Close search"
          className="absolute right-7 top-7 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:bg-accent"
        >
          <FiX className="text-2xl" />
        </button>
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-[640px] border-b border-white/25 pb-4">
          <label htmlFor="site-search" className="sr-only">
            Search the club site
          </label>
          <div className="flex items-center gap-4">
            <input
              id="site-search"
              type="search"
              placeholder="Search players, fixtures, reports…"
              className="w-full bg-transparent font-display text-[22px] tracking-tightest text-white placeholder-white/35 outline-none sm:text-[32px]"
            />
            <button type="submit" aria-label="Search" className="text-white transition hover:text-accent">
              <FiSearch className="text-3xl" />
            </button>
          </div>
        </form>
      </div>

      {/* Slide-in menu — also the mobile navigation */}
      <div className={`fixed inset-0 z-[60] ${drawer ? 'visible' : 'invisible'}`} aria-hidden={!drawer}>
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            drawer ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[340px] max-w-[88vw] flex-col bg-night transition-transform duration-500 ${
            drawer ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-white/10">
              {navigation.map((item) => {
                const expanded = openSub === item.label
                return (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          `block py-4 font-display text-[16px] font-semibold uppercase tracking-[1.1px] ${
                            isActive ? 'text-accent' : 'text-white'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => setOpenSub(expanded ? null : item.label)}
                          aria-expanded={expanded}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white"
                        >
                          <FiChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <ul className="grid transition-all duration-300" style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}>
                        <li className="overflow-hidden">
                          <ul className="pb-3 pl-3">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link to={child.to} className="block py-2 text-[15px] text-white/60 transition hover:text-accent">
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>

            <Link to="/contact" className="btn-accent mt-8 w-full">
              Join The Club
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  )
}
