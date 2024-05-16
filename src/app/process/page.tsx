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
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-full sm:w-64 md:w-80 lg:w-[35rem] xl:w-[40rem]">
            <StylizedImage
              {...image}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 96vw, (min-width: 1025px) 45rem, (min-width: 1280px) 53rem"
              className="justify-center lg:justify-end xl:justify-start"
            />
          </FadeIn>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
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

function Onboarding() {
  return (
    <Section title="ONBOARDING" image={{ src: background }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Onboarding Participants:
          </strong>{' '}
          We initiate our collaboration by identifying and connecting with
          ambassadors from strategically relevant blockchains, currently
          focusing on Cardano and Polkadot. This selection is driven by their
          potential to contribute to and lead future workgroups, emphasizing our
          commitment to fostering a collaborative ecosystem.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Building Background Knowledge:
          </strong>{' '}
          Each participant brings unique insights related to their
          blockchain&aposs specific strengths. By helping deepen their
          understanding between blockchains, we prepare them to lead and
          specialize in areas of mutual interest. This foundational knowledge is
          crucial as we aim to scale our outreach and impact by nurturing
          skilled developers and visionary leaders.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Formation of Cross-Chain Working Groups:
          </strong>{' '}
          Our structured approach in forming cross-chain working groups is based
          on the technical skills and expertise of our participants. These
          groups are tailored to focus on pivotal areas such as Web3 adoption,
          decentralized governance, and cross-chain interoperability. Initially,
          our efforts are concentrated in three main groups, each tasked with
          driving research and analysis to advance these critical aspects of
          blockchain technology.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Onboarding</TagListItem>
        <TagListItem>Relevancy</TagListItem>
        <TagListItem>System architecture</TagListItem>
        <TagListItem>Blockchain infrastructure</TagListItem>
        <TagListItem>Formation</TagListItem>
        <TagListItem>Ambassadors</TagListItem>
      </TagList>
    </Section>
  )
}

function Knowledge() {
  return (
    <Section title="KNOWLEDGE SYNTHESIS" image={{ src: background2, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Self-Organization:
          </strong>{' '}
          We facilitate the formation of self-organizing groups, drawing from
          the unique expertise and interests of each participant. With guidance
          from experienced ambassadors, these groups are primed for deep dives
          into knowledge sharing, enhancing cross-chain research and
          experimentation. This process not only fosters innovation but also
          ensures that insights are grounded in practical expertise from across
          the blockchain spectrum.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Synthesizing Findings:
          </strong>{' '}
          Each member of our self-organized work groups enjoys the freedom to
          explore and discuss the various facets of blockchain
          infrastructure—its capabilities, limitations, and governance models.
          Our initial focus is on creating a robust framework for integrating
          diverse ideas in a cohesive manner, setting a standard for future
          discussions and innovations.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Report Creation:
          </strong>{' '}
          The culmination of our collaborative efforts is the creation of
          detailed reports by each work group. These documents are crafted under
          the stewardship of the group&apos;s host, incorporating collective findings
          and insights. Before being shared publicly, each report undergoes
          thorough revision to ensure accuracy and relevance, effectively
          capturing the advancements made through our joint endeavors.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Collaboration</TagListItem>
        <TagListItem>Self hosting work groups</TagListItem>
        <TagListItem>Architecture curation</TagListItem>
        <TagListItem>Frequent calls</TagListItem>
        <TagListItem>Report creation</TagListItem>
        <TagListItem>Knowledge synthesis</TagListItem>
      </TagList>
    </Section>
  )
}

function Dissemination() {
  return (
    <Section title="DISSEMINATION" image={{ src: background2, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Result Dissemination:
          </strong>{' '}
          Upon finalization, the report is distributed throughout Cardano and
          Polkadot, ensuring all participants have access to the insights
          garnered. The findings are publicized through a variety of formats
          including articles, blogs, and videos to reach a broader audience.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Ecosystems Engagement:
          </strong>{' '}
          With the publication of these articles, the synthesized knowledge
          becomes accessible to both ecosystems. Ambassadors play a key role
          distributing its content in a top to bottom stream.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Wider Reach:
          </strong>{' '}
          The initial dissemination seeds the ground for further exposure. As
          developers begin to implement insights from the reports, content is
          adapted into various media forms—enhancing accessibility and
          engagement. This strategy extends the reach of our findings beyond
          traditional blockchain communities to include influencers, content
          creators, and industry thought leaders, thereby amplifying the impact
          and visibility of both uniFires and the participating blockchain
          ecosystems.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Fostering Collaboration:
          </strong>{' '}
          This work isn’t yet completed, future media sharing, revisional work
          and improvement is still necessary to empower blockchains at uniFires.
          However, this is now accessible and capable of detribalizing
          blockchains for its great social change.
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

function FutureGroups() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="bg-red-30 absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="sample work group"
        title="WEB3 ADOPTION WORK GROUP BEST PRACTICES"
      >
        <p>
          These are just some of the topics that could be discussed in this
          working group.
        </p>
      </SectionIntro>

      <Container className="mt-8">
        <GridList>
          <GridListItem title="Decreasing Time to Market">
            Curating and formalizing a group of projects that reduce the time
            for ideas to be brought to market. This group would optimize
            development speed for effective project creations.
          </GridListItem>
          <GridListItem title="Future Economy">
            Organizing and structuring future economic work groups that focus on
            the development of DeFi and NFTs on Cardano and Polkadot.
          </GridListItem>
          <GridListItem title="Corporate Partnership">
            Structuring methods for building corporate partnerships that enhance
            the Cardano and Polkadot ecosystems through the implementation of
            blockchain technology for consumer use.
          </GridListItem>
          <GridListItem title="RealFi">
            Expanding on projects like World Mobile Token and Empowa on Cardano
            that are making significant real-world impacts in connectivity and
            housing, respectively.
          </GridListItem>
          <GridListItem title="Other Work Groups">
            Showcasing Cardano&apos;s contributions to Web3 through initiatives
            in credential verification, anti-counterfeiting, supply chain
            tracking, and identity verification with projects like Book.io,
            Cornucopias, NMKR, Clarity, Muesliswap, and Indigo.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="our process" title="HOW UNIFIRE CREATES">
        <p>
          We’ve created and facilitated a process to onboard groups of well
          positioned ambassadors between various blockchains. Through our
          process, we enhance access to premium knowledge to dig deeper into
          mutual areas of interest in blockchain infrastructure.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Onboarding />
        <Knowledge />
        <Dissemination />
      </div>

      <FutureGroups />

      <ContactSection />
    </>
  )
}
