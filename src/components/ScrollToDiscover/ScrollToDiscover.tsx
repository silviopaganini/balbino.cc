import React, { useRef } from 'react'
import { Box } from 'theme-ui'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'

const AnimBox = motion.custom(Box)

const ScrollToDiscover = () => {
  const ref = useRef(null)
  const mouse = useMouse(document.body, {})

  const SIZE = 10

  return (
    <Box
      ref={ref}
      sx={{
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100000,
      }}
    >
      <AnimBox
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          bg: '#333',
          width: SIZE,
          height: SIZE,
          borderRadius: '100%',
          backgroundBlendMode: 'exclusion',
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.1,
        }}
        animate={{
          opacity: mouse.x ? 1 : 0,
          x: (mouse.clientX || window.innerWidth / 2) - SIZE / 2,
          y: (mouse.clientY || window.innerHeight / 2) - SIZE / 2,
        }}
      >
        {/* <AnimBox
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            width: SIZE,
            height: SIZE,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
        >
          
        </AnimBox>
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Scroll to discover more
        </Box> */}
      </AnimBox>
    </Box>
  )
}

export default ScrollToDiscover
