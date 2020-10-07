import React, { useState } from 'react'
import { Image as I } from 'theme-ui'
import VisibilitySensor from 'react-visibility-sensor'
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

  const [state, setState] = useState(false)

  const onChange = (isVisible: boolean) => {
    if (!state && isVisible) setState(isVisible)
  }

  return (
    <VisibilitySensor partialVisibility minTopValue={200} onChange={onChange}>
      <AnimImage
        animate={state ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}
        initial="hidden"
        src={src}
        variant="project"
      />
    </VisibilitySensor>
  )
}

export default Image
