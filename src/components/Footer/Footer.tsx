import { Link } from 'components'
import { motion } from 'framer-motion'
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
      <Div
        animate={{ opacity: showScroll ? 1 : 0 }}
        sx={{ pointerEvents: showScroll ? 'visible' : 'none' }}
      >
        {!aboutVisible && <Link to={firstProjectSlug}>Scroll to see more</Link>}
      </Div>
      <Box sx={{ textAlign: 'right' }}>
        <Link onClick={onClickAbout}>{!aboutVisible ? 'About Marcos' : 'Back'}</Link>
      </Box>
    </Grid>
  )
}

export default Footer
