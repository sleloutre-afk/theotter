import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnuaireBarreaux from '@/components/AnnuaireBarreaux'
import barreaux from '@/lib/barreaux-data.json'

export const metadata: Metadata = {
  title: 'Annuaire des contacts déontologie des barreaux de France — TheOtter',
  description:
    "L'adresse à contacter dans chaque barreau de France pour informer l'Ordre avant la mise en ligne d'un site d'avocat, comme l'exige l'article 10 du RIN.",
  alternates: { canonical: 'https://theotter.fr/ressources/annuaire-barreaux' },
}

export default function AnnuaireBarreauxPage() {
  return (
    <>
      <Navbar solid />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <a href="/ressources/site-avocat-information-ordre" className="text-sm text-[var(--color-ink)] hover:underline">
            ← Site internet d&rsquo;avocat : l&rsquo;information préalable à l&rsquo;Ordre
          </a>

          <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-copper-dark)] mt-10">
            Annuaire
          </span>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-4 mb-6">
            Les contacts déontologie des barreaux de France
          </h1>
          <p className="text-[var(--color-mist)] leading-relaxed max-w-3xl mb-4">
            Avant d&rsquo;ouvrir ou de modifier substantiellement un site de cabinet d&rsquo;avocat, l&rsquo;article 10 du RIN
            impose d&rsquo;en informer le conseil de l&rsquo;Ordre. Voici, pour chacun des barreaux de France, l&rsquo;adresse
            email à contacter&nbsp;: en priorité celle d&rsquo;un service déontologie ou communication quand il existe,
            sinon celle du secrétariat général de l&rsquo;Ordre.
          </p>
          <p className="text-sm text-[var(--color-mist)] leading-relaxed max-w-3xl mb-10">
            Cette liste a été compilée en octobre 2026 à partir des sites officiels des barreaux et, quand ceux-ci ne
            publiaient aucune adresse, de sources tierces fiables (Conférence des bâtonniers, Annuaire de
            l&rsquo;administration, cours d&rsquo;appel&nbsp;: voir la colonne Fiabilité et le détail en colonne Source).
            Aucune adresse n&rsquo;a été inventée. Les adresses non confirmées sur le site officiel du barreau
            lui-même n&rsquo;ont pas pu être reconfirmées de première main&nbsp;: vérifiez-les par téléphone avant un
            envoi important. Un barreau peut aussi avoir changé d&rsquo;adresse depuis la compilation&nbsp;: en cas de
            doute, contactez directement votre Ordre. Pour certains barreaux, la communication préalable passe par
            une rubrique dédiée de l&rsquo;extranet réservé aux avocats plutôt que par email&nbsp;: c&rsquo;est à
            l&rsquo;avocat de vérifier auprès de son Ordre la marche à suivre exacte.
          </p>

          <a
            href="/downloads/annuaire-barreaux-deontologie.csv"
            download
            className="btn-download inline-flex mb-10"
          >
            Télécharger la liste complète (.csv)
          </a>

          <AnnuaireBarreaux rows={barreaux} />
        </div>
      </main>
      <Footer />
    </>
  )
}
