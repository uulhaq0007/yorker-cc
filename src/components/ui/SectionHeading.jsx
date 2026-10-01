import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-[720px] text-center' : 'max-w-[640px]'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2 className={`display-2 ${light ? 'text-white' : ''}`}>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={170}>
          <p className={`mt-5 ${light ? 'text-white/65' : ''}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
