import clsx from 'clsx'

function Office({
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

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Discord" invert={invert}>
          <a href="https://discord.gg/nextjs" className="link">
            discord.gg/inviteLink
          </a>
        </Office>
      </li>
      <li>
        <Office name="Github" invert={invert}>
          <a href="https://github.com/uniFirez" className="link">
            github.com/uniFirez
          </a>
        </Office>
      </li>
      <li>
        <Office name="LIDO Nation" invert={invert}>
          <a
            href="https://www.lidonation.com/en/proposals/polkadot-cardano-unifires-f11"
            className="link"
          >
            LIDO Nation
          </a>
        </Office>
      </li>
    </ul>
  )
}
