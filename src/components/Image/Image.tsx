import React from 'react'
import { Image as I } from 'theme-ui'
import LazyLoad from 'react-lazyload'

import { motion } from 'framer-motion'

type Props = {
  src: string
}

const AnimImage = motion.custom(I)

const Image = ({ src }: Props) => {
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

  return (
    <LazyLoad once height="100vh">
      <AnimImage
        animate={'visible'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}
        initial="hidden"
        src={src}
        variant="project"
      />
    </LazyLoad>
  )
}

export default Image
