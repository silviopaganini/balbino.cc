import React from 'react'
import { Box, Grid } from 'theme-ui'
import Link from 'components/Link'
import useTime from 'hooks/useTime'

const Header = () => {
  const time = useTime('Europe/London')
  return (
    <Grid
      sx={{
        paddingY: [2, 2, 5],
        paddingX: [2, 2, 6],
        left: 0,
        top: 0,
        position: 'fixed',
        width: '100%',
        color: 'primary',
        zIndex: 100,
        gridTemplateColumns: '45% 27.5% 27.5%',
      }}
      as="header"
      gap={0}
    >
      <Box sx={{ gridColumn: 1 }}>
        <Link to="home">
          marcosbalbino ©<br />
          selected work 2015 — {new Date().getFullYear()}
        </Link>
      </Box>
      <Box sx={{ gridColumn: 2, display: ['none', 'none', 'block'] }}>London, UK {time}</Box>
    </Grid>
  )
}

export default Header
