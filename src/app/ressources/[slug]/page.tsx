import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCTA from '@/components/ArticleCTA'
import { getArticle, getArticles, renderBody } from '@/lib/articles'

type Params = { slug: string }

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const url = `https://theotter.fr/ressources/${article.slug}`
  return {
    title: `${article.title} — TheOtter`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      locale: 'fr_FR',
      images: [{ url: article.image, width: 1200, height: 675, alt: article.title }],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <>
      <Navbar solid />
      <main className="bg-[var(--color-paper)] pt-40 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <a href="/ressources" className="text-sm text-[var(--color-ink)] hover:underline">
            ← Tous les articles
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-mist)] mt-10 mb-4">{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-8">{article.title}</h1>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed pb-10 mb-12" style={{ borderBottom: '1px solid var(--color-line)' }}>{article.description}</p>

          <div className="prose-otter" dangerouslySetInnerHTML={{ __html: renderBody(article.body) }} />

          <ArticleCTA />
        </article>
      </main>
      <Footer />
    </>
  )
}
