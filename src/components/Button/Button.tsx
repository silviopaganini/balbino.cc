import React, { PropsWithChildren } from 'react'
import { Button as B } from 'theme-ui'

type Props = {
  href: string
}

const Button = ({ children, href, ...props }: PropsWithChildren<Props>) => {
  return (
    <B
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
