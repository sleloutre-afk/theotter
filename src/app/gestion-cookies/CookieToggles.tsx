'use client'

import { useEffect, useState } from 'react'
import { getConsent, setConsent, type CookieConsent } from '@/lib/cookieConsent'

const CATEGORIES: { key: keyof CookieConsent; title: string; text: string }[] = [
  {
    key: 'analytics',
    title: 'Mesure d’audience — Google Analytics',
    text: "Nous aide à comprendre quelles pages sont utiles et où le site peut être amélioré (nombre de visites, pages consultées, provenance). Aucune donnée n'est vendue.",
  },
  {
    key: 'marketing',
    title: 'Publicité & reciblage — Meta Pixel',
    text: 'Permet de mesurer l’efficacité de nos publicités et de vous proposer des contenus pertinents sur Facebook/Instagram. Désactivable à tout moment, sans impact sur votre navigation.',
  },
]

export default function CookieToggles() {
  const [consent, setLocalConsent] = useState<CookieConsent>({ analytics: false, marketing: false })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const existing = getConsent()
    if (existing) setLocalConsent(existing)
  }, [])

  const toggle = (key: keyof CookieConsent) => {
    setSaved(false)
    setLocalConsent((c) => ({ ...c, [key]: !c[key] }))
  }

  const save = (next?: CookieConsent) => {
    const toSave = next ?? consent
    setConsent(toSave)
    setLocalConsent(toSave)
    setSaved(true)
  }

  return (
    <div className="flex flex-col gap-6">
      {CATEGORIES.map((cat) => (
        <div
          key={cat.key}
          className="flex items-start justify-between gap-6 p-6 rounded-2xl"
          style={{ border: '1px solid var(--color-line)', background: 'var(--color-paper)' }}
        >
          <div>
            <p className="font-display text-base text-[var(--color-ink)] mb-1.5">{cat.title}</p>
            <p className="text-sm text-[var(--color-mist)] leading-relaxed max-w-xl">{cat.text}</p>
          </div>
          <button
            role="switch"
            aria-checked={consent[cat.key]}
            aria-label={cat.title}
            onClick={() => toggle(cat.key)}
            className="shrink-0 w-14 h-8 rounded-full relative transition-colors duration-300"
            style={{ background: consent[cat.key] ? 'var(--color-copper)' : 'var(--color-line)' }}
          >
            <span
              className="absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300"
              style={{ left: consent[cat.key] ? '28px' : '4px' }}
            />
          </button>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
        <button
          onClick={() => save()}
          className="btn-copper text-sm font-medium px-7 py-3 rounded-full w-full sm:w-auto"
        >
          Enregistrer mes préférences
        </button>
        <button
          onClick={() => save({ analytics: true, marketing: true })}
          className="btn-outline-dark text-sm px-7 py-3 rounded-full w-full sm:w-auto"
        >
          Tout accepter
        </button>
        <button
          onClick={() => save({ analytics: false, marketing: false })}
          className="text-sm text-[var(--color-mist)] hover:text-[var(--color-ink)] transition-colors px-2 py-3"
        >
          Tout refuser
        </button>
      </div>

      {saved && (
        <p className="text-sm text-[var(--color-copper-dark)]">
          Vos préférences ont été enregistrées.
        </p>
      )}
    </div>
  )
}
