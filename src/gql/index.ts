import { gql } from '@apollo/client'

export const query = gql`
  {
    projects {
      title
      content
    }
  }
`
