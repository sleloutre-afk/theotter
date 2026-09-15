import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieToggles from './CookieToggles'

export const metadata: Metadata = {
  title: 'Gestion des cookies — The Otter',
  description: "Gérez vos préférences de cookies (Google Analytics, Meta Pixel) sur theotter.fr.",
  alternates: { canonical: 'https://theotter.fr/gestion-cookies' },
}

export default function GestionCookies() {
  return (
    <>
      <Navbar solid />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Vos préférences
          </span>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-6">
            Gestion des cookies
          </h1>
          <p className="text-[var(--color-mist)] leading-relaxed mb-10 max-w-xl">
            Rien d&rsquo;intrusif ici&nbsp;: ce site n&rsquo;utilise que deux outils, tous deux
            optionnels et désactivables à tout moment, sans que cela change quoi que ce
            soit à votre navigation. Aucune donnée n&rsquo;est revendue à qui que ce soit.
          </p>

          <CookieToggles />

          <p className="text-xs text-[var(--color-mist)] mt-10">
            Pour en savoir plus sur les données collectées et vos droits, consultez notre{' '}
            <a href="/politique-de-confidentialite" className="text-[var(--color-copper-dark)] hover:underline">
              politique de confidentialité
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
