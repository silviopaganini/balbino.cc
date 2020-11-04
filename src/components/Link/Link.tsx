import React, { PropsWithChildren } from 'react'
import { Link, SxStyleProp } from 'theme-ui'

type Props = {
  to?: string
  href?: string
  target?: string
  rel?: string
  sx?: SxStyleProp
  variant?: string
  onClick?(): void
  onMouseOut?(): void
  onMouseOver?(): void
}

const LinkScroll = ({
  variant = 'default',
  children,
  to,
  href,
  rel,
  target,
  onClick,
  onMouseOver,
  onMouseOut,
}: PropsWithChildren<Props>) => {
  return (
    <Link
      variant={variant}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      href={href}
      target={target}
      rel={rel}
      onClick={() => {
        if (to) {
          document.querySelector(`#${to}`)?.scrollIntoView({ behavior: 'smooth' })
        }
        onClick && onClick()
      }}
    >
      {children}
    </Link>
  )
}

export default LinkScroll
