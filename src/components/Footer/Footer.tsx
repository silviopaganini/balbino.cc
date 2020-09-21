import React from 'react'
import { Box, Grid } from 'theme-ui'

const Header = () => {
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
      <Box>Instagram</Box>
      <Box sx={{ textAlign: 'right' }}>About Marcos</Box>
    </Grid>
  )
}

export default Header
