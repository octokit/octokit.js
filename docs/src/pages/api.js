import Prism  from 'prismjs'

import marked from 'marked'
import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import apiStyles from '../components/api.module.css'

class ApiSubMenu extends Component {
  constructor(props) {
    super(props)
    this.showMenu = this.showMenu.bind(this)
    this.isActive = this.isActive.bind(this)
  }

  showMenu() {
    this.props.onUserInteraction(this.props.node.id)
  }

  isActive() {
    return this.props.isActive(this.props.node.id)
  }

  render() {
    return (
      <li key={this.props.node.id}>
        <Link to={`/api#${this.props.node.id}`} onClick={this.showMenu} onFocus={this.showMenu} className={this.isActive() ? apiStyles.activelink : ""}>{this.props.node.name}</Link>
        <ol className={this.isActive() ? "" : apiStyles.subhidden}>
          {this.props.node.methods.map((method) => {
            return <li key={method.id}>
              <Link to={`/api#${method.id}`}>{method.name}</Link>
            </li>
          })}
        </ol>
      </li>
    )
  }
}

class ApiMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
      activeSubMenu: null
    }
    this.toggleMenu       = this.toggleMenu.bind(this)
    this.setActiveSubMenu = this.setActiveSubMenu.bind(this)
    this.isActiveSubMenu  = this.isActiveSubMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  setActiveSubMenu(subMenu) {
    this.setState({
      activeSubMenu: subMenu
    })
  }

  isActiveSubMenu(subMenu) {
    return this.state.activeSubMenu === subMenu
  }

  render() {
    return (
      <nav className={apiStyles.nav}>
        <button type="button" onClick={this.toggleMenu}>Menu</button>
        <h1 className={this.state.menuActive ? "" : apiStyles.hidden}>API</h1>
        <ol className={this.state.menuActive ? "" : apiStyles.hidden}>
          {this.props.data.staticMethods.edges.map(({ node }) => {
            return <li key={node.id}>
              <Link to={`/api#octokit-${node.fields.idName}`}>{node.frontmatter.title}</Link>
            </li>
          })}
          {this.props.data.endpointScopes.edges.map(({ node }) => {
            return <ApiSubMenu node={node} onUserInteraction={this.setActiveSubMenu} isActive={this.isActiveSubMenu}></ApiSubMenu>
          })}
        </ol>
      </nav>
    )
  }
}

export default ({ data }) => (
  <Layout>
    <ApiMenu data={data}></ApiMenu>
    <main className={apiStyles.container}>
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
              <div class="gatsby-highlight" data-language="js">
                <pre class={'language-js'}><code class={'language-js'} dangerouslySetInnerHTML={{ __html: Prism.highlight(method.example, Prism.languages.javascript, 'javascript') }} ></code></pre>
              </div>
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
