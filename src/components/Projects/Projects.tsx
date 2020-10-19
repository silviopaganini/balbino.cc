import React from 'react'
import { useGlobalState } from 'state'
import { Flex } from 'theme-ui'
import ProjectItem from '../ProjectItem'

const Projects = () => {
  const [{ projects }] = useGlobalState('content')
  return (
    <Flex sx={{ minHeight: 'inherit', alignItems: 'center' }}>
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
  )
}

export default Projects
