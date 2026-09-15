'use client'

export type CookieConsent = {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'theotter_cookie_consent'
export const CONSENT_UPDATED_EVENT = 'theotter-cookie-consent-updated'

/**
 * Reads the visitor's saved consent choice. Returns `null` if no decision
 * has been made yet (first visit, or storage unavailable) — that's the
 * signal the banner uses to decide whether to show itself.
 */
export function getConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed?.analytics === 'boolean' && typeof parsed?.marketing === 'boolean') {
      return parsed
    }
    return null
  } catch {
    return null
  }
}

/**
 * Saves the visitor's choice and notifies the rest of the app (the
 * analytics script loader in particular) so scripts can load — or stop
 * being requested — without a page reload.
 */
export function setConsent(consent: CookieConsent) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // localStorage unavailable (private browsing, blocked storage…) — the
    // banner will just reappear next visit, which is an acceptable fallback.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: consent }))
}
