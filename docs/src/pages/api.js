import marked from 'marked'
import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ApiList from '../components/api-list'
import apiStyles from '../components/api.module.css'

export default ({ data }) => (
  <Layout>
    <main className={apiStyles.container}>
      <h1>API</h1>
      {data.allOctokitScope.edges.map(({ node }) => {
        return <>
          <h2>{node.name}</h2>
          {node.endpoints.map(endpoint => {
            return <>
              <h3>{endpoint.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: marked(endpoint.description) }} />
              <h4>Parameters</h4>
              <table>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>required</th>
                    <th>description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.params.map(param => {
                    return <tr>
                      <td>{param.name}</td>
                      <td>{param.required ? 'yes' : 'no'}</td>
                      <td>{param.description}</td>
                    </tr>
                  })}
                </tbody>
              </table>
              <pre><code>{endpoint.example}</code></pre>
            </>
          })}
        </>
      })}
    </main>
    <ApiList />
  </Layout>
)

export const query = graphql`
  query {
    allOctokitScope {
      edges {
        node {
          id
          name
          endpoints {
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
