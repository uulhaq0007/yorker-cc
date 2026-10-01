import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { stats } from '../../data/club'

function Stat({ label, value, suffix, started, delay }) {
  const current = useCountUp(value, started, 2200)

  return (
    <div
      className="text-center transition-all duration-700"
      style={{ transitionDelay: `${delay}ms`, opacity: started ? 1 : 0, transform: started ? 'none' : 'translateY(24px)' }}
    >
      <p className="font-display text-[17px] font-medium text-ink">{label}</p>
      <p className="mt-2 font-display text-[46px] font-semibold leading-none tracking-tightest text-ink sm:text-[58px]">
        {current.toLocaleString()}
        {suffix}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} started={inView} delay={i * 130} />
          ))}
        </div>
      </div>
    </section>
  )
}
