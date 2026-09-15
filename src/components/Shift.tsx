'use client'

import { useInView } from '@/lib/useInView'
import LogoMark from './logo/LogoMark'

const ROWS = [
  {
    label: 'Délai de livraison',
    before: { text: '8 à 12 semaines', width: 92 },
    after: { text: '2 à 7 jours', width: 14 },
  },
  {
    label: 'Budget investi',
    before: { text: '100 % du tarif agence', width: 100 },
    after: { text: '20 à 40 % du tarif agence', width: 32 },
  },
  {
    label: 'Interlocuteurs',
    before: { text: 'Chef de projet, DA, dev, stagiaire…', width: 78 },
    after: {
      text: (
        <>
          Un <em className="italic">product builder</em>, unique interlocuteur, du brief à la mise en ligne
        </>
      ),
      width: 20,
    },
  },
]

export default function Shift() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-24 sm:py-32 overflow-hidden">
      <LogoMark className="absolute -right-24 -top-24 w-[360px] h-[360px] text-[var(--color-paper)] opacity-[0.05] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className={`md:col-span-5 reveal ${isInView ? 'is-visible' : ''}`}>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-light)]">
              Le constat
            </span>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-6 text-balance">
              Les prix d&rsquo;il y a un an ne sont plus justifiables.
            </h2>
            <p className="text-[rgba(248,246,241,0.72)] leading-relaxed mb-4">
              Une loutre ouvre une coquille avec un simple galet&nbsp;: pas besoin d&rsquo;un
              atelier entier. L&rsquo;IA fait la même chose au métier d&rsquo;agence&nbsp;:
              elle réduit à quelques heures ce qui prenait des semaines de
              réflexion stratégique, de maquettage, de rédaction et d&rsquo;allers-retours.
            </p>
            <p className="text-[rgba(248,246,241,0.72)] leading-relaxed">
              Les délais et les coûts de gestion de projet se sont effondrés.
              Continuer à facturer comme avant ne reflète plus la réalité du travail.
              Nous avons choisi de construire nos prix sur cette nouvelle réalité,
              pas sur l&rsquo;ancienne.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col gap-10">
            {ROWS.map((row, i) => (
              <div key={row.label} className={`reveal ${isInView ? 'is-visible' : ''}`} style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}>
                <p className="text-sm text-[rgba(248,246,241,0.55)] mb-3">{row.label}</p>
                <BarRow label="Agence classique" text={row.before.text} width={row.before.width} isInView={isInView} tone="muted" />
                <BarRow label="The Otter" text={row.after.text} width={row.after.width} isInView={isInView} tone="copper" delay={200} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BarRow({
  label,
  text,
  width,
  isInView,
  tone,
  delay = 0,
}: {
  label: string
  text: React.ReactNode
  width: number
  isInView: boolean
  tone: 'muted' | 'copper'
  delay?: number
}) {
  return (
    <div className="mb-4 sm:mb-3 last:mb-0">
      {/* Mobile: label + value sit above a full-width bar, so the bar has
          room to actually show the size difference. Desktop keeps the
          compact single-row layout. */}
      <div className="flex sm:hidden items-baseline justify-between gap-3 mb-1.5">
        <span className="text-xs text-[rgba(248,246,241,0.55)]">{label}</span>
        <span className="text-xs text-[rgba(248,246,241,0.8)] text-right">{text}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:block w-28 shrink-0 text-xs text-[rgba(248,246,241,0.55)]">{label}</span>
        <div className="flex-1 h-6 sm:h-8 rounded-full overflow-hidden" style={{ background: 'rgba(248,246,241,0.08)' }}>
          <div
            className="bar-fill h-full rounded-full flex items-center px-4"
            style={{
              width: isInView ? `${width}%` : '0%',
              transitionDelay: `${delay}ms`,
              background: tone === 'copper' ? 'linear-gradient(90deg, var(--color-copper), var(--color-copper-light))' : 'rgba(248,246,241,0.18)',
            }}
          />
        </div>
        <span className="hidden sm:block w-40 shrink-0 text-xs text-[rgba(248,246,241,0.8)]">{text}</span>
      </div>
    </div>
  )
}
