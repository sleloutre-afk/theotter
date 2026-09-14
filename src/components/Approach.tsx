'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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

// A gentle river bend visiting one point per step, alternating right/left.
// Drawn in a 400×800 box and stretched to fill the track (preserveAspectRatio="none"),
// so it always spans exactly 4 rows regardless of real text height.
const RIVER_PATH = 'M300 100 C300 180 100 220 100 300 C100 380 300 420 300 500 C300 580 100 620 100 700'

export default function Approach() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, rootMargin: '0px 0px -40% 0px' })
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [transitionReady, setTransitionReady] = useState(false)

  // Measure the path's real length before the browser paints, so it can be
  // marked "hidden" from the very first frame — with no transition applied
  // yet, so this initial jump to hidden is instant, never animated.
  useLayoutEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  // Only enable the transition on the next tick, once the hidden state has
  // actually been painted. Without this, the very first style change (going
  // from "not yet measured" to "hidden") gets caught by the transition too,
  // and the reveal quietly plays itself out before anyone scrolls near it.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setTransitionReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

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

        <div className="relative">
          <svg
            className="hidden md:block absolute inset-0 w-full h-full"
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={RIVER_PATH} fill="none" stroke="var(--color-line)" strokeWidth="2" />
            <path
              ref={pathRef}
              d={RIVER_PATH}
              fill="none"
              stroke="var(--color-copper)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: isInView ? 0 : pathLength,
                transition: transitionReady ? 'stroke-dashoffset 7000ms linear' : 'none',
              }}
            />
          </svg>

          <div className="flex flex-col md:gap-0 gap-12">
            {STEPS.map((step, i) => {
              const nodeOnRight = i % 2 === 0
              return (
                <div key={step.n} className="relative md:min-h-[210px] md:grid md:grid-cols-2 md:items-center">
                  <div
                    className="hidden md:flex absolute z-10 items-center justify-center w-14 h-14 rounded-full bg-[var(--color-paper)] border-2 transition-colors duration-700"
                    style={{
                      left: nodeOnRight ? '75%' : '25%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderColor: isInView ? 'var(--color-copper)' : 'var(--color-line)',
                      transitionDelay: `${i * 250 + 300}ms`,
                    }}
                  >
                    <LogoMark
                      className="w-8 h-8"
                      style={{ color: isInView ? 'var(--color-copper)' : 'var(--color-line)', transition: 'color 0.7s ease', transitionDelay: `${i * 250 + 300}ms` }}
                    />
                  </div>

                  <div
                    className={`reveal ${isInView ? 'is-visible' : ''} ${nodeOnRight ? 'md:col-start-1 md:pr-28 md:text-right' : 'md:col-start-2 md:pl-28'}`}
                    style={{ '--reveal-delay': `${i * 200}ms` } as React.CSSProperties}
                  >
                    <div className={`flex items-baseline gap-3 mb-2 ${nodeOnRight ? 'md:justify-end' : ''}`}>
                      <span className="font-display text-sm text-[var(--color-copper)]">{step.n}</span>
                      <h3 className="font-display text-xl sm:text-2xl">{step.title}</h3>
                    </div>
                    <p className={`text-[var(--color-mist)] leading-relaxed max-w-xl ${nodeOnRight ? 'md:ml-auto' : ''}`}>{step.text}</p>
                    {i === 2 && (
                      <span
                        className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs ${nodeOnRight ? 'md:ml-auto' : ''}`}
                        style={{ border: '1px solid var(--color-line)', color: 'var(--color-copper-dark)' }}
                      >
                        Un interlocuteur unique, tout le long du projet
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
