import LogoFull from './logo/LogoFull'

const NAV_STUDIO = [
  { href: '#approche', label: 'Notre approche' },
  { href: '#inclus', label: 'Ce qui est inclus' },
  { href: '#tarifs', label: 'Tarifs' },
]

const NAV_MORE = [
  { href: '#references', label: 'Références' },
  { href: '#manifeste', label: 'Manifeste' },
  { href: '#contact', label: 'Nous contacter' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[rgba(248,246,241,0.65)]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top">
              <LogoFull className="h-7 w-auto text-[var(--color-paper)]" />
            </a>
            <p className="text-sm leading-relaxed mt-5 max-w-xs">
              Le studio digital qui réinvente le métier d&rsquo;agence grâce à
              l&rsquo;IA&nbsp;: sites et applications ultra premium, livrés en
              jours plutôt qu&rsquo;en mois.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(248,246,241,0.4)] mb-4">
              Le studio
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_STUDIO.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[var(--color-paper)] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(248,246,241,0.4)] mb-4">
              En savoir plus
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_MORE.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[var(--color-paper)] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(248,246,241,0.4)] mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="mailto:contact@theotter.fr" className="hover:text-[var(--color-paper)] transition-colors">contact@theotter.fr</a>
              </li>
              <li>
                <a href="tel:+33660987394" className="hover:text-[var(--color-paper)] transition-colors">06 60 98 73 94</a>
              </li>
              <li className="leading-relaxed">
                145, rue Croix de Seguey<br />33000 Bordeaux
              </li>
              <li>
                <a href="#contact" className="text-[var(--color-copper-light)] hover:text-[var(--color-copper)] transition-colors">
                  Envoyer votre brief &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(248,246,241,0.08)' }}
        >
          <p>© {new Date().getFullYear()} The Otter. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/mentions-legales" className="hover:text-[var(--color-paper)] transition-colors">Mentions légales</a>
            <a href="/politique-de-confidentialite" className="hover:text-[var(--color-paper)] transition-colors">Politique de confidentialité</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
