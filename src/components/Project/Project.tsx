import React from 'react'
import Markdown from 'markdown-to-jsx'

import { Project as ProjectType } from 'types'
import { Image } from 'theme-ui'
import { Link } from 'components'

type Props = {
  project: ProjectType
}

const Project = ({ project }: Props) => (
  <Markdown
    options={{
      overrides: {
        img: {
          component: Image,
          props: {
            variant: 'project',
          },
        },
        a: {
          component: Link,
        },
      },
    }}
  >
    {project.content}
  </Markdown>
)

export default Project
