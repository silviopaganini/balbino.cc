import React from 'react'
import { useGlobalState } from 'state'
import { Flex } from 'theme-ui'
import ProjectItem from '../ProjectItem'

const Projects = () => {
  const [projects] = useGlobalState('projects')
  return (
    <Flex sx={{ minHeight: 'inherit', alignItems: 'center' }}>
      <Flex
        sx={{
          maxHeight: '40vh',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {projects.map((m, index) => (
          <ProjectItem align={index % 2 !== 0 ? 'right' : 'left'} key={index} project={m} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Projects
