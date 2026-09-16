'use client'

import { useEffect, useState } from 'react'
import LogoMark from './logo/LogoMark'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const PHONE_HINT = 'Format attendu : 06 12 34 56 78 ou +33 6 12 34 56 78'

function isValidPhone(value: string) {
  const v = value.trim().replace(/\s+/g, '')
  return /^0\d{9}$/.test(v) || /^\+\d{7,15}$/.test(v)
}

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>('idle')
  const [phoneError, setPhoneError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStatus('idle')
        setPhoneError(null)
      }, 300)
      return () => clearTimeout(t)
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (!isValidPhone(String(data.phone || ''))) {
      setPhoneError(PHONE_HINT)
      return
    }
    setPhoneError(null)
    setStatus('sending')

    // Honeypot: real visitors never fill this hidden field.
    if (data.website) {
      setStatus('sent')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6">
      <button
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0"
        style={{ background: 'rgba(10,21,32,0.72)', backdropFilter: 'blur(4px)' }}
      />
      <div
        className="modal-pop relative w-full sm:max-w-lg sm:rounded-2xl h-full sm:h-auto sm:max-h-[92vh] overflow-y-auto"
        style={{ background: 'var(--color-paper)', boxShadow: '0 30px 80px rgba(10,21,32,0.35)' }}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 pt-6 pb-4"
          style={{ background: 'var(--color-paper)', borderBottom: '1px solid var(--color-line)' }}
        >
          <div className="flex items-center gap-2">
            <LogoMark className="w-6 h-6 text-[var(--color-ink)]" />
            <span className="text-sm font-semibold tracking-tight text-[var(--color-ink)]">Envoyez votre brief</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre de contact"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-mist)] hover:text-[var(--color-ink)] transition-colors"
            style={{ background: 'transparent' }}
          >
            ✕
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {status === 'sent' ? (
            <div className="py-10 text-center">
              <div
                className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(193,122,63,0.14)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12.5L9.5 18L20 6" stroke="var(--color-copper)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-[var(--color-ink)] mb-2">Merci, votre brief est bien reçu</h3>
              <p className="text-sm text-[var(--color-mist)] max-w-sm mx-auto">
                Nous revenons vers vous avec les premières questions dans la journée.
              </p>
              <button onClick={onClose} className="mt-6 text-sm font-medium text-[var(--color-copper)] hover:text-[var(--color-copper-dark)] transition-colors">
                Fermer
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-xl text-[var(--color-ink)] mb-1 text-balance">
                Parlez-nous de votre projet
              </h3>
              <p className="text-sm text-[var(--color-mist)] mb-6">
                Le projet, vos délais, des sites que vous aimez : quelques lignes suffisent pour démarrer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom" name="firstName" required />
                  <Field label="Nom" name="name" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Email" name="email" type="email" required />
                  <Field
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    required
                    error={phoneError}
                    onBlur={(e) => setPhoneError(e.target.value && !isValidPhone(e.target.value) ? PHONE_HINT : null)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Entreprise" name="company" />
                  <Field label="Fonction" name="jobTitle" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-mist)] mb-1.5" htmlFor="message">
                    Votre brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Le projet en quelques phrases, vos délais, des sites ou apps que vous aimez…"
                    className="input-field resize-none"
                  />
                </div>

                {/* Honeypot — hidden from real visitors via CSS, invisible to
                    screen readers, but bots that fill every field trip it. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Site web</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-copper w-full text-sm font-medium py-3.5 rounded-full disabled:opacity-60">
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon brief'}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-center" style={{ color: '#b3462c' }}>
                    Une erreur est survenue. Réessayez, ou écrivez-nous directement à{' '}
                    <a href="mailto:contact@theotter.fr" className="underline">contact@theotter.fr</a>.
                  </p>
                )}
                <p className="text-[11px] text-[var(--color-mist)] text-center leading-relaxed">
                  Vos informations ne servent qu&rsquo;à répondre à votre demande. Voir notre{' '}
                  <a href="/politique-de-confidentialite" className="underline">politique de confidentialité</a>.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  error,
  onBlur,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string | null
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-[var(--color-mist)] mb-1.5" htmlFor={name}>
        {label}
        {required && <span className="text-[var(--color-copper)]"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} onBlur={onBlur} className="input-field" />
      {error && <p className="text-[11px] mt-1" style={{ color: '#b3462c' }}>{error}</p>}
    </div>
  )
}
