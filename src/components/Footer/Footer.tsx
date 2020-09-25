import { Link } from 'components'
import React from 'react'
import { Box, Grid } from 'theme-ui'

type Props = {
  onClickAbout(): void
}

const Footer = ({ onClickAbout }: Props) => {
  return (
    <Grid
      sx={{
        paddingY: 5,
        paddingX: 6,
        left: 0,
        bottom: 0,
        position: 'fixed',
        width: '100%',
        color: 'primary',
        zIndex: 100,
      }}
      as="header"
      gap={0}
      width="50%"
    >
      <Box>
        <Link href="http://instagram.com/balbinomarcos" target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Link onClick={onClickAbout} to="about">
          About Marcos
        </Link>
      </Box>
    </Grid>
  )
}

export default Footer
