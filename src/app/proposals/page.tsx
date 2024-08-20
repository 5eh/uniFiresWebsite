import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Footprints } from '@/components/Footprints'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proposals',
  description: 'Join the alliance.',
}

interface Proposal {
  blockchain: string
  title: string
  problem: string
  solution: string
  fundsRequested: string
  date: string
  color: string
  reference: string
}

const pendingProposals: Proposal[] = [
  // {
  //   blockchain: 'Cardano',
  //   title: 'CARDANO & POLKADOT LIGHTBRIDGE FEASABILITY STUDY',
  //   problem:
  //     'There are currently no running decentralized bridges between Cardano & Polkadot, and we ask ourselves how we can bring ADA to Polkadot and DOT to Cardano.',
  //   solution:
  //     'We drive a Feasibility Study and enable further developments for a Polkadot <> Cardano light-client bridge. These results should also drive other bridge developments on both ecosystems.',
  //   fundsRequested: '100K ADA',
  //   date: "JUN '24",
  //   color: '#05A8DC',
  //   reference: 'https://cardano.ideascale.com/c/idea/121371',
  // },
]

const successfulProposals: Proposal[] = [
  {
    blockchain: 'Cardano',
    title: 'Polkadot-Cardano uniFires',
    problem:
      'Adoption, governance and interoperability are important themes for both Polkadot and Cardano. The future is multichain but not many are equipped to build solutions that extend beyond their own bubble.',
    solution:
      'We onboard participants to thematic working groups to discuss, research, experiment and gather best practices for Cardano and Polkadot communities, sharing the results via far-reaching channels.',
    fundsRequested: '140K ADA',
    date: "NOV '23",
    color: '#149B42',
    reference: 'https://cardano.ideascale.com/c/idea/112389',
  },
]

