import React, { PropsWithChildren } from 'react'
import { useGlobalState } from 'state'
import { Button as B } from 'theme-ui'

type Props = {
  href: string
}

const Button = ({ children, href, ...props }: PropsWithChildren<Props>) => {
  const [uiState, setUiState] = useGlobalState('ui')

  const onMouseOver = () => {
    setUiState({ ...uiState, showCircle: false })
  }
  const onMouseOut = () => {
    setUiState({ ...uiState, showCircle: true })
  }

  return (
    <B
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onClick={() => {
        window.open(href)
      }}
      {...props}
    >
      {children}
    </B>
  )
}

export default Button
