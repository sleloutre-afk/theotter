import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Ressources — TheOtter',
  description: 'Guides pratiques sur la création de site internet : coûts, propriété, référencement et règles par secteur.',
  alternates: { canonical: 'https://theotter.fr/ressources' },
}

export default function Ressources() {
  const articles = getArticles()

  return (
    <>
      <Navbar solid />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">Ressources</span>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-4">
            Comprendre avant de construire
          </h1>
          <p className="text-[var(--color-mist)] leading-relaxed max-w-2xl mb-14">
            Des analyses concrètes, sourcées, sans jargon : coûts réels, propriété de votre site, règles par secteur.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/ressources/${a.slug}`}
                className="otter-card flex flex-col rounded-2xl overflow-hidden bg-[var(--color-paper-dim)]"
                style={{ border: '1px solid var(--color-line)' }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <p className="text-xs text-[var(--color-mist)] mb-2">{new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <h2 className="font-display text-lg mb-3 text-balance">{a.title}</h2>
                  <p className="text-sm text-[var(--color-mist)] leading-relaxed flex-1">{a.description}</p>
                  <span className="mt-6 text-xs text-[var(--color-copper-dark)]">Lire le guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
