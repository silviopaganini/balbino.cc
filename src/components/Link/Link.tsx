import React, { PropsWithChildren } from 'react'
import { useGlobalState } from 'state'
import { Link, SxStyleProp } from 'theme-ui'

type Props = {
  to?: string
  href?: string
  target?: string
  rel?: string
  sx?: SxStyleProp
  variant?: string
  onClick?(): void
}

const LinkScroll = ({
  variant = 'default',
  children,
  to,
  href,
  rel,
  target,
  onClick,
}: PropsWithChildren<Props>) => {
  const [uiState, setUiState] = useGlobalState('ui')

  const onMouseOver = () => {
    setUiState({ ...uiState, showCircle: false })
  }
  const onMouseOut = () => {
    setUiState({ ...uiState, showCircle: true })
  }

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
