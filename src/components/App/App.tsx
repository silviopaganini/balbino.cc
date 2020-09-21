import React, { useEffect } from 'react'
import ScrollToDiscover from 'components/ScrollToDiscover'
import { query } from '../../gql'
import { Footer, Section, Header, Projects } from '../'
import { useQuery } from '@apollo/client'
import { useGlobalState } from 'state'
import Project from 'components/Project'

const App = () => {
  const { loading, error, data } = useQuery(query)
  const [, setProjects] = useGlobalState('projects')
  const [activeProject] = useGlobalState('activeProject')

  useEffect(() => {
    data?.projects && setProjects(data.projects)
  }, [data, setProjects])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Header />
      <Section>{activeProject ? <Project project={activeProject} /> : <Projects />}</Section>
      <ScrollToDiscover />
      <Footer />
    </>
  )
}

export default App
