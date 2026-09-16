'use client'

import { useInView } from '@/lib/useInView'
import LogoMark from './logo/LogoMark'
import { useContactModal } from './ContactModalProvider'

const BRIEF_POINTS = [
  'Le projet en une ou deux phrases',
  "Vos délais et contraintes éventuelles",
  "Des sites ou apps que vous aimez (ou pas)",
]

export default function Contact() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })
  const { openModal } = useContactModal()

  return (
    <section id="contact" ref={ref} className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-24 sm:py-32 overflow-hidden">
      <LogoMark className="absolute -left-24 -bottom-24 w-[360px] h-[360px] text-[var(--color-paper)] opacity-[0.05] pointer-events-none" />

      <div className="absolute right-[10%] bottom-[-10%] hidden md:block pointer-events-none" aria-hidden="true">
        <span className="ripple absolute inset-0 rounded-full border border-[var(--color-copper-light)]" style={{ width: 160, height: 160 }} />
        <span className="ripple absolute inset-0 rounded-full border border-[var(--color-copper-light)]" style={{ width: 160, height: 160, animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className={`reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-light)]">
            Prêt à plonger&nbsp;?
          </span>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight mt-4 mb-6 text-balance">
            Envoyez votre brief.<br />Recevez votre V0 sous 48h.
          </h2>
          <p className="text-[rgba(248,246,241,0.72)] leading-relaxed max-w-xl mx-auto mb-10">
            Un formulaire simple, pas de tunnel interminable&nbsp;: quelques
            lignes suffisent pour démarrer. Nous revenons vers vous avec les
            premières questions dans la journée.
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10 text-sm text-[rgba(248,246,241,0.6)]">
            {BRIEF_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--color-copper-light)]" />
                {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openModal}
              className="btn-copper inline-flex text-sm font-medium px-8 py-4 rounded-full w-full sm:w-auto justify-center"
            >
              Envoyer mon brief
            </button>
            <a
              href="tel:+33660987394"
              className="btn-outline inline-flex text-sm font-medium px-8 py-4 rounded-full w-full sm:w-auto justify-center"
            >
              06 60 98 73 94
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
