'use client'

import { useInView } from '@/lib/useInView'
import LogoMark from './logo/LogoMark'

const STEPS = [
  {
    n: '01',
    title: 'Votre brief',
    text: "Un échange, un document, quelques exemples — vous nous confiez votre projet tel qu'il est aujourd'hui, sans mise en forme préalable à préparer.",
  },
  {
    n: '02',
    title: 'V0 fonctionnelle sous 48h',
    text: "Stratégie, architecture, design, premiers contenus : vous naviguez sur une vraie version de votre site, pas une maquette figée.",
  },
  {
    n: '03',
    title: 'Itérations ciblées',
    text: "Vous nous renvoyez vos retours, nous ajustons — avec un seul interlocuteur du premier jour au dernier, aucune couche intermédiaire.",
  },
  {
    n: '04',
    title: 'Mise en ligne',
    text: 'En moins de 7 jours, votre site est en ligne : optimisé, indexé, tracké — prêt à travailler pour vous.',
  },
]

export default function Approach() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 })

  return (
    <section id="approche" ref={ref} className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl mb-16 sm:mb-20 reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Notre approche
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
            Quatre étapes. Zéro détour, du brief à la mise en ligne.
          </h2>
        </div>

        <div className="timeline-track grid md:grid-cols-[auto_1fr] gap-x-10">
          <div className="hidden md:block relative w-px mx-auto">
            <div className="timeline-line absolute inset-0 w-px" />
            <div
              className="timeline-line-fill absolute top-0 left-0 w-px"
              style={{ height: isInView ? '100%' : '0%' }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`relative grid md:grid-cols-[2.5rem_1fr] gap-x-6 reveal ${isInView ? 'is-visible' : ''}`}
                style={{ '--reveal-delay': `${i * 150}ms` } as React.CSSProperties}
              >
                <div className="hidden md:flex justify-center">
                  <LogoMark
                    className={`timeline-dot w-7 h-7 -mt-1 ${isInView ? 'is-active' : ''}`}
                    style={{
                      color: isInView ? 'var(--color-copper)' : 'var(--color-line)',
                      transitionDelay: `${i * 150 + 200}ms`,
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-sm text-[var(--color-copper)]">{step.n}</span>
                    <h3 className="font-display text-xl sm:text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-[var(--color-mist)] leading-relaxed max-w-xl">{step.text}</p>
                  {i === 2 && (
                    <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs" style={{ border: '1px solid var(--color-line)', color: 'var(--color-copper-dark)' }}>
                      Un interlocuteur unique, tout le long du projet
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
