import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import ApiList from '../components/api-list'

export default ({ data }) => (
  <Layout>
    <main>
      <h1>API</h1>
      <ol>
        {data.allOctokitRoute.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.example}</Link>
            <br />{node.name}
          </li>
        ))}
      </ol>
    </main>
    <ApiList />
  </Layout>
)

export const query = graphql`
  query {
    allOctokitRoute {
      edges {
        node {
          id
          name
          example
          fields {
            slug
          }
        }
      }
    }
  }
`
