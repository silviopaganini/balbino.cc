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
  const [aboutVisible, setAboutVisible] = useGlobalState('about')
  const [mode, setMode] = useColorMode()

  useEffect(() => {
    let projects = []
    if (data?.projects) {
      projects = [...data.projects].sort((a: any, b: any) => (b.order || 0) - (a.order || 0))
    }
    data && setContent({ pages: data.pages, projects })
    setMode('default')
  }, [data, setContent, setMode])

  if (loading || content.projects.length < 1) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const aboutPage = content.pages.find(p => p.slug === 'about')
  const onClickAbout = () => {
    setTimeout(
      () => {
        setMode(mode !== 'dark' ? 'dark' : 'default')
      },
      mode === 'dark' ? 300 : 0
    )
    setAboutVisible(!aboutVisible)
  }

  return (
    <>
      <Header />
      <Section id="home">
        <Projects />
      </Section>
      {content.projects.length > 0 &&
        content.projects.map((p, index) => (
          <Section as="article" id={p.slug} key={index}>
            <Project project={p} />
          </Section>
        ))}
      {aboutPage && <Page visible={aboutVisible} page={aboutPage} />}
      <ScrollToDiscover />
      <Footer
        firstProjectSlug={content.projects.length > 0 ? content.projects[0].slug : undefined}
        onClickAbout={onClickAbout}
      />
    </>
  )
}

export default App
