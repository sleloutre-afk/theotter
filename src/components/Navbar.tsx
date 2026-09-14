'use client'

import { useEffect, useState } from 'react'
import LogoFull from './logo/LogoFull'

const LINKS = [
  { href: '/#approche', label: 'Notre approche' },
  { href: '/#inclus', label: 'Ce qui est inclus' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#references', label: 'Références' },
  { href: '/#manifeste', label: 'Manifeste' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,21,32,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(248,246,241,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18" style={{ height: '76px' }}>
        <a href="/#top" className="flex items-center shrink-0">
          <LogoFull className="h-12 w-auto text-[var(--color-paper)]" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[rgba(248,246,241,0.75)] hover:text-[var(--color-paper)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex btn-copper text-sm font-medium px-5 py-2.5 rounded-full"
        >
          Démarrer mon projet
        </a>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[var(--color-paper)] p-2 -mr-2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(10,21,32,0.97)' }}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[rgba(248,246,241,0.8)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-copper text-sm font-medium px-5 py-3 rounded-full text-center"
          >
            Démarrer mon projet
          </a>
        </div>
      )}
    </header>
  )
}
