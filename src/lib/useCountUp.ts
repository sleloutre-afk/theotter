'use client'

import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `end` once `start` is true. Used for the
 * headline stats (48h, 7 jours, -70%…) so they count up as they enter view.
 */
export function useCountUp(end: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, duration])

  return value
}
