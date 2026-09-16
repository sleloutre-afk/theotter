'use client'

import { useEffect, useState } from 'react'
import { useContactModal } from './ContactModalProvider'
import { getConsent, CONSENT_UPDATED_EVENT } from '@/lib/cookieConsent'

export default function FloatingCTA() {
  const { openModal } = useContactModal()
  const [scrolledPast, setScrolledPast] = useState(false)
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Avoid stacking on top of the cookie banner on a first visit.
  useEffect(() => {
    setCookieBannerVisible(getConsent() === null)
    const onUpdate = () => setCookieBannerVisible(getConsent() === null)
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate)
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate)
  }, [])

  const visible = scrolledPast && !cookieBannerVisible

  return (
    <button
      onClick={openModal}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`md:hidden fixed z-40 bottom-5 left-1/2 -translate-x-1/2 btn-copper text-sm font-medium px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      Démarrer mon projet
    </button>
  )
}
