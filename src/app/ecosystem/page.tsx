import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageFiller from '@/images/background.png'
import DumplingHead from '@/images/team/DumplingHead.png'
import FrankHead from '@/images/team/FrankHead.png'
import FelixHead from '@/images/team/FelixHead.png'
import LuuuHead from '@/images/team/LuuuHead.png'
import VikHead from '@/images/team/VikHead.png'
import TomiHead from '@/images/team/TomiHead.png'
import MarkHead from '@/images/team/MarkHead.png'
import PeteHead from '@/images/team/PeteHead.png'
import PeterHead from '@/images/team/PeterHead.png'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="pl-4 pr-4 ">
      <div className="py-24sm:mt-32 mt-24 rounded-4xl bg-neutral-950 pb-12 pt-12 lg:mt-40 lg:py-32">
        <SectionIntro eyebrow="our values" title="OUR CORE VALUES" invert>
          <p>
            We are a group of like-minded people who share the same core values.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList className="lg:grid-cols-3 xl:grid-cols-4">
            <GridListItem title="Accessible" invert>
              We strongly focus on enabling accessible and valuable projects and
              infrastructure for everyone.
            </GridListItem>
            <GridListItem title="Knowledge Sharing" invert>
              Our workgroups are open to the public, we believe in shared and
              open sourced knowledge sharing.
            </GridListItem>
            <GridListItem title="Embetterment" invert>
              Blockchains enable a brighter future, and we want to ensure the
              communities grow and improve.
            </GridListItem>
            <GridListItem title="Trusted trustlessness" invert>
              Our communities are decentralized yet still have a tight bond,
              you&apos;re invited to stay.
            </GridListItem>
          </GridList>
        </Container>
      </div>
    </div>
  )
}

const team = [
  {
    title: 'CARDANO DEPARTMENT',
    borderTop: '#4272EE',
    borderBottom: '#264AA6',
    people: [
      {
        name: 'Peter Wolcott',
        role: 'Project Catalyst',
        image: { src: PeterHead },
      },
      {
        name: 'Felix Weber',
        role: 'Cardano Ambassador',
        image: { src: FelixHead },
      },
      {
        name: 'Dumpling',
        role: 'Cardano Teacher',
        image: { src: DumplingHead },
      },
      {
        name: 'Peter Bui',
        role: 'Learn Cardano Podcast',
        image: { src: PeteHead },
      },
      {
        name: 'Mark Petruska',
        role: 'Learn Cardano Podcast',
        image: { src: MarkHead },
      },
    ],
  },
  {
    title: 'POLKADOT DEPARTMENT',
    borderTop: '#ED1515',
    borderBottom: '#FE64A3',
    people: [
      {
        name: 'Tomi Astikainen',
        role: 'Polkadot Ambassador',
        image: { src: TomiHead },
      },
      {
        name: 'Frank Bevr',
        role: 'Polkadot Ambassador',
        image: { src: FrankHead },
      },
      {
        name: 'Just Luuu',
        role: 'Polkadot Ambassador',
        image: { src: LuuuHead },
      },
      {
        name: 'Viktor Venczel',
        role: 'Polkadot Ambassador',
        image: { src: VikHead },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div
                          className="group relative overflow-hidden rounded-xl bg-neutral-100 grayscale filter transition duration-500 ease-in-out hover:grayscale-0"
                          style={{
                            backgroundImage: `linear-gradient(${group.borderTop}, ${group.borderBottom})`,
                            border: '2px solid transparent',
                          }}
                        >
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover transition duration-500  motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Ecosystem',
  description: 'uniFires Ecosystem - our ambassadors, creators and community.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="uniFires ecosystem" title="DETRIBALIZING BLOCKCHAINS">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="80~" label="Members in community" />
          <StatListItem value="20" label="Influencers  in community" />
          <StatListItem value="4" label="Blockchains in community" />{' '}
          <StatListItem value="26" label="Previous workshop calls" />
        </StatList>
      </Container>

      <Team />

      <Culture />

      <PageLinks
        className="mt-24 pr-4 sm:mt-32 lg:mt-40"
        title=""
        intro=""
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
