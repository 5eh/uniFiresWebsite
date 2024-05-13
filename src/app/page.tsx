import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import CardanoLogo from '@/images/clients/cardano/CardanoLogo.png'
import PolkadotLogo from '@/images/clients/polkadot/PolkadotLogo.png'

import { type WorkGroup, type MDXEntry, loadWorkGroups } from '@/lib/mdx'

type ClientLogoPair = [string, StaticImageData]
const clients: ClientLogoPair[] = [
  ['Cardano', CardanoLogo],
  ['Polkadot', PolkadotLogo],
]

function Clients() {
  return (
    <div className="ml-4 mr-4 mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <div className="h-px flex-auto bg-neutral-800" />
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;re proud to be building in
          </h2>
          <div className="h-px min-w-6 flex-auto bg-white" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 justify-center gap-x-8 gap-y-10 lg:grid-cols-2"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function WorkGroups({
  workGroups,
}: {
  workGroups: Array<MDXEntry<WorkGroup>>
}) {
  return (
    <>
      <SectionIntro title="WORK GROUPS" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          We host work groups for leading developers in various blockchains to
          collaborate on ideas and share knowledge.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {workGroups.map((workGroup) => (
            <FadeIn key={workGroup.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={workGroup.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={workGroup.logo}
                      alt={workGroup.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={workGroup.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {workGroup.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Work Group</span>
                </p>
                <p className="mt-6 font-display  font-semibold text-neutral-950 sm:text-xl md:text-2xl lg:text-2xl">
                  {workGroup.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {workGroup.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'uniFires is an open network committed to helping engaged builders from different blockchain ecosytems. Sharing resources, knowledge and ideas to help build a thriving blockchain enabled future.',
}

export default async function Home() {
  let workGroups = (await loadWorkGroups()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            uniFying Blockchains
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            uniFires is an open network committed to helping engaged builders
            from different blockchain ecosytems. Sharing resources, knowledge
            and ideas to help build a thriving blockchain enabled future.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <WorkGroups workGroups={workGroups} />

      <div className="mb-6 mt-6">
        <ContactSection />
      </div>
    </>
  )
}
