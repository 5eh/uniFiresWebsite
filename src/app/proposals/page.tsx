import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Footprints } from '@/components/Footprints'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Join the alliance.',
}

const proposals = [
  {
    title: 'CARDANO & POLKADOT LIGHTBRIDGE FEASABILITY STUDY',
    problem:
      'There are currently no running decentralized bridges between Cardano & Polkadot, and we ask ourselves how we can bring ADA to Polkadot and DOT to Cardano.',
    solution:
      'We drive a feasibility study and enable further developments for a Polkadot & Cardano light-client bridge. These results should also drive other bridge developments on both ecosystems.',
    fundsRequested: '100K ADA',
    date: "JAN '24",
    color: '#05A8DC',
  },
  {
    title: 'POLKADOT DIGITAL MARKETPLACE',
    problem:
      'There is currently no easy way to build marketplaces inside of Polkadot. It also requires heavy technical understanding of Substrates, which makes it hard for entrepreneurs to join Polkadot.',
    solution:
      'We are building a Digital Marketplace Factory that helps people build their marketplace concepts easily.',
    fundsRequested: '100K DOT',
    date: "JAN '24",
    color: '#E6007A',
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
          <StatListItem value="3" label="Active Proposals" />
          <StatListItem value="XX" label="Successful Proposals" />
          <StatListItem value="3" label="Total Proposals" />
        </StatList>
      </Container>

      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3">
          {proposals.map((proposal, index) => (
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
                      {proposal.title.split(' ')[0]}
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
                    {proposal.title}
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
                  <div className="code mb-3 mt-3 flex justify-between text-xl font-semibold">
                    <span>REQUESTED:</span>
                    <span>{proposal.fundsRequested}</span>
                  </div>
                  <Button
                    className="center code flex w-full rounded-none border hover:opacity-90"
                    style={{
                      borderColor: proposal.color,
                      backgroundColor: `${proposal.color}B3`,
                    }}
                  >
                    <p>REFERENCE</p>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  )
}
