import React, { PropsWithChildren } from 'react'
import theme from 'theme'
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
        position: 'relative',
        minHeight: `calc(100vh - ${theme.space![5]}px - ${theme.space![5]}px)`,
        mb: 5,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Section
