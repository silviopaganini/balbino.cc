import { gql } from '@apollo/client'

export const query = gql`
  {
    pages {
      slug
      title
      body
    }
    projects {
      slug
      title
      content
    }
  }
`
