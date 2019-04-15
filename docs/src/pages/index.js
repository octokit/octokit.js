import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

import IndexPage from "../components/index-page"

export default ({ data }) => (
  <Layout>
    <IndexPage data={data} />
  </Layout>
)

export const query = graphql`
  query {
    staticMethods: allMarkdownRemark(sort:{ fields: fields___slug }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
          fields {
            idName
          }
        }
      }
    }
    endpointScopes: allOctokitApiGroup {
      edges {
        node {
          id
          name
          methods {
            id
            name
            description
            example
            params {
              name
              required
              description
            }
          }
        }
      }
    }
  }
`
