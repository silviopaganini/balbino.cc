import React from 'react'
import Markdown from 'markdown-to-jsx'

import { Page as PageType } from 'types'
import { Box, Flex, Image } from 'theme-ui'
import { Link, Button } from 'components'

type Props = {
  page: PageType
}

const Page = ({ page }: Props) => (
  <Flex sx={{ minHeight: 'inherit', alignItems: 'center' }}>
    <Flex
      sx={{
        maxHeight: '40vh',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ maxWidth: 765 }}>
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
                props: {
                  variant: 'body',
                },
              },
              button: {
                component: Button,
                props: {
                  variant: 'primary',
                },
              },
            },
          }}
        >
          {page.body}
        </Markdown>
      </Box>
    </Flex>
  </Flex>
)

export default Page
