import React, { useRef } from 'react'
import { Box, SxStyleProp } from 'theme-ui'
import { motion } from 'framer-motion'
import useVisible from 'hooks/useVisible'

type Props = {
  children: JSX.Element[]
  as?: React.ElementType
  sx?: SxStyleProp
}

const AnimBox = motion.custom(Box)

const Container = ({ children, sx, as = 'div' }: Props) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: '50px',
    },
    visible: {
      opacity: 1,
      y: '0',
    },
  }

  const node = useRef(null)
  const isVisible = useVisible(node)

  return (
    <AnimBox
      ref={node}
      as={as}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, ease: 'easeInOut' }}
      initial="hidden"
      sx={{ position: 'relative', ...sx }}
    >
      {children}
    </AnimBox>
  )
}

export default Container
