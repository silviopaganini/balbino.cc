import React from 'react'
import { useGlobalState } from 'state'
import { Divider, Flex, Grid, Heading } from 'theme-ui'
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
        sx={{ maxWidth: 1050, textAlign: 'left', display: ['none', 'none', 'block'] }}
        as="h1"
      >
        Visual Designer and Art Director from São Paulo based in London.
      </Heading>
      <Divider sx={{ display: ['none', 'none', 'block'] }} />
      <Flex sx={{ minHeight: '100%', alignItems: 'center' }}>
        <Grid
          gap={0}
          sx={{
            width: '100%',
            gridTemplateColumns: ['100%', '100%', '45% 55%'],
          }}
        >
          {projects.map((m, index) => (
            <ProjectItem index={index} key={index} project={m} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Projects
