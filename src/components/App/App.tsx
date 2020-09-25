import React, { useEffect } from 'react'
import { ScrollToDiscover, Project } from 'components'
import { useQuery } from '@apollo/client'
import { useGlobalState } from 'state'
import { query } from '../../gql'
import { Footer, Section, Header, Projects, Page } from '../'
import { useColorMode } from 'theme-ui'

const App = () => {
  const { loading, error, data } = useQuery(query)
  const [content, setContent] = useGlobalState('content')
  const [, setMode] = useColorMode()

  useEffect(() => {
    data && setContent(data)
    setMode('default')
  }, [data, setContent, setMode])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const aboutPage = content.pages.find(p => p.slug === 'about')
  const onClickAbout = () => {
    setMode('dark')
  }

  return (
    <>
      <Header />
      <Section id="home">
        <Projects />
      </Section>
      {content.projects.map((p, index) => (
        <Section as="article" id={p.slug} key={index}>
          <Project project={p} />
        </Section>
      ))}
      {aboutPage && (
        <Section id="about" as="section">
          <Page page={aboutPage} />
        </Section>
      )}
      <ScrollToDiscover />
      <Footer onClickAbout={onClickAbout} />
    </>
  )
}

export default App
