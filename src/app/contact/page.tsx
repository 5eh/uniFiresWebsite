import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Footprints } from '@/components/Footprints'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { type WorkGroup, type MDXEntry, loadWorkGroups } from '@/lib/mdx'
import { SectionIntro } from '@/components/SectionIntro'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Community
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Cardano"
                  name="blockchain"
                  value="Kusama
"
                />
                <RadioInput
                  label="Polkadot"
                  name="blockchain"
                  value="polkadot"
                />
                <RadioInput
                  label="Ethereum"
                  name="blockchain"
                  value="ethereum"
                />
                <RadioInput
                  label="Kusama
"
                  name="blockchain"
                  value="Kusama
"
                />
                <RadioInput label="KodaDot" name="blockchain" value="KodaDot" />
                <RadioInput label="[SWARM]" name="blockchain" value="Swarm" />
                <RadioInput label="Other" name="blockchain" value="other" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Footprints className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
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
              <article className="relative flex w-full flex-col  p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <Link href={workGroup.href}>
                  {' '}
                  <h3>
                    <span className=" inset-0 rounded-3xl" />
                    <Image
                      src={workGroup.logo}
                      alt={workGroup.client}
                      className="h-16 w-16"
                      unoptimized
                    />
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
                </Link>
                {/* Work on wrapping container with workgroup link then add button to link to docs */}

                <Link href={workGroup.docs}>
                  <Button className="mt-auto w-full justify-center ">
                    View Documentation
                  </Button>
                </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Join the alliance.',
}

export default async function Contact() {
  let workGroups = (await loadWorkGroups()).slice(0, 3)

  return (
    <>
      <PageIntro eyebrow="contact us" title="LETS UNIFY">
        <p>Join the alliance.</p>
      </PageIntro>

      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
      <div className="pb-24">
        <WorkGroups workGroups={workGroups} />
      </div>
    </>
  )
}
