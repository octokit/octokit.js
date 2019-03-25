import Prism  from 'prismjs'

import marked from 'marked'
import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import apiStyles from '../components/api.module.css'

class EndPoint extends Component {
  constructor(props) {
    super(props)
    this.headlineRef = React.createRef()
    this.onIntersection = this.onIntersection.bind(this)
  }

  componentDidMount() {

    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    const observer = new IntersectionObserver(this.onIntersection, {
      threshold: 1.0
    })
    const target = this.headlineRef.current

    observer.observe(target)

    // console.log({observer: observer, target: target})
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log({intersecting: this.props.node.id})
        this.props.onVisible(this.props.node.id)
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 id={this.props.node.id} ref={this.headlineRef}>{this.props.node.name}</h2>
        {this.props.node.methods.map(method => {
          return <React.Fragment key={method.id}>
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
                    return <tr key={param.name}>
                      <td>{param.name}</td>
                      <td>{param.required ? 'yes' : 'no'}</td>
                      <td>{param.description}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            <div className="gatsby-highlight" data-language="js">
              <pre className="language-js"><code className="language-js" dangerouslySetInnerHTML={{ __html: Prism.highlight(method.example, Prism.languages.javascript, 'javascript') }} ></code></pre>
            </div>
          </React.Fragment>
        })}
      </React.Fragment>
    )
  }
}



class ApiSubMenu extends Component {
  constructor(props) {
    super(props)
    this.onUserInteraction = this.onUserInteraction.bind(this)
    this.isActive = this.isActive.bind(this)
  }

  onUserInteraction() {
    this.props.onUserInteraction(this.props.node.id)
  }

  isActive() {
    return this.props.isActive(this.props.node.id)
  }

  render() {
    return (
      <li key={this.props.node.id}>
        <a href={`#${this.props.node.id}`} onClick={this.onUserInteraction} className={this.isActive() ? apiStyles.activelink : ""}>{this.props.node.name}</a>
        <ol className={this.isActive() ? "" : apiStyles.subhidden}>
          {this.props.node.methods.map((method) => {
            return <li key={method.id}>
              <a href={`#${method.id}`}>{method.name}</a>
            </li>
          })}
        </ol>
      </li>
    )
  }
}

class Api extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      menuActive: false,
      activeSubMenu: null
    }
    this.toggleMenu        = this.toggleMenu.bind(this)
    this.setActiveSubMenu  = this.setActiveSubMenu.bind(this)
    this.isActiveSubMenu   = this.isActiveSubMenu.bind(this)
    this.onVisibleEndPoint = this.onVisibleEndPoint.bind(this)

    this.subMenus = []
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  setActiveSubMenu(id) {
    // if (this.state.activeSubMenu === id) {
    //   this.setState({
    //     activeSubMenu: null
    //   })
    // } else {
      this.setState({
        activeSubMenu: id
      })
    // }
  }

  isActiveSubMenu(id) {
    return this.state.activeSubMenu === id
  }

  onVisibleEndPoint(id) {
    this.setActiveSubMenu(id)
  }

  render() {
    return (
      <React.Fragment>
        <nav className={apiStyles.nav}>
          <button type="button" onClick={this.toggleMenu}>Menu</button>
          <h1 className={this.state.menuActive ? "" : apiStyles.hidden}>API</h1>
          <ol className={this.state.menuActive ? "" : apiStyles.hidden}>
            {this.props.data.staticMethods.edges.map(({ node }) => {
              return <li key={node.id}>
                <a href={`#octokit-${node.fields.idName}`}>{node.frontmatter.title}</a>
              </li>
            })}
            {this.props.data.endpointScopes.edges.map(({ node }) => {
              return <ApiSubMenu key={node.id} node={node} onUserInteraction={this.setActiveSubMenu} isActive={this.isActiveSubMenu}></ApiSubMenu>
            })}
          </ol>
        </nav>
        <main className={apiStyles.container}>
          {this.props.data.staticMethods.edges.map(({ node }) => {
            return <React.Fragment key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </React.Fragment>
          })}
    
          {this.props.data.endpointScopes.edges.map(({ node }) => {
            return <EndPoint key={node.id} node={node} onVisible={this.onVisibleEndPoint}></EndPoint>
          })}
        </main>
      </React.Fragment>
    )
  }
}

export default ({ data }) => (
  <Layout>
    <Api data={data}></Api>
  </Layout>
)

export const query = graphql`
  query {
    staticMethods: allMarkdownRemark {
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
