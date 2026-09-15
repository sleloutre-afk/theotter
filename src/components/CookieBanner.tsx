'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getConsent, setConsent, CONSENT_UPDATED_EVENT } from '@/lib/cookieConsent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setVisible(getConsent() === null)
    // If consent gets set elsewhere (e.g. the visitor opens the
    // preferences page in another tab), hide the banner here too.
    const onUpdate = () => setVisible(getConsent() === null)
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate)
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate)
  }, [])

  // The preferences page already offers the same choice front and center —
  // showing the banner on top of it would just be a redundant second UI.
  if (!visible || pathname === '/gestion-cookies') return null

  const acceptAll = () => {
    setConsent({ analytics: true, marketing: true })
    setVisible(false)
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5"
        style={{
          background: 'rgba(10,21,32,0.97)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(248,246,241,0.1)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        }}
      >
        <div className="hidden sm:flex shrink-0 items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictos/cookie.svg" alt="" className="w-14 h-14 -rotate-12 -translate-y-2" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictos/cookie.svg" alt="" className="w-9 h-9 rotate-12 opacity-70 translate-y-2" />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <p className="font-display text-base text-[var(--color-paper)] mb-1">
            Nous utilisons des cookies
          </p>
          <p className="text-sm text-[rgba(248,246,241,0.65)] leading-relaxed">
            Pour mieux comprendre vos besoins et vous proposer des contenus pertinents.
            Vous gardez la main sur vos préférences, à tout moment.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="/gestion-cookies"
            className="btn-outline text-sm px-5 py-2.5 rounded-full flex-1 sm:flex-none text-center whitespace-nowrap"
          >
            Gérer les cookies
          </a>
          <button
            onClick={acceptAll}
            className="btn-copper text-sm font-medium px-6 py-2.5 rounded-full flex-1 sm:flex-none whitespace-nowrap"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
