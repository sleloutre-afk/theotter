import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — The Otter',
  description: "Politique de confidentialité et protection des données personnelles du site theotter.fr.",
  alternates: { canonical: 'https://theotter.fr/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar solid />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)]">
            Vie privée
          </span>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-12">
            Politique de confidentialité
          </h1>

          <div className="flex flex-col gap-10 text-[var(--color-mist)] leading-relaxed">
            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Responsable du traitement</h2>
              <p>
                Simon Leloutre, exerçant sous le nom commercial{' '}
                <strong className="text-[var(--color-ink)]">The Otter</strong> (entreprise
                individuelle, SIREN 531 395 580, 145 rue Croix de Seguey,
                33000 Bordeaux), est responsable du traitement des données
                personnelles collectées via le site theotter.fr.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Données collectées</h2>
              <p>
                D&rsquo;une part, celles que vous nous transmettez volontairement
                lorsque vous nous contactez (par email ou par téléphone)&nbsp;:
                nom, coordonnées, et contenu de votre message ou de votre
                brief. D&rsquo;autre part, des données de navigation via des
                cookies de mesure d&rsquo;audience et de publicité, uniquement
                si vous les avez acceptés (voir ci-dessous).
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Cookies utilisés</h2>
              <p>
                Aucun de ces cookies n&rsquo;est déposé avant que vous ayez donné
                votre accord via le bandeau affiché à votre première visite.
                Vous pouvez changer d&rsquo;avis à tout moment depuis la page{' '}
                <a href="/gestion-cookies" className="text-[var(--color-copper-dark)] hover:underline">
                  gestion des cookies
                </a>.
              </p>
              <p className="mt-3">
                <strong className="text-[var(--color-ink)]">Google Analytics</strong> (mesure
                d&rsquo;audience)&nbsp;: nous aide à comprendre la fréquentation du
                site et les pages consultées, avec adresse IP anonymisée.
                Données conservées 13 mois maximum. Éditeur&nbsp;: Google Ireland
                Limited.
              </p>
              <p className="mt-3">
                <strong className="text-[var(--color-ink)]">Meta Pixel</strong> (publicité &amp;
                reciblage)&nbsp;: nous permet de mesurer l&rsquo;efficacité de nos
                campagnes publicitaires sur Facebook et Instagram. Éditeur&nbsp;:
                Meta Platforms Ireland Limited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Finalité et base légale</h2>
              <p>
                Vos données de contact sont utilisées exclusivement pour
                répondre à votre demande, établir un devis et assurer le suivi
                de la relation commerciale, sur la base de l&rsquo;exécution de
                mesures précontractuelles prises à votre demande ou de notre
                intérêt légitime à vous répondre. Les cookies de mesure
                d&rsquo;audience et de publicité reposent uniquement sur votre
                consentement, que vous pouvez retirer à tout moment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement
                de votre demande, puis jusqu&rsquo;à 3 ans à compter de notre
                dernier échange à des fins de suivi commercial, sauf demande
                de suppression de votre part.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Destinataires</h2>
              <p>
                Vos données ne sont ni vendues, ni cédées. Elles sont
                accessibles à The Otter, à son hébergeur (Vercel), et, si vous
                avez accepté les cookies correspondants, à Google et Meta dans
                le cadre strict de la mesure d&rsquo;audience et de la publicité
                décrites ci-dessus.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Hébergement et transfert de données</h2>
              <p>
                Ce site est hébergé par Vercel Inc., société américaine. Les
                données techniques de navigation sont donc susceptibles
                d&rsquo;être traitées aux États-Unis, dans le cadre des
                garanties contractuelles mises en place par Vercel (clauses
                contractuelles types de la Commission européenne) pour
                assurer un niveau de protection adéquat de vos données. Il en
                va de même pour Google et Meta si vous avez accepté leurs
                cookies respectifs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Vos droits</h2>
              <p>
                Conformément au Règlement général sur la protection des
                données (RGPD) et à la loi Informatique et Libertés, vous
                disposez d&rsquo;un droit d&rsquo;accès, de rectification,
                d&rsquo;effacement, de limitation et d&rsquo;opposition
                concernant vos données personnelles. Vous pouvez exercer ces
                droits à tout moment en écrivant à{' '}
                <a href="mailto:contact@theotter.fr" className="text-[var(--color-copper-dark)] hover:underline">
                  contact@theotter.fr
                </a>. Vous disposez également du droit d&rsquo;introduire une
                réclamation auprès de la CNIL (www.cnil.fr). Pour les cookies
                spécifiquement, vous pouvez retirer votre consentement à tout
                moment depuis la page{' '}
                <a href="/gestion-cookies" className="text-[var(--color-copper-dark)] hover:underline">
                  gestion des cookies
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Mise à jour de cette politique</h2>
              <p>
                Cette politique peut évoluer, notamment si de nouveaux outils
                étaient ajoutés au site. La version en ligne fait toujours foi.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
