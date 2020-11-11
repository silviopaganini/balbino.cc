import { motion } from 'framer-motion'
import React from 'react'
import { Box } from 'theme-ui'

const Dot = motion.custom(Box)

const Loading = () => {
  const dots = new Array(3).fill(null).map((_a, index) => index)
  return (
    <>
      {dots.map((_d, index) => (
        <Dot
          key={index}
          sx={{
            borderRadius: '100%',
            bg: 'black',
            width: '5px',
            height: '5px',
            mr: 2,
            transform: `translateY(${index * 50}%)`,
          }}
          animate={{ y: '100%' }}
          transition={{
            repeatType: 'reverse',
            ease: 'easeInOut',
            duration: 0.75,
            delay: index * 0.5,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  )
}

export default Loading
