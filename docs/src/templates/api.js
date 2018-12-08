import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ApiList from '../components/api-list'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <main>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <ApiList />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
