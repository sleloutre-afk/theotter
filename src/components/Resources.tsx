'use client'

import { useInView } from '@/lib/useInView'
import type { Article } from '@/lib/articles'

export default function Resources({ articles }: { articles: Article[] }) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="ressources" ref={ref} className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl mb-16 reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">Ressources</span>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
            Comprendre avant de construire.
          </h2>
          <p className="text-[var(--color-mist)] leading-relaxed mt-5">
            Coûts réels, propriété de votre site, règles par secteur : nos guides pour décider en connaissance de cause.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <a
              key={a.slug}
              href={`/ressources/${a.slug}`}
              className={`otter-card flex flex-col rounded-2xl overflow-hidden bg-[var(--color-paper-dim)] reveal ${isInView ? 'is-visible' : ''}`}
              style={{ border: '1px solid var(--color-line)', '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col flex-1 p-7">
                <p className="text-xs text-[var(--color-mist)] mb-2">{new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="font-display text-lg mb-3 text-balance">{a.title}</h3>
                <p className="text-sm text-[var(--color-mist)] leading-relaxed flex-1">{a.description}</p>
                <span className="mt-6 flex items-center gap-1 text-xs text-[var(--color-copper-dark)]">
                  Lire le guide
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/ressources" className="text-sm font-medium text-[var(--color-copper-dark)] hover:underline">
            Voir tous les articles →
          </a>
        </div>
      </div>
    </section>
  )
}
