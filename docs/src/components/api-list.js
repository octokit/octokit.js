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
              endpoints {
                id
                name
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
              <details>
                <summary>
                  <Link to={`/api#${node.id}`}>{node.name}</Link>
                </summary>
                <ol>
                  {node.endpoints.map((endpoint) => {
                    return <li key={endpoint.id}>
                      <Link to={`/api#${endpoint.id}`}>{endpoint.name}</Link>
                    </li>
                  })}
                </ol>
              </details>
            </li>
          })}
        </ol>
      </nav>
    }}
  />
)
