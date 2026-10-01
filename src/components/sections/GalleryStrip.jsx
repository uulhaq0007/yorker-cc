import { FiInstagram } from 'react-icons/fi'
import { gallery } from '../../data/club'

/** Six-up photo strip with a floating follow pill, as on the reference footer. */
export default function GalleryStrip() {
  return (
    <section className="relative" aria-label="Club photo feed">
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {gallery.map((item, i) => (
          <a
            key={item.image}
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label={`Club photo ${i + 1}, ${item.count} likes`}
            className="group relative block overflow-hidden"
          >
            <img
              src={item.image}
              alt=""
              className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              loading="lazy"
            />
            <span className="absolute inset-0 grid place-items-center bg-night/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
                <FiInstagram /> {item.count}
              </span>
            </span>
          </a>
        ))}
      </div>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full bg-white px-7 py-4 font-display text-[13px] font-semibold uppercase tracking-[1.3px] text-ink shadow-[0_10px_30px_rgba(0,0,0,.18)] transition-colors duration-300 hover:bg-accent hover:text-white"
      >
        <FiInstagram className="text-base" /> Follow Us
      </a>
    </section>
  )
}
