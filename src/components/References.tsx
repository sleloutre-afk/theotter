'use client'

import { useRef } from 'react'
import { useInView } from '@/lib/useInView'

const CASES = [
  {
    name: 'Les Extensions Nouvelles',
    url: 'https://lesextensionsnouvelles.fr',
    sector: 'Extension & rénovation de maison',
    focus: 'Site vitrine + générateur d’images IA',
    scope: ['Site vitrine', 'Générateur d’images IA', 'Prise de contact'],
    image: '/photos/ref-extensions.jpg',
    delay: '8 jours',
  },
  {
    name: 'H&F Gonder — Avocats Associés',
    url: 'https://www.gonder-associes.fr',
    sector: 'Cabinet d’avocats',
    focus: 'Droit immobilier & recouvrement',
    scope: ['Site vitrine', 'Prise de contact', 'SEO local'],
    image: '/photos/ref-gonder.jpg',
    delay: '2 jours',
  },
  {
    name: 'Doxamed',
    url: 'https://doxamed.com',
    sector: 'Santé / prévention en entreprise',
    focus: 'Site vitrine & présentation des programmes',
    scope: ['Site vitrine', 'Back-office de gestion des contenus', 'Prise de contact'],
    image: '/photos/ref-doxamed.jpg',
    delay: '12 jours',
  },
  {
    name: 'Teledok',
    url: 'https://teledok.fr',
    sector: 'Téléconsultation médicale',
    focus: 'Site vitrine & parcours de soins',
    scope: ['Site vitrine', 'Back-office de gestion des contenus', 'Prise de contact'],
    image: '/photos/ref-teledok.jpg',
    delay: '8 jours',
  },
  {
    sector: 'Cabinet d’avocats',
    focus: 'Droit pénal',
    scope: ['Site vitrine', 'Prise de RDV', 'Contenus & mentions légales'],
    delay: '3 jours',
    image: '/photos/avocat-penal-web.jpg',
  },
]

export default function References() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = (card?.offsetWidth ?? track.clientWidth) + 24
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section id="references" ref={ref} className="bg-[var(--color-paper-dim)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-wrap items-end justify-between gap-6 mb-16 reveal ${isInView ? 'is-visible' : ''}`}>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
              Références
            </span>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
              Des projets réels, livrés en jours, pas en mois.
            </h2>
            <p className="text-[var(--color-mist)] leading-relaxed mt-5">
              Certains clients nous autorisent à partager leur nom, d&rsquo;autres
              préfèrent rester discrets. Dans ce cas, le projet est présenté
              sans identification&nbsp;; nous vous en montrons volontiers le
              détail sur demande.
            </p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Référence précédente"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-copper-dark)] hover:text-[var(--color-copper-dark)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Référence suivante"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-copper-dark)] hover:text-[var(--color-copper-dark)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 pt-2 pb-2"
        >
          {CASES.map((c, i) => {
            const isNamed = 'url' in c
            const Wrapper = isNamed ? 'a' : 'div'
            return (
              <Wrapper
                key={c.sector + c.focus}
                data-card
                {...(isNamed ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`ref-card snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)] rounded-2xl overflow-hidden bg-[var(--color-paper)] reveal ${isInView ? 'is-visible' : ''}`}
                style={{ border: '1px solid var(--color-line)', '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="h-40 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={isNamed ? `Aperçu du site ${c.name}` : 'Aperçu du projet (image floutée par confidentialité)'}
                    width={900}
                    height={562}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  {!isNamed && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/brand/theotter-confidentiel.png"
                      alt="Projet confidentiel"
                      width={1234}
                      height={479}
                      loading="lazy"
                      className="absolute inset-0 m-auto h-16 w-auto opacity-95 pointer-events-none"
                    />
                  )}
                  <span
                    className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full text-[var(--color-ink)]"
                    style={{ background: 'rgba(248,246,241,0.9)' }}
                  >
                    Livré en {c.delay}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-wide text-[var(--color-copper-dark)]">{c.sector}</span>
                    {isNamed && (
                      <span className="shrink-0 text-xs flex items-center gap-1 text-[var(--color-copper-dark)]">
                        Voir le site
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M8 7h9v9" />
                        </svg>
                      </span>
                    )}
                  </div>
                  {isNamed ? (
                    <>
                      <h3 className="font-display text-lg mt-1.5">{c.name}</h3>
                      <p className="text-sm text-[var(--color-mist)] mb-4">{c.focus}</p>
                    </>
                  ) : (
                    <h3 className="font-display text-lg mt-1.5 mb-4">{c.focus}</h3>
                  )}
                  <ul className="flex flex-wrap gap-2">
                    {c.scope.map((s) => (
                      <li key={s} className="text-xs px-3 py-1 rounded-full text-[var(--color-mist)]" style={{ border: '1px solid var(--color-line)' }}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
