import { Link } from 'components'
import { motion } from 'framer-motion'
import useTime from 'hooks/useTime'
import React, { useEffect, useState } from 'react'
import { useGlobalState } from 'state'
import { Box, Grid } from 'theme-ui'

type Props = {
  onClickAbout(): void
  firstProjectSlug?: string
}

const Div = motion.custom(Box)

const Footer = ({ onClickAbout, firstProjectSlug }: Props) => {
  const [aboutVisible] = useGlobalState('about')
  const time = useTime('America/Sao_Paulo')
  const [showScroll, setShowScroll] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY < 100)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <Grid
      sx={{
        paddingY: [2, 2, 5],
        paddingX: [2, 2, 6],
        left: 0,
        bottom: 0,
        position: 'fixed',
        width: '100%',
        color: 'primary',
        zIndex: 100,
        gridTemplateColumns: '45% 27.5% 27.5%',
      }}
      as="header"
      gap={0}
    >
      <Div
        animate={{ opacity: showScroll ? 1 : 0 }}
        sx={{ gridColumn: 1, pointerEvents: showScroll ? 'visible' : 'none' }}
      >
        {!aboutVisible && <Link to={firstProjectSlug}>Scroll to see more</Link>}
      </Div>
      <Box sx={{ gridColumn: 2, display: ['none', 'none', 'block'] }}>São Paulo, BR {time}</Box>
      <Box sx={{ textAlign: 'right', gridColumn: 3 }}>
        <Link onClick={onClickAbout}>{!aboutVisible ? 'About Marcos' : 'Back'}</Link>
      </Box>
    </Grid>
  )
}

export default Footer
