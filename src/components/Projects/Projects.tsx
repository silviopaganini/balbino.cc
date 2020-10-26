import React from 'react'
import { useGlobalState } from 'state'
import { Divider, Flex, Heading } from 'theme-ui'
import ProjectItem from '../ProjectItem'

const Projects = () => {
  const [{ projects }] = useGlobalState('content')
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: 'inherit',
        justifyContent: 'center',
      }}
    >
      <Heading
        sx={{ maxWidth: 1200, textAlign: 'left', display: ['none', 'none', 'block'] }}
        as="h1"
      >
        Visual designer and Art Director from São Paulo based in London.
      </Heading>
      <Divider sx={{ display: ['none', 'none', 'block'] }} />
      <Flex sx={{ minHeight: '100%', alignItems: 'center' }}>
        <Flex
          sx={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {projects.map((m, index) => (
            <ProjectItem
              index={index}
              align={index % 2 !== 0 ? 'right' : 'left'}
              key={index}
              project={m}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Projects
