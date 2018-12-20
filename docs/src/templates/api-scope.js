import _ from 'lodash'
import React from 'react'
import { Link, graphql } from 'gatsby'
import marked from 'marked'

import Layout from '../components/layout'
import ApiList from '../components/api-list'
import apiStyles from '../components/api.module.css'

export default ({ data }) => {
  const scope = data.octokitScope
  const routes = _.map(data.allOctokitRoute.edges, 'node')
  return (
    <Layout>
      <main className={apiStyles.container}>
        <p><Link to='/api'>API</Link> /</p>
        <h1>{scope.name}</h1>
        {routes.map(route => (
          <>
            <h3><Link to={route.fields.slug}>{route.name}</Link></h3>
            <pre><code>{route.example}</code></pre>

            <div dangerouslySetInnerHTML={{ __html: marked(route.description) }} />
          </>
        ))}
      </main>
      <ApiList />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $scope: String!) {
    octokitScope(id:{eq:$id}) {
      name
    }
    allOctokitRoute(filter:{scope:{eq:$scope}}) {
      edges {
        node {
          id
          scope
          idName
          name
          description
          example
          params {
            name
            required
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
