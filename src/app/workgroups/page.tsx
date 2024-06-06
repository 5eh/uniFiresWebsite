import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { type WorkGroup, type MDXEntry, loadWorkGroups } from '@/lib/mdx'

function WorkGroups({
  workGroups,
}: {
  workGroups: Array<MDXEntry<WorkGroup>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          THE WORK GROUPS
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {workGroups.map((workGroup) => (
          <FadeIn key={workGroup.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={workGroup.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-3">
                      {workGroup.client}
                    </h3>
                  </div>
                  <div className="flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {workGroup.host}
                    </p>
                    <p className="text-sm text-neutral-950">
                      <time dateTime={workGroup.date}>
                        {formatDate(workGroup.date)}
                      </time>
                    </p>
                  </div>

                  <div className="flex  sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 ">
                      <strong> {workGroup.frequency}</strong>{' '}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-xl  font-medium text-neutral-950 sm:text-2xl md:text-3xl lg:text-4xl">
                    <Link href={workGroup.href}>{workGroup.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {workGroup.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button
                      href={workGroup.href}
                      aria-label={`Read Work Group: ${workGroup.client}`}
                    >
                      VIEW GROUP
                    </Button>
                    <Button
                      href={workGroup.href}
                      aria-label={`Read Work Group: ${workGroup.client}`}
                    >
                      VIEW DOCS
                    </Button>
                  </div>
                  {workGroup.testimonial && (
                    <Blockquote
                      author={workGroup.testimonial.author}
                      className="mt-12"
                    >
                      {workGroup.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
export const metadata: Metadata = {
  title: 'Work groups',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let workGroups = await loadWorkGroups()

  return (
    <>
      <PageIntro
        eyebrow="uniFires workgroups"
        title="BUILDING THE FRONTIER OF WEB3 COMMUNITIES"
      >
        <p>
          Our work groups are a place for leading developers in various
          blockchains to collaborate on ideas and share knowledge. We host 3
          unique groups that tackle pressing issues between Cardano and
          Polkadot.
        </p>
      </PageIntro>

      <WorkGroups workGroups={workGroups} />

      <ContactSection />
    </>
  )
}
