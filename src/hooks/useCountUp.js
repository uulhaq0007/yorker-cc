import { useEffect, useState } from 'react'

const easeOut = (t) => 1 - Math.pow(1 - t, 3)

/** Animates 0 → target with requestAnimationFrame once `start` flips to true. */
export function useCountUp(target, start, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    let frame
    let startedAt

    const tick = (now) => {
      if (startedAt === undefined) startedAt = now
      const progress = Math.min((now - startedAt) / duration, 1)
      setValue(Math.round(easeOut(progress) * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return value
}
