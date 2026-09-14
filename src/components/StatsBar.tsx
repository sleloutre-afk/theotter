'use client'

import { useInView } from '@/lib/useInView'
import { useCountUp } from '@/lib/useCountUp'

const STATS = [
  { value: 48, suffix: 'h', label: 'pour une V0 fonctionnelle' },
  { value: 7, prefix: '<', suffix: ' j', label: 'pour un site en ligne' },
  { value: 70, prefix: '-', suffix: '%', label: 'moins cher vs. une agence classique', range: '60–80 %' },
]

export default function StatsBar() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.4 })

  return (
    <section ref={ref} className="bg-[var(--color-navy)] py-10 sm:py-12">
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-3 divide-x divide-[rgba(248,246,241,0.12)]">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center px-2 sm:px-8">
            <Stat isInView={isInView} {...s} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Stat({
  isInView,
  value,
  prefix = '',
  suffix = '',
  label,
  range,
}: {
  isInView: boolean
  value: number
  prefix?: string
  suffix?: string
  label: string
  range?: string
}) {
  const count = useCountUp(value, isInView)
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl sm:text-4xl text-[var(--color-copper-light)] tabular-nums">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-[11px] sm:text-xs uppercase tracking-wide text-[rgba(248,246,241,0.6)] text-center leading-snug">
        {range ? `${range} ` : ''}
        {label}
      </span>
    </div>
  )
}
