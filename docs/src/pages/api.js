import marked from 'marked'
import React from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import apiStyles from '../components/api.module.css'

export default ({ data }) => (
  <Layout>
    <main className={apiStyles.container}>
      <h1>API</h1>
      <nav>
        <details>
          <summary>
            <h1>Menu</h1>
          </summary>
          <ol>
            {data.staticMethods.edges.map(({ node }) => {
              return <li key={node.id}>
                <Link to={`/api#octokit-${node.fields.idName}`}>{node.frontmatter.title}</Link>
              </li>
            })}
            {data.endpointScopes.edges.map(({ node }) => {
              return <li key={node.id}>
                <details>
                  <summary>
                    <Link to={`/api#${node.id}`}>{node.name}</Link>
                  </summary>
                  <ol>
                    {node.methods.map((method) => {
                      return <li key={method.id}>
                        <Link to={`/api#${method.id}`}>{method.name}</Link>
                      </li>
                    })}
                  </ol>
                </details>
              </li>
            })}
          </ol>
        </details>
      </nav>
      {data.staticMethods.edges.map(({ node }) => {
        return <>
          <h2>{node.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </>
      })}
      {data.endpointScopes.edges.map(({ node }) => {
        return <>
          <h2 id={node.id}>{node.name}</h2>
          {node.methods.map(method => {
            return <>
              <h3 id={method.id}>{method.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: marked(method.description) }} />
              <h4>Parameters</h4>
              <div className={apiStyles.table}>
                <table>
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>required</th>
                      <th>description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {method.params.map(param => {
                      return <tr>
                        <td>{param.name}</td>
                        <td>{param.required ? 'yes' : 'no'}</td>
                        <td>{param.description}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
              <pre><code>{method.example}</code></pre>
            </>
          })}
        </>
      })}
    </main>
  </Layout>
)

export const query = graphql`
  query {
    staticMethods: allMarkdownRemark(
      filter: { fields:{slug: { regex: "/^/api/" } }}
    ) {
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
