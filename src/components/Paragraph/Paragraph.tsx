import React, { useRef } from 'react'
import { Text } from 'theme-ui'
import { motion } from 'framer-motion'
import useVisible from 'hooks/useVisible'

type Props = {
  children: JSX.Element
}

const AnimBox = motion.custom(Text)

const Paragraph = ({ children }: Props) => {
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
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, ease: 'easeInOut' }}
      initial="hidden"
      variant="p"
    >
      {children}
    </AnimBox>
  )
}

export default Paragraph
