'use client'

import { useInView } from '@/lib/useInView'
import { useContactModal } from './ContactModalProvider'

const PILLARS = [
  {
    title: '60 à 80 % moins cher',
    text: "Le même niveau d'exigence qu'une agence premium, mais sans les semaines de production manuelle qui gonflaient la facture. Nous répercutons ce gain directement sur votre devis.",
    icon: '/pictos/prix.svg',
    example: 'Ex. : un site vitrine avec contenu complet (textes, images, vidéo) et 4 à 6 articles de fond pour le SEO revient, dans la majorité des cas, à moins de 1 000 €.',
  },
  {
    title: 'Aucun frais récurrent imposé',
    text: "Pas d'abonnement mensuel déguisé, pas de maintenance forcée, pas de CMS propriétaire qui vous garde captif. Vous êtes libre dès le premier jour.",
    icon: '/pictos/recurrent.svg',
  },
  {
    title: 'Propriété totale, au terme du projet',
    text: 'Code source, contenus, textes, images, vidéos : tout vous appartient et vous est remis dès le projet finalisé. Vous restez maître de votre site, même si un jour vous choisissez de nous quitter.',
    icon: '/pictos/maitrise.svg',
  },
]

export default function Pricing() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 })
  const { openModal } = useContactModal()

  return (
    <section id="tarifs" ref={ref} className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl mb-16 reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Tarifs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
            Un prix juste, à la mesure du travail réellement produit.
          </h2>
          <p className="text-[var(--color-mist)] leading-relaxed mt-5">
            Les tarifs d&rsquo;agence datent d&rsquo;une époque où un site premium
            demandait deux mois de travail à cinq personnes. Ce temps est
            révolu. Nos prix le reflètent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`p-8 rounded-2xl bg-[var(--color-navy)] text-[var(--color-paper)] reveal ${isInView ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.icon} alt="" className="h-10 w-auto mb-5" />
              <h3 className="font-display text-lg mb-2 text-balance">{p.title}</h3>
              <p className="text-sm text-[rgba(248,246,241,0.72)] leading-relaxed">{p.text}</p>
              {p.example && (
                <p
                  className="text-sm text-[var(--color-copper-light)] leading-relaxed mt-4 pt-4"
                  style={{ borderTop: '1px solid rgba(248,246,241,0.12)' }}
                >
                  {p.example}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl reveal ${isInView ? 'is-visible' : ''}`} style={{ background: 'var(--color-paper-dim)' }}>
          <p className="font-display text-xl sm:text-2xl text-balance text-center sm:text-left">
            Chaque projet est chiffré sur devis, en fonction de son périmètre réel.
          </p>
          <button onClick={openModal} className="btn-copper text-sm font-medium px-7 py-3.5 rounded-full whitespace-nowrap">
            Recevoir une estimation
          </button>
        </div>
      </div>
    </section>
  )
}
