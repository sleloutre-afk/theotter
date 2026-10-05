import fs from 'node:fs'
import path from 'node:path'
import { marked } from 'marked'

export type Article = {
  slug: string
  title: string
  description: string
  date: string
  image: string
  body: string
}

const DIR = path.join(process.cwd(), 'content', 'articles')

function parse(file: string): Article {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error(`Frontmatter manquant dans ${file}`)
  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
  }
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    image: meta.image,
    body: match[2],
  }
}

export function getArticles(): Article[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('.'))
    .map(parse)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug)
}

export function renderBody(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string
}
