import React from 'react'
import Markdown from 'markdown-to-jsx'

import { Page as PageType } from 'types'
import { Box, Flex, Image } from 'theme-ui'
import { Link, Button, Container, Paragraph } from 'components'
import { motion } from 'framer-motion'

type Props = {
  page: PageType
  visible: boolean
}

const AnimPage = motion.custom(Flex)

const Page = ({ page, visible }: Props) => {
  if (!page.body) return null

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return (
    <AnimPage
      variants={variants}
      transition={{ delay: visible ? 0 : 0.3, duration: 0.5, ease: 'easeOut' }}
      animate={visible ? 'visible' : 'hidden'}
      initial="hidden"
      sx={{
        minHeight: 'inherit',
        alignItems: 'center',
        pointerEvents: visible ? 'visible' : 'none',
        bg: 'black',
        width: '100%',
        height: '100%',
        px: 6,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <AnimPage
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        variants={variants}
        transition={{ delay: !visible ? 0 : 0.3, duration: 0.5, ease: 'easeOut' }}
      >
        <Box sx={{ maxWidth: 1280 }}>
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
                div: {
                  component: Container,
                },
                p: {
                  component: Paragraph,
                },
              },
            }}
          >
            {page.body}
          </Markdown>
        </Box>
      </AnimPage>
    </AnimPage>
  )
}

export default Page
