import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  frequency: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface WorkGroup {
  date: string
  client: string
  host: string
  title: string
  docs: string
  description: string
  frequency: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export interface Document {
  author: string
  blockchain: string
  date: string
  href: string
  title: string
  internal: string
  external: string
  image: ImagePropsWithOptionalAlt
  summary: string
  creator: {
    name: string
    description: string
  }
  color: string
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

export function loadWorkGroups() {
  return loadEntries<WorkGroup>('workgroups', 'workGroup')
}

export function loadDocuments() {
  return loadEntries<Document>('documents', 'document')
}
