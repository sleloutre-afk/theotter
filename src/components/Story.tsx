'use client'

import { useInView } from '@/lib/useInView'
import LogoMark from './logo/LogoMark'

const TRAITS = [
  {
    title: 'Agile',
    text: "Elle change de technique dès que le courant de la rivière change. Nous adaptons chaque projet à l'IA la plus pertinente, jamais l'inverse.",
  },
  {
    title: 'Outillée',
    text: "Un galet pour une coquille, l'IA pour un site premium : le bon outil, au bon endroit, avec précision.",
  },
  {
    title: 'Économe',
    text: "Elle ne dépense que l'énergie nécessaire. Nous facturons le travail réellement produit, rien de plus.",
  },
]

export default function Story() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section id="manifeste" ref={ref} className="relative bg-[var(--color-navy)] text-[var(--color-paper)] py-24 sm:py-32 overflow-hidden">
      <LogoMark className="absolute -right-24 -bottom-24 w-[380px] h-[380px] text-[rgba(248,246,241,0.04)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-start">
          <div className={`md:col-span-6 reveal ${isInView ? 'is-visible' : ''}`}>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-copper-light)]">
              Le manifeste The Otter
            </span>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mt-4 text-balance">
              La loutre est l&rsquo;un des rares mammifères à utiliser des outils.
            </h2>
            <p className="text-[rgba(248,246,241,0.72)] leading-relaxed mt-6">
              Elle sélectionne un galet, le garde parfois des années, et
              l&rsquo;utilise avec une précision redoutable pour ouvrir une
              coquille en un geste. Rien d&rsquo;héroïque là-dedans&nbsp;: juste le
              bon outil, utilisé intelligemment.
            </p>
            <p className="text-[rgba(248,246,241,0.72)] leading-relaxed mt-4">
              C&rsquo;est exactement notre manière de travailler. L&rsquo;IA n&rsquo;est
              pas notre argument marketing, c&rsquo;est notre galet&nbsp;: l&rsquo;outil qui
              nous permet d&rsquo;aller vite, sans jamais sacrifier la qualité du
              résultat.
            </p>
            <p className="text-[rgba(248,246,241,0.72)] leading-relaxed mt-4">
              Nous ne sommes pas une agence qui a ajouté l&rsquo;IA à son offre.
              Nous sommes un studio no-code où la vraie compétence, c&rsquo;est de
              savoir la manier avec discernement&nbsp;: l&rsquo;intelligence humaine,
              traduite par l&rsquo;intelligence artificielle. Nous cassons les{' '}
              <em className="italic text-[var(--color-copper-light)]">#codes</em>.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col">
            <div className={`relative reveal-scale ${isInView ? 'is-visible' : ''}`} style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/loutre2-web.jpg"
                alt="Une loutre de mer flotte sur le dos et utilise une pierre posée sur son ventre comme outil pour ouvrir un coquillage"
                width={1400}
                height={824}
                loading="lazy"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ border: '1px solid rgba(248,246,241,0.15)', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
              />
              <span
                className="absolute bottom-3 right-3 text-[10px] px-2 py-1 rounded-full text-[rgba(248,246,241,0.75)]"
                style={{ background: 'rgba(10,21,32,0.55)', backdropFilter: 'blur(4px)' }}
              >
                © photo Erwin Pieloor
              </span>
              <p className="text-xs text-[rgba(248,246,241,0.45)] mt-3 text-center italic">
                Une vraie loutre. Un vrai galet. Zéro filtre.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {TRAITS.map((t, i) => (
                <div
                  key={t.title}
                  className={`p-5 rounded-2xl reveal ${isInView ? 'is-visible' : ''}`}
                  style={{ background: 'rgba(248,246,241,0.05)', border: '1px solid rgba(248,246,241,0.1)', '--reveal-delay': `${250 + i * 120}ms` } as React.CSSProperties}
                >
                  <h3 className="font-display text-base mb-2 text-[var(--color-copper-light)]">{t.title}</h3>
                  <p className="text-sm text-[rgba(248,246,241,0.7)] leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
