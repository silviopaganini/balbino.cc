import React, { useState } from 'react'
import { Heading, Box, Flex } from 'theme-ui'
import { motion } from 'framer-motion'
import { useGlobalState } from 'state'
import { Project } from 'types'
import { Link } from 'components'

type Align = 'left' | 'right'

type Props = {
  project: Project
  align?: Align
  index: number
}

type PropsIcon = {
  align?: Align
}

const IconHover = ({ align }: PropsIcon) => (
  <Box
    sx={{
      transform: align === 'left' ? null : 'rotate(180deg)',
      width: ['15px', '15px', '47px'],
      height: ['17.625px', '17.625px', '40px'],
      '@media screen and (max-height: 600px)': {
        width: '15px',
        height: '17.625px',
      },
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 47 40" fill="none">
      <path
        d="M27.135 39.222c0-10.763 8.725-19.488 19.488-19.488M46.623 19.488C35.86 19.488 27.135 10.763 27.135 0M45.883 19.734H0"
        stroke="#C1C4B7"
        strokeWidth={5}
      />
    </svg>
  </Box>
)

const AnimHeading = motion.custom(Heading)

const ProjectItem = ({ index, project, align = 'left' }: Props) => {
  const [state, setState] = useState({ hover: false })
  const [uiState, setUiState] = useGlobalState('ui')
  const onMouseOver = () => {
    setState({ ...state, hover: true })
    setUiState({ ...uiState, showCircle: false })
  }
  const onMouseOut = () => {
    setState({ ...state, hover: false })
    setUiState({ ...uiState, showCircle: true })
  }

  const variants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
    },
  }

  const moveAmount = window.innerHeight > 600 ? 60 : 18

  return (
    <Flex
      sx={{
        gridColumn: [1, 1, index % 2 === 0 ? 1 : 2],
        position: 'relative',
      }}
    >
      {state.hover && (
        <Box
          sx={{
            position: 'absolute',
            [align]: 0,
            top: [0, 0, '6px'],
            '@media screen and (max-height: 600px)': {
              top: '2px',
            },
          }}
        >
          <IconHover align={align} />
        </Box>
      )}

      <Link to={project.slug}>
        <AnimHeading
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          animate={{ x: state.hover ? (align === 'left' ? moveAmount : -moveAmount) : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          as="h2"
          sx={{
            textAlign: ['left', 'left', align],
            color: state.hover ? 'link' : 'text',
            overflowY: 'hidden',
          }}
          variant="projectItem"
        >
          <motion.div
            variants={variants}
            initial={'initial'}
            animate="visible"
            transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
          >
            {project.title}
          </motion.div>
        </AnimHeading>
      </Link>
    </Flex>
  )
}

export default ProjectItem