const unsuccessfulProposals: Proposal[] = [
  {
    blockchain: 'Cardano',
    title: 'CARDANO & POLKADOT LIGHTBRIDGE FEASABILITY STUDY',
    problem:
      'There are currently no running decentralized bridges between Cardano & Polkadot, and we ask ourselves how we can bring ADA to Polkadot and DOT to Cardano.',
    solution:
      'We drive a Feasibility Study and enable further developments for a Polkadot <> Cardano light-client bridge. These results should also drive other bridge developments on both ecosystems.',
    fundsRequested: '100K ADA',
    date: "JUN '24",
    color: '#D62246', //D62246
    reference: 'https://cardano.ideascale.com/c/idea/121371',
  },
  {
    blockchain: 'Cardano',
    title: 'Cardano & Polkadot Digital Marketplace Factory',
    problem:
      'There is currently no easy way to build marketplaces inside of Polkadot. It also requires heavy technical understanding of Substrates, which makes it hard for entrepreneurs to join Polkadot.',
    solution:
      'An Open-Sourced Digital Factory line that produces pristine marketplaces for anyone to create, own and promote. Integrated into Cardano, and bridged to Polkadot for cross chain accessibility.',
    fundsRequested: '88K DOT',
    date: "MAY '24",
    color: '#D62246', // Polkadot is #E6007A
    reference: 'https://cardano.ideascale.com/c/idea/120525',
  },
]
export default function Proposals() {
  return (
    <>
      <PageIntro eyebrow="our proposals" title="ALL PROPOSALS">
        <p>
          All proposals that uniFires has been associated and involved in
          creating.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value={pendingProposals.length}
            label="Active Proposals"
          />
          <StatListItem
            value={successfulProposals.length}
            label="Successful Proposals"
          />
          <StatListItem
            value={
              pendingProposals.length +
              successfulProposals.length +
              unsuccessfulProposals.length
            }
            label="Total Proposals"
          />
          <StatListItem
            value={unsuccessfulProposals.length}
            label="Unsuccessful Proposals"
          />
        </StatList>
      </Container>

      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <SectionIntro eyebrow="pending proposals" title=""></SectionIntro>

        {pendingProposals.length === 0 ? (
          <Container className="mb-8 mt-8 sm:mb-12 sm:mt-12 lg:mb-16 lg:mt-16">
            <div className="rounded-md border border-gray-800 pb-4 pt-4 text-center hover:bg-gray-400/10">
              <h2 className="text-xl font-bold">
                Currently no active pending proposals ...
              </h2>
              <Link href="https://discord.gg/SYMREsnSwQ" target="_blank">
                <Button className="mt-4 bg-gray-800 text-white">
                  Check in soon, or view what the community is brewing up
                </Button>
              </Link>
            </div>
          </Container>
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3">
            {pendingProposals.map((proposal, index) => (
              <FadeIn key={index}>
                <div
                  className="rounded-md border text-[#3E3E3E]"
                  style={{
                    borderColor: `${proposal.color}/60`,
                    backgroundColor: `${proposal.color}/30`,
                    minHeight: '600px',
                  }}
                >
                  <div className="flex justify-between pb-1 pl-2 pr-2 pt-1">
                    <FadeIn>
                      <h1
                        className="code font-semibold"
                        style={{ color: proposal.color }}
                      >
                        {proposal.blockchain.toUpperCase()}
                      </h1>
                    </FadeIn>
                    <span className="font-md code text-gray-500">
                      {proposal.date}
                    </span>
                  </div>
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: `${proposal.color}`,
                      height: '1px',
                    }}
                  />
                  <FadeIn>
                    <h3 className="pb-4 pl-3 pr-3 pt-4 text-xl font-bold">
                      {proposal.title.toUpperCase()}
                    </h3>
                  </FadeIn>
                  <div className="pb-3 pl-3 pr-3 pt-1">
                    <h3
                      className="code mb-4 mt-4 text-sm"
                      style={{ color: proposal.color }}
                    >
                      PROBLEM
                    </h3>
                    <FadeIn>
                      <p className="text-lg">{proposal.problem}</p>
                    </FadeIn>
                    <h3
                      className="code mb-4 mt-4 text-sm"
                      style={{ color: proposal.color }}
                    >
                      SOLUTION
                    </h3>
                    <FadeIn>
                      <p className="text-lg">{proposal.solution}</p>
                    </FadeIn>
                    <div className="code mb-2 mt-2 flex justify-between text-xl font-semibold">
                      <span>REQUESTED:</span>
                      <span>{proposal.fundsRequested}</span>
                    </div>
                    <Link href={`${proposal.reference}`} target="_blank">
                      <Button
                        className="center code flex w-full rounded-none border hover:opacity-90"
                        style={{
                          borderColor: proposal.color,
                          backgroundColor: `${proposal.color}B3`,
                        }}
                      >
                        <p>REFERENCE</p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>

      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <SectionIntro eyebrow="successful proposals" title=""></SectionIntro>

        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3">
          {successfulProposals.map((proposal, index) => (
            <FadeIn key={index}>
              <div
                className="rounded-md border text-[#3E3E3E]"
                style={{
                  borderColor: `${proposal.color}/60`,
                  backgroundColor: `${proposal.color}/30`,
                  minHeight: '600px',
                }}
              >
                <div className="flex justify-between pb-1 pl-2 pr-2 pt-1">
                  <FadeIn>
                    <h1
                      className="code font-semibold"
                      style={{ color: proposal.color }}
                    >
                      {proposal.blockchain.toUpperCase()}
                    </h1>
                  </FadeIn>
                  <span className="font-md code text-gray-500">
                    {proposal.date}
                  </span>
                </div>
                <div
                  className="w-full"
                  style={{
                    backgroundColor: `${proposal.color}`,
                    height: '1px',
                  }}
                />
                <FadeIn>
                  <h3 className="pb-4 pl-3 pr-3 pt-4 text-xl font-bold">
                    {proposal.title.toUpperCase()}
                  </h3>
                </FadeIn>
                <div className="pb-3 pl-3 pr-3 pt-1">
                  <h3
                    className="code mb-4 mt-4 text-sm"
                    style={{ color: proposal.color }}
                  >
                    PROBLEM
                  </h3>
                  <FadeIn>
                    <p className="text-lg">{proposal.problem}</p>
                  </FadeIn>
                  <h3
                    className="code mb-4 mt-4 text-sm"
                    style={{ color: proposal.color }}
                  >
                    SOLUTION
                  </h3>
                  <FadeIn>
                    <p className="text-lg">{proposal.solution}</p>
                  </FadeIn>
                  <div className="code mb-2 mt-2 flex justify-between text-xl font-semibold">
                    <span>RECEIVED:</span>
                    <span>{proposal.fundsRequested}</span>
                  </div>
                  <Link href={`${proposal.reference}`} target="_blank">
                    <Button
                      className="center code flex w-full rounded-none border hover:opacity-90"
                      style={{
                        borderColor: proposal.color,
                        backgroundColor: `${proposal.color}B3`,
                      }}
                    >
                      <p>REFERENCE</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <SectionIntro eyebrow="failed proposals" title=""></SectionIntro>

        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3">
          {unsuccessfulProposals.map((proposal, index) => (
            <FadeIn key={index}>
              <div
                className="rounded-md border text-[#3E3E3E]"
                style={{
                  borderColor: `${proposal.color}/60`,
                  backgroundColor: `${proposal.color}/30`,
                  minHeight: '600px',
                }}
              >
                <div className="flex justify-between pb-1 pl-2 pr-2 pt-1">
                  <FadeIn>
                    <h1 className="code font-semibold text-[#D62246]">
                      {proposal.blockchain.toUpperCase()}
                    </h1>
                  </FadeIn>
                  <span className="font-md code text-gray-500">
                    {proposal.date}
                  </span>
                </div>
                <div
                  className="w-full bg-[#D62246]"
                  style={{
                    height: '1px',
                  }}
                />
                <FadeIn>
                  <h3 className="pb-4 pl-3 pr-3 pt-4 text-xl font-bold">
                    {proposal.title.toUpperCase()}
                  </h3>
                </FadeIn>
                <div className="pb-3 pl-3 pr-3 pt-1">
                  <h3 className="code mb-4 mt-4 text-sm text-[#D62246]">
                    PROBLEM
                  </h3>
                  <FadeIn>
                    <p className="text-lg">{proposal.problem}</p>
                  </FadeIn>
                  <h3 className="code mb-4 mt-4 text-sm text-[#D62246]">
                    SOLUTION
                  </h3>
                  <FadeIn>
                    <p className="text-lg">{proposal.solution}</p>
                  </FadeIn>
                  <div className="code mb-2 mt-2 flex justify-between text-xl font-semibold">
                    <span>REQUESTED:</span>
                    <span>{proposal.fundsRequested}</span>
                  </div>
                  <Link href={`${proposal.reference}`} target="_blank">
                    <Button
                      className="center code flex w-full rounded-none border border-[#D62246] bg-red-400 hover:bg-red-500 hover:opacity-90"
                      style={
                        {
                          // borderColor: proposal.color,
                          // backgroundColor: `${proposal.color}B3`,
                        }
                      }
                    >
                      <p>REFERENCE</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mb-8 mt-8 sm:mb-12 sm:mt-12 lg:mb-16 lg:mt-16">
        <div className="rounded-md border border-gray-800 p-4 text-center">
          <h2 className="text-xl font-bold">with more to come...</h2>
          <Link href="https://discord.gg/SYMREsnSwQ" target="_blank">
            <Button className="mt-4 bg-gray-800 text-white">COMMUNITY</Button>
          </Link>
        </div>
      </Container>

      <div className="mb-6 mt-6">
        <ContactSection />
      </div>
    </>
  )
}
