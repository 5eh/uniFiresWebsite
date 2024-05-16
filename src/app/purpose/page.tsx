import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import background from '@/images/background.png'
import background2 from '@/images/background2.png'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20">
        {/* Image Div - Order changes based on section parity */}
        <div className="flex justify-center lg:order-first lg:group-odd/section:order-last">
          <FadeIn className="w-full sm:w-64 md:w-80 lg:w-[35rem] xl:w-[40rem]">
            <StylizedImage
              {...image}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 96vw, (min-width: 1025px) 45rem, (min-width: 1280px) 53rem"
              className="justify-center lg:group-odd/section:justify-start lg:group-even/section:justify-end"
            />
          </FadeIn>
        </div>

        {/* Content Div - Order changes based on section parity */}
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-odd/section:order-first lg:group-even/section:order-last">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}



function Vision() {
  return (
    <Section title="VISION" image={{ src: background }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Short term:
          </strong>{' '}
          We will build a long lasting relationship and partnership between Cardano and Polkadot, where we encourage developers and ambassadors to work together to build a better future for blockchain infrastructure.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Long term:
          </strong>{' '}
          We will build a future where any blockchain can utilize our work groups and joint developer collaboration to build
          standardized and universally accessible blockchain infrastructure.
        </p>
      </div>

      <TagList className="mt-4">
        <TagListItem>Partnerships</TagListItem>
        <TagListItem>Global movement</TagListItem>

      </TagList>
    </Section>
  )
}

function Knowledge() {
  return (
    <Section title="GOALS" image={{ src: background2, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Short term:
          </strong>{' '}
          We are hosting frequent calls and building self organizing work groups. These groups are tasked with exploring and discussing the various facets of blockchain infrastructure—its capabilities, limitations, and governance models. Our initial focus is on creating a robust framework for integrating diverse ideas in a cohesive manner, setting a standard for future discussions and innovations.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Long Term:
          </strong>{' '}
          Onboard more blockchains, ambassadors and developers to our work group. We are creating thought provoking conversations and knowledge sharing to build a better future for blockchain infrastructure.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Completion:
          </strong>{' '}
         Any developer or builder can join a work group, or receive resources and information from the work groups research analysis.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Scalability</TagListItem>
        <TagListItem>Integration</TagListItem>
        <TagListItem>Governance</TagListItem>
        <TagListItem>Framework</TagListItem>
        <TagListItem>Research</TagListItem>
      </TagList>
    </Section>
  )
}

function Dissemination() {
  return (
    <Section title="GROWTH" image={{ src: background2, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Short term:
          </strong>{' '}
          Senior developers and ambassadors from both ecosystems are invited to participate in the dissemination of knowledge.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Long term:
          </strong>{' '}
          General community members from various blockchains are invited to attend and participate. Bringing in content creators to share data and findings with global audiences.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Completion:
          </strong>{' '}
          Enable viable top to bottom approach for sharing the wealth of knowledge uniFires holds and brings them available and accessible into the Web3 ecosystem. Being then capable to share infrastructure and guides for anyone to build a community into Web3.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Publication</TagListItem>
        <TagListItem>Dissemination</TagListItem>
        <TagListItem>Community engagement</TagListItem>
        <TagListItem>Wider reach</TagListItem>
        <TagListItem>Developent curation </TagListItem>
        <TagListItem>Collaboration</TagListItem>
      </TagList>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Our Purpose',
  description:
    'We unify blockchain tribes.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="our purpose" title="WE UNIFY BLOCKCHAIN TRIBES">
        <p>
          We’ve created and facilitated a process to onboard groups of well
          positioned ambassadors between various blockchains. Through our
          process, we enhance access to premium knowledge to dig deeper into
          mutual areas of interest in blockchain infrastructure.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Vision />
        <Knowledge />
        <Dissemination />
      </div>

      <ContactSection />
    </>
  )
}
