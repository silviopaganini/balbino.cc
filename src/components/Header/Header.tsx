import React, { useEffect, useState } from 'react'
import { Box, Grid } from 'theme-ui'
import moment from 'moment-timezone'
import Link from 'components/Link'
moment().tz('America/Los_Angeles').format()

const Header = () => {
  const [time, setTime] = useState(moment().tz('Europe/London').format('HH:mm:ss'))
  // const [aboutVisible] = useGlobalState('about')
  useEffect(() => {
    const updateTime = () => {
      setTime(moment().tz('Europe/London').format('HH:mm:ss'))
    }

    const interval = setInterval(updateTime, 500)
    return () => {
      clearInterval(interval)
    }
  })
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
      }}
      as="header"
      gap={0}
      width="50%"
    >
      <Box>
        <Link to="home">
          marcosbalbino ©<br />
          selected work 2015 — {new Date().getFullYear()}
        </Link>
      </Box>
      <Box sx={{ textAlign: 'right', display: ['none', 'none', 'block'] }}>London, UK {time}</Box>
    </Grid>
  )
}

export default Header
