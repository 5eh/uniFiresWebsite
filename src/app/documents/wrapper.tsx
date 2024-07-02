import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
// import { PageLinks } from '@/components/PageLinks'

import { type Document, type MDXEntry, loadDocuments } from '@/lib/mdx'

export default async function DocumentLayout({
  document,
  children,
}: {
  document: MDXEntry<Document>
  children: React.ReactNode
}) {
  // let allDocuments = await loadDocuments()
  // let moreDocuments = allDocuments
  // .filter(({ metadata }) => metadata !== document)
  // .slice(0, 2)

  return (
    <>
      <article className="mt-24 bg-red-400 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="work group" title={document.title} centered>
            <p>{document.summary}</p>
          </PageIntro>

          <FadeIn>
            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...document.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {/* {document.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More work groups"
          pages={moreDocuments}
        />
      )} */}

      <ContactSection />
    </>
  )
}
