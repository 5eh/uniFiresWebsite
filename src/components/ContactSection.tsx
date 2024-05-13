import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Footprints, Offices } from '@/components/Offices'

export function ContactSection() {
  return (
<<<<<<< HEAD
    <Container className="mb-24 mt-24 sm:mt-32 lg:mt-40">
=======
    <Container className="mb-12 mt-24 sm:mt-32 md:mb-8 lg:mb-12 lg:mt-40 xl:mb-20">
>>>>>>> 4912693f379c1a23391f86a77954c98035354a68
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              MEET THE TEAM
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say Hellllllo
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                FOOTPRINT
              </h3>
              <Footprints
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
