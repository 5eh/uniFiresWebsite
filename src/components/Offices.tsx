import clsx from 'clsx'

function Footprint({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Footprints({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Footprint name="Discord" invert={invert}>
          <a href="https://discord.gg/SYMREsnSwQ" className="link">
            Discord Public Server
          </a>
        </Footprint>
      </li>
      <li>
        <Footprint name="Github" invert={invert}>
          <a href="https://github.com/uniFirez" className="link">
            Public Repository
          </a>
        </Footprint>
      </li>
      <li>
        <Footprint name="Twitter" invert={invert}>
          <a href="https://twitter.com/uni_fires" className="link">
            Twitter Account
          </a>
        </Footprint>
      </li>
      <li>
        <Footprint name="Calendar" invert={invert}>
          <a
            href="https://calendar.google.com/calendar/u/0?cid=dW5pLmZpcmVzc3NAZ21haWwuY29t"
            className="link"
          >
            Google Calender
          </a>
        </Footprint>
      </li>
      <li>
        <Footprint name="Youtube" invert={invert}>
          <a
            href="https://www.youtube.com/channel/UC6EAMUQSNzjxp_F-HbvMmdQ
s"
            className="link"
          >
            Youtube Channel
          </a>
        </Footprint>
      </li>
    </ul>
  )
}
