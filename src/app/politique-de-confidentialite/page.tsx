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
      <Navbar />
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
                Ce site ne dépose aucun cookie de mesure d&rsquo;audience ni
                de traceur publicitaire. Les seules données personnelles
                traitées sont celles que vous nous transmettez volontairement
                lorsque vous nous contactez (par email ou par téléphone)&nbsp;:
                nom, coordonnées, et contenu de votre message ou de votre
                brief.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Finalité et base légale</h2>
              <p>
                Ces données sont utilisées exclusivement pour répondre à
                votre demande, établir un devis et assurer le suivi de la
                relation commerciale, sur la base de l&rsquo;exécution de
                mesures précontractuelles prises à votre demande ou de notre
                intérêt légitime à vous répondre.
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
                Vos données ne sont ni vendues, ni cédées, ni transmises à
                des tiers. Elles ne sont accessibles qu&rsquo;à The Otter, et
                le cas échéant à ses prestataires techniques strictement
                nécessaires à l&rsquo;hébergement du site.
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
                assurer un niveau de protection adéquat de vos données.
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
                réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-[var(--color-ink)] mb-3">Évolution de cette politique</h2>
              <p>
                Si des outils de mesure d&rsquo;audience ou des cookies
                venaient à être ajoutés à ce site, cette politique serait mise
                à jour en conséquence et un bandeau de consentement adapté
                serait mis en place.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
