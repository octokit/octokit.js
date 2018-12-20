import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allOctokitScope {
          edges {
            node {
              id
              name
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      return <nav>
        <h1>API</h1>
        <ol>
          {data.allOctokitScope.edges.map(({ node }) => {
            return <li key={node.id}>
              <Link to={node.fields.slug}>{node.name}</Link>
            </li>
          })}
        </ol>
      </nav>
    }}
  />
)
