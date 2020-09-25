import React, { PropsWithChildren } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

type Props = {
  id?: string
  as?: 'section' | 'article'
  sx?: SxStyleProp
}

const Section = ({ as = 'section', children, id, sx }: PropsWithChildren<Props>) => {
  return (
    <Box
      id={id}
      as={as}
      sx={{
        minHeight: 'inherit',
        position: 'relative',
        height: '100vh',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Section
