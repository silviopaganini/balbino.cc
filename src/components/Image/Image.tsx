import React, { useRef } from 'react'
import { Box, Image as I } from 'theme-ui'
import { AnimatePresence, motion } from 'framer-motion'
import useVisible from 'hooks/useVisible'

type Props = {
  src: string
}

const AnimBox = motion.custom(Box)

const Image = ({ src, ...props }: Props) => {
  const node = useRef(null)
  const isVisible = useVisible(node)

  //@ts-ignore
  const isHeader = props['data-type'] || false

  return (
    <Box
      ref={node}
      sx={{
        width: '100%',
        pt: isHeader ? '28.125%' : '56.25%',
        position: 'relative',
        my: isHeader ? 0 : 3,
      }}
    >
      {isVisible && (
        <AnimatePresence>
          <AnimBox
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            initial={{
              opacity: 0,
              y: '50px',
            }}
          >
            <I src={src} variant="project" />
          </AnimBox>
        </AnimatePresence>
      )}
    </Box>
  )
}

export default Image
