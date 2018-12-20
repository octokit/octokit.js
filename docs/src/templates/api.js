import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ApiList from '../components/api-list'
import apiStyles from '../components/api.module.css'
import marked from 'marked'

export default ({ data }) => {
  const route = data.octokitRoute
  return (
    <Layout>
      <main className={apiStyles.container}>
        <p><Link to='/api'>API</Link> / <Link to={route.fields.scopeSlug}>{route.scope}</Link></p>
        <h1>{route.name}</h1>

        <div dangerouslySetInnerHTML={{ __html: marked(route.description) }} />
        <pre><code>{route.example}</code></pre>
      </main>
      <ApiList />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    octokitRoute(id:{eq:$id}) {
      name
      scope
      description
      example
      fields {
        scopeSlug
      }
    }
  }
`
