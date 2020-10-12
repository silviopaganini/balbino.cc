import React from 'react'
import Markdown from 'markdown-to-jsx'

import { Project as ProjectType } from 'types'
import { Container, Paragraph, Link, Image } from 'components'

type Props = {
  project: ProjectType
}

const Project = ({ project }: Props) => {
  if (!project.content || project.content === '') return null

  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: Image,
          },
          a: {
            component: Link,
          },
          div: {
            component: Container,
          },
          span: {
            component: Container,
            props: {
              as: 'span',
              sx: {
                padding: '56.25% 0 0 0',
                position: 'relative',
                display: 'block',
              },
            },
          },
          p: {
            component: Paragraph,
          },
        },
      }}
    >
      {project.content}
    </Markdown>
  )
}

export default Project
