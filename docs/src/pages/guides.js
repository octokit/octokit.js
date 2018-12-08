import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import GuidesList from '../components/guides-list'

export default ({ data }) => (
  <Layout>
    <main>
      <h1>Guides</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h2>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </main>
    <GuidesList />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
