'use client'

import { useContactModal } from './ContactModalProvider'

export default function ArticleCTA() {
  const { openModal } = useContactModal()

  return (
    <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[var(--color-navy)] text-[var(--color-paper)]">
      <p className="font-display text-xl sm:text-2xl mb-3 text-balance">Un projet en tête ?</p>
      <p className="text-sm text-[rgba(248,246,241,0.72)] leading-relaxed mb-6">
        Décrivez-nous votre besoin en quelques lignes. Nous revenons vers vous sous 24h avec les premières questions.
      </p>
      <button onClick={openModal} className="btn-copper text-sm font-medium px-7 py-3.5 rounded-full">
        Envoyer mon brief
      </button>
    </div>
  )
}
