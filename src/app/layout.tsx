import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import { ContactModalProvider } from '@/components/ContactModalProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const siteUrl = 'https://theotter.fr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'The Otter — Studio digital propulsé par l\'IA',
  description:
    "The Otter conçoit des sites et applications ultra premium (stratégie, design, contenu, UX, SEO) en quelques jours grâce à l'IA, pour 60 à 80 % moins cher qu'une agence classique. Tout vous appartient.",
  keywords: [
    'agence web IA',
    'création site internet IA',
    'développement application IA no-code',
    'studio digital',
    'site vitrine rapide',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'The Otter — Studio digital propulsé par l\'IA',
    description:
      "Sites et applications ultra premium, livrés en quelques jours, à prix cassés grâce à l'IA. Tout vous appartient.",
    url: siteUrl,
    siteName: 'The Otter',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Otter — Le studio qui casse les #codes.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Otter — Studio digital propulsé par l\'IA',
    description:
      "Sites et applications ultra premium, livrés en quelques jours, à prix cassés grâce à l'IA.",
    images: ['/og-image.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Otter',
  url: siteUrl,
  logo: `${siteUrl}/brand/theotter-logo.svg`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Studio digital propulsé par l'IA : sites et applications ultra premium conçus, designés et livrés en quelques jours, pour 60 à 80 % de moins qu'une agence classique.",
  founder: {
    '@type': 'Person',
    name: 'Simon Leloutre',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '145 rue Croix de Seguey',
    postalCode: '33000',
    addressLocality: 'Bordeaux',
    addressCountry: 'FR',
  },
  telephone: '+33660987394',
  email: 'contact@theotter.fr',
  areaServed: 'FR',
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable}`}
        style={{ fontFamily: 'var(--font-sans)', margin: 0, padding: 0 }}
      >
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
