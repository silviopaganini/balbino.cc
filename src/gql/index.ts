import { gql } from '@apollo/client'

export const query = gql`
  {
    pages {
      slug
      title
      body
    }
    projects(orderBy: order_DESC) {
      slug
      title
      order
      content
    }
  }
`
