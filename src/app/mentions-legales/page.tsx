import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales — The Otter',
  description: "Mentions légales du site theotter.fr, édité par The Otter.",
  alternates: { canonical: 'https://theotter.fr/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Informations légales
          </span>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-12">
            Mentions légales
          </h1>

          <div className="flex flex-col gap-10 text-[var(--color-mist)] leading-relaxed">
            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Éditeur du site</h2>
              <p>
                Le site theotter.fr est édité par <strong className="text-[var(--color-ink)]">The Otter</strong>,
                entreprise individuelle de Simon Leloutre, dont le siège est
                situé 145, rue Croix de Seguey, 33000 Bordeaux, immatriculée
                sous le numéro SIREN 531 395 580.
              </p>
              <p className="mt-2">TVA non applicable — article 293 B du Code général des impôts.</p>
              <p className="mt-2">
                Directeur de la publication&nbsp;: Simon Leloutre.
              </p>
              <p className="mt-2">
                Contact&nbsp;: <a href="mailto:contact@theotter.fr" className="text-[var(--color-copper-dark)] hover:underline">contact@theotter.fr</a>
                {' '}— <a href="tel:+33660987394" className="text-[var(--color-copper-dark)] hover:underline">06 60 98 73 94</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Propriété intellectuelle</h2>
              <p>
                L&rsquo;ensemble des contenus présents sur ce site (textes,
                visuels, identité de marque, code source) est la propriété de
                The Otter, sauf mention contraire. Toute reproduction ou
                représentation, totale ou partielle, sans autorisation
                préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Crédits</h2>
              <p>Photographie de loutre&nbsp;: © photo Erwin Pieloor.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Droit applicable</h2>
              <p>
                Le présent site est soumis au droit français. En cas de
                litige, et à défaut de résolution amiable, les tribunaux
                français compétents seront seuls saisis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Données personnelles</h2>
              <p>
                Le traitement des données personnelles collectées via ce site
                est détaillé dans notre{' '}
                <a href="/politique-de-confidentialite" className="text-[var(--color-copper-dark)] hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
