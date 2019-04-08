import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

import Api from "../components/api"

export default ({ data }) => (
  <Layout>
    <Api data={data}></Api>
  </Layout>
)

export const query = graphql`
  query {
    staticMethods: allMarkdownRemark {
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
