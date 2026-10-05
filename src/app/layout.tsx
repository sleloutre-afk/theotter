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
  title: 'TheOtter — Studio digital propulsé par l\'IA',
  description:
    "TheOtter conçoit des sites et applications ultra premium (stratégie, design, contenu, UX, SEO) en quelques jours grâce à l'IA, pour 60 à 80 % moins cher qu'une agence classique. Tout vous appartient.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: 'TheOtter — Studio digital propulsé par l\'IA',
    description:
      "Sites et applications ultra premium, livrés en quelques jours, à prix cassés grâce à l'IA. Tout vous appartient.",
    url: siteUrl,
    siteName: 'TheOtter',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TheOtter — Le studio qui casse les #codes.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheOtter — Studio digital propulsé par l\'IA',
    description:
      "Sites et applications ultra premium, livrés en quelques jours, à prix cassés grâce à l'IA.",
    images: ['/og-image.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TheOtter',
  url: siteUrl,
  logo: `${siteUrl}/brand/theotter-logo.svg`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Studio digital propulsé par l'IA : sites et applications ultra premium conçus, designés et livrés en quelques jours, pour 60 à 80 % de moins qu'une agence classique.",
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

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TheOtter',
  url: siteUrl,
  inLanguage: 'fr-FR',
  publisher: {
    '@type': 'Organization',
    name: 'TheOtter',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de sites et d\'applications web assistée par l\'IA',
  serviceType: 'Conception et développement web',
  description:
    'Stratégie, design, contenu, UX et SEO pour des sites vitrines et applications, livrés en quelques jours grâce à l\'IA.',
  provider: {
    '@type': 'Organization',
    name: 'TheOtter',
    url: siteUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  url: siteUrl,
}

const jsonLdScripts = [organizationJsonLd, websiteJsonLd, serviceJsonLd]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {jsonLdScripts.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
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
