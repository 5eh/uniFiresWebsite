import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
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

function Discover() {
  return (
    <Section title="RESEARCH" image={{ src: background }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At uniFires, the collaboration between Cardano and Polkadot extends
          deeply into understanding the intricacies of blockchain technologies
          and their application in the{' '}
          <strong className="font-semibold text-neutral-950">real world</strong>{' '}
          . Our Research workgroup immerses itself in the ecosystems of our
          blockchain clients, analyzing their operations to ascertain the core
          elements that drive their systems.
        </p>
        <p>
          This process involves our team of blockchain{' '}
          <strong className="font-semibold text-neutral-950">experts</strong>{' '}
          who act like private investigators, meticulously studying the work of
          key developers and leaders within the blockchain space for extensive
          periods. Our technical teams also engage in detailed analyses,
          examining the architecture and infrastructure of various blockchain
          systems, akin to going through every layer of data as if sifting
          through trash, uncovering every hidden detail. Senior security
          analysts employ advanced techniques, including social engineering
          tactics, to test the robustness of security protocols, effectively
          gaining insights into vulnerabilities and the effectiveness of smart
          contract implementations.
        </p>
        <p>
          After{' '}
          <strong className="font-semibold text-neutral-950">thorough</strong>{' '}
          research and audits, including smart contract reviews and security
          assessments, we compile our findings into a comprehensive report. This
          report not only outlines the technical and operational details but
          also proposes a strategic plan and budget tailored to enhance system
          interoperability and security within the blockchain framework.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Blockchain relevancy</TagListItem>
        <TagListItem>Developers and key drivers</TagListItem>
        <TagListItem>System architecture</TagListItem>
        <TagListItem>Blockchain infrastructure</TagListItem>
        <TagListItem>Hacks and proofs</TagListItem>
        <TagListItem>Smart contract audits</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="BUIDL" image={{ src: background2, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Following the discovery phase at{' '}
          <strong className="font-semibold text-neutral-950">uniFires</strong>,
          our team crafts a detailed and comprehensive roadmap for each
          blockchain product we are tasked to enhance. This roadmap is
          constructed from a complex array of technical details and strategies,
          deliberately intricate to ensure thorough analysis and development
          over the projects lifecycle.
        </p>
        <p>
          Each client is paired with a
          <strong className="font-semibold text-neutral-950">dedicated</strong>{' '}
          key account manager. This manager serves as the crucial communication
          link, ensuring that all lines remain open yet selectively opaque, to
          manage client expectations effectively. Their role is to cushion the
          development team from direct client interactions, allowing them to
          focus intensely on integrating and repurposing cutting-edge solutions
          from open source projects without distractions.
        </p>
        <p>
          Moreover, our account managers adhere to a strict communication
          protocol, responding to client inquiries only after significant
          delays, typically post-9pm and several days later. This approach is
          designed to project an image of high demand and critical engagement,
          thereby minimizing client tendencies to request continual updates or
          modifications, which can impede the developmental momentum.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="COMMUNITY" image={{ src: background2, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Strategically, this allows for a final revision of the budget before
          the projects launch, ensuring all necessary{' '}
          <strong className="font-semibold text-neutral-950">resources</strong>{' '}
          are fully aligned with the project’s expanded scope.
        </p>
        <p>
          Despite the extensive use of pre-built components to streamline
          development, the bulk of progress on each project astonishingly
          unfolds in the last 24 hours. Prior to this, the allocated development
          time is often creatively utilized to produce augmented reality demos.
          These demos not only showcase our technical prowess but also engage a
          wider audience through viral social media campaigns, thereby
          broadening the projects visibility and community impact.
        </p>
        <p>
          At launch, we ensure that the main pages of each project are fully
          functional. However, the auxiliary pages are initially presented as
          lorem ipsum placeholders, which are methodically upgraded post-launch
          as part of our comprehensive maintenance retainer. This approach not
          only secures ongoing engagement with our clients but also provides
          continuous improvements and updates, enhancing the projects value and
          functionality over time.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="bg-red-30 absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
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
      <PageIntro eyebrow="our process" title="HOW UNIFIRE BUILDS">
        <p>
          We orchestrate and organize blockchain changing infrastructure through
          structured analysis, design and implementation. Our process is
          designed to be as efficient as possible, maximizing our resources to
          provide the best value to the communities we build in.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
