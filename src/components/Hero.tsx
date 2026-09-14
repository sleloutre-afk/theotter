'use client'

import LogoMark from './logo/LogoMark'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col text-[var(--color-paper)] overflow-hidden">
      {/* Background: drop your showreel at /public/videos/hero.mp4 — this element
          degrades gracefully to the gradient below if the file isn't present yet. */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 120% at 15% 10%, #1f4468 0%, #0f2136 45%, #0a1520 100%)' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Kept deliberately light — the source footage (dark water at night) is
            already dark on its own. This just lifts text contrast, it shouldn't
            crush the shot to black. Nudge these numbers up only if a future,
            brighter video needs more taming. */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,21,32,0.25) 0%, rgba(10,21,32,0.4) 55%, rgba(10,21,32,0.75) 100%)' }}
        />
      </div>

      {/* decorative ripples — a nod to the otter's habitat */}
      <div className="absolute right-[8%] top-[26%] hidden md:block pointer-events-none" aria-hidden="true">
        <span className="ripple absolute inset-0 rounded-full border border-[var(--color-copper-light)]" style={{ width: 120, height: 120 }} />
        <span className="ripple absolute inset-0 rounded-full border border-[var(--color-copper-light)]" style={{ width: 120, height: 120, animationDelay: '1.2s' }} />
        <span className="ripple absolute inset-0 rounded-full border border-[var(--color-copper-light)]" style={{ width: 120, height: 120, animationDelay: '2.4s' }} />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center" style={{ paddingTop: '110px' }}>
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full" style={{ border: '1px solid rgba(248,246,241,0.18)', background: 'rgba(248,246,241,0.05)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper-light)]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[rgba(248,246,241,0.75)]">
            Studio digital propulsé par l&rsquo;IA
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-7">
          <LogoMark
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 text-[var(--color-paper)]"
            style={{ filter: 'drop-shadow(0 2px 18px rgba(10,21,32,0.45))' }}
          />
          <h1 className="font-display w-fit text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-center">
            Le studio qui<br className="hidden sm:block" /> casse les <span className="italic text-[var(--color-copper-light)]">#codes</span>.
          </h1>
        </div>

        <p className="text-balance max-w-2xl text-base sm:text-lg text-[rgba(248,246,241,0.78)] mb-11 leading-relaxed">
          The Otter conçoit vos sites et applications ultra premium — stratégie, design,
          contenu, UX, SEO — en quelques jours, voire quelques heures, pour
          60 à 80&nbsp;% de moins qu&rsquo;une agence classique.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#contact" className="btn-copper text-sm font-medium px-7 py-3.5 rounded-full w-full sm:w-auto">
            Démarrer mon projet
          </a>
          <a href="#approche" className="btn-outline text-sm px-7 py-3.5 rounded-full w-full sm:w-auto">
            Voir notre approche
          </a>
        </div>
      </div>

      <div className="relative flex justify-center pb-8">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(227,160,102,0.6))' }} />
      </div>
    </section>
  )
}
