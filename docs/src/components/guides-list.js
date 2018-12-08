import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <h1>Guides</h1>
        <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
        </ol>
      </nav>
    )}
  />
)

