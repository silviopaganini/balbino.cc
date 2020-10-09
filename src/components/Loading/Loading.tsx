import { motion } from 'framer-motion'
import React from 'react'
import { Flex, Box } from 'theme-ui'

const Dot = motion.custom(Box)

const Loading = () => {
  const dots = new Array(3).fill(null).map((_a, index) => index)
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </Flex>
  )
}

export default Loading
