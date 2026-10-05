import type { MetadataRoute } from 'next'
import { getArticles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theotter.fr/ressources',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...getArticles().map((a) => ({
      url: `https://theotter.fr/ressources/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: 'https://theotter.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://theotter.fr/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://theotter.fr/politique-de-confidentialite',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://theotter.fr/gestion-cookies',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
