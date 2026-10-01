import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { club } from '../../data/club'

const quick = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Squad', to: '/squad' },
  { label: 'Fixtures', to: '/fixtures' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'Contact', to: '/contact' },
]

const socials = [FaFacebookF, FaTwitter, FaYoutube, FaInstagram]

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="container">
        <div className="flex flex-col items-center gap-7 border-t border-line py-10 lg:flex-row lg:justify-between">
          <p className="order-3 text-[15px] text-body lg:order-1">
            © {new Date().getFullYear()} {club.full}. All rights reserved.
          </p>

          <nav className="order-1 lg:order-2" aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {quick.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="link-line font-display text-[14px] font-semibold uppercase tracking-[1.2px] text-ink transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-3 lg:order-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Club social profile"
                className="grid h-10 w-10 place-items-center rounded-full bg-night text-white transition-colors duration-300 hover:bg-accent"
              >
                <Icon className="text-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
