import React, { useState } from 'react'
import { Box } from 'theme-ui'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'

type Props = {
  children: JSX.Element
}

const AnimBox = motion.custom(Box)

const Container = ({ children }: Props) => {
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
      <AnimBox
        animate={state ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}
        initial="hidden"
      >
        {children}
      </AnimBox>
    </VisibilitySensor>
  )
}

export default Container
