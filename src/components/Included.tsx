'use client'

import { useInView } from '@/lib/useInView'

const ITEMS = [
  {
    title: 'Réflexion stratégique',
    text: "Positionnement, cible, message clé, arborescence — la fondation qui évite de refaire le site dans six mois.",
    icon: '/pictos/strategie.svg',
  },
  {
    title: 'Design & direction artistique',
    text: 'Une identité visuelle cohérente, sur-mesure, pensée pour votre secteur — pas un template générique.',
    icon: '/pictos/design.svg',
  },
  {
    title: 'Contenu complet',
    text: 'Textes, articles, structure éditoriale, visuels et vidéos : le fond est écrit et produit, pas juste "à remplir".',
    icon: '/pictos/contenu.svg',
  },
  {
    title: 'UX au cordeau',
    text: 'Parcours pensés pour convertir, pas seulement pour plaire — navigation, vitesse, accessibilité.',
    icon: '/pictos/ux.svg',
  },
  {
    title: 'SEO technique & éditorial',
    text: 'Structure indexable, balises, performances, contenus pensés pour être trouvés — dès la mise en ligne.',
    icon: '/pictos/seo.svg',
  },
  {
    title: 'Analytics & tracking',
    text: 'Google Analytics et Meta Pixel intégrés et configurés : vous pilotez dès le premier jour.',
    icon: '/pictos/analytics.svg',
  },
]

export default function Included() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="inclus" ref={ref} className="bg-[var(--color-paper-dim)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl mb-16 reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Tout est inclus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
            Un projet complet. Aucune ligne cachée, aucun module en option.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`otter-card p-7 bg-[var(--color-paper)] rounded-2xl reveal ${isInView ? 'is-visible' : ''}`}
              style={{ border: '1px solid var(--color-line)', '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className="h-11 w-auto mb-5" />
              <h3 className="font-display text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-mist)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
