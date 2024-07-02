import { type Metadata } from 'next'
import Link from 'next/link'

import { BorderVertical } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

import { type Document, type MDXEntry, loadDocuments } from '@/lib/mdx'

function Documents({ document }: { document: Array<MDXEntry<Document>> }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="pb-16 font-display text-2xl font-semibold text-neutral-950">
          DOCUMENTS
        </h2>
      </FadeIn>

      <div className="space-y-12">
        {document.map((document) => (
          <FadeIn key={document.author}>
            <BorderVertical className="grid grid-cols-3 gap-x-8">
              <div className="col-span-full pl-4 sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1">
                <div className="flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm text-neutral-950">
                    <strong>{document.author}</strong>
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <p className="font-display text-xl font-medium text-neutral-950 sm:text-2xl md:text-3xl lg:text-4xl">
                  <Link href={`document/${document.internal || document.href}`}>
                    {document.title}
                  </Link>
                </p>
                <div className="mt-6 space-y-6 text-base text-gray-800">
                  <p> {document.summary} </p>
                </div>
                <div className="mb-3 mt-3 text-gray-500">
                  <p>{document.date}</p>
                </div>
                <div className="flex items-end gap-2">
                  <Button
                    href={`documents/${document.internal}`}
                    aria-label={`Read Work Group Docs: ${document.internal || document.href}`}
                    className="center code flex rounded-none border hover:opacity-90"
                    style={{
                      borderColor: document.color,
                      backgroundColor: `${document.color}B3`,
                    }}
                  >
                    READ ARTICLE
                  </Button>
                  <Link href={`${document.external}`} className="self-end">
                    <span className="code">ORIGINAL SOURCE</span>
                  </Link>
                </div>
              </div>
            </BorderVertical>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Documents',
  description:
    'Our wonderfully curated content created by the best minds on the team.',
}

export default async function Page() {
  let document = await loadDocuments()

  return (
    <>
      <PageIntro eyebrow="uniFires documents" title="READ UP ON OUR WORK.">
        <p>
          Our community tends to create fantastic articles, guides and related
          work. Feel free to check out any of the workgroups weekly meetings
          here.
        </p>
      </PageIntro>

      <Documents document={document} />

      <ContactSection />
    </>
  )
}
