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
      threshold: 0,
      rootMargin: "0% 0% -90% 0%"
    })
    const target = this.headlineRef.current

    observer.observe(target)
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(`EndPoint.entry.intersectionRatio: ${entry.intersectionRatio}`)
        if (entry.intersectionRatio >= 0.1) {
          // console.log(`EndPoint.onIntersection ${this.props.method.id}`)
          this.props.onVisible(this.props.method.id)
        }
      }
    })
  }

  render() {
    const method = this.props.method
    return (
      <React.Fragment>
        <h3 id={method.id} ref={this.headlineRef}>{method.name}</h3>
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
    )
  }
}

class EndPointGroup extends Component {
  constructor(props) {
    super(props)
    this.headlineRef = React.createRef()
    this.onIntersection    = this.onIntersection.bind(this)
    this.onVisibleEndPoint = this.onVisibleEndPoint.bind(this)
  }

  componentDidMount() {

    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    const observer = new IntersectionObserver(this.onIntersection, {
      threshold: 0,
      rootMargin: "0% 0% -90% 0%"
    })
    const target = this.headlineRef.current

    observer.observe(target)
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(`EndPointGroup.entry.intersectionRatio: ${entry.intersectionRatio}`)
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
        console.log(`isAbove ${isAbove}`)
        console.log(`entry.boundingClientRect.y ${entry.boundingClientRect.y}`)
        console.log(`entry.rootBounds.y ${entry.rootBounds.y}`)



        if (entry.intersectionRatio >= 0.1) {
          console.log(`EndPointGroup.onIntersection ${this.props.node.id}`)
          this.props.onVisibleEndPointGroup(this.props.node.id)
        }
      }
    })
  }

  onVisibleEndPoint(id) {
    this.props.onVisibleEndPoint(id)
  }

  render() {
    return (
      <React.Fragment>
        <h2 id={this.props.node.id} ref={this.headlineRef}>{this.props.node.name}</h2>
        {this.props.node.methods.map(method => {
          return <EndPoint key={method.id} method={method} onVisible={this.onVisibleEndPoint}></EndPoint>
        })}
      </React.Fragment>
    )
  }
}



class ApiSubMenu extends Component {
  constructor(props) {
    super(props)
    this.onUserInteraction       = this.onUserInteraction.bind(this)
    this.isActive                = this.isActive.bind(this)
    this.getPrimaryLinkClassName = this.getPrimaryLinkClassName.bind(this)
  }

  onUserInteraction() {
    this.props.onUserInteraction(this.props.node.id)
  }

  isActive() {
    return this.props.isActive(this.props.node.id)
  }

  getPrimaryLinkClassName() {
    // console.log(`ApiSubMenu.getPrimaryLinkClassName / this.props.activeMenuItem: ${this.props.activeMenuItem} / this.props.node.id: ${this.props.node.id}`)
    return [
      this.props.getActiveMenuItem() === this.props.node.id ? apiStyles.activemenuitem : "",
      this.isActive() ? apiStyles.activelink : ""
    ].filter(Boolean).join(" ")
  }

  render() {
    return (
      <li key={this.props.node.id}>
        <a href={`#${this.props.node.id}`}
          onClick={this.onUserInteraction}
          className={this.getPrimaryLinkClassName()}>{this.props.node.name}</a>
        <ol className={this.isActive() ? "" : apiStyles.subhidden}>
          {this.props.node.methods.map((method) => {
            return <li key={method.id}>
              <a href={`#${method.id}`} className={this.props.getActiveMenuItem() === method.id ? apiStyles.activemenuitem : ""}>{method.name}</a>
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
      activeSubMenu: null,
      activeMenuItem: null
    }
    this.toggleMenu             = this.toggleMenu.bind(this)
    this.setActiveSubMenu       = this.setActiveSubMenu.bind(this)
    this.isActiveSubMenu        = this.isActiveSubMenu.bind(this)
    this.getActiveMenuItem      = this.getActiveMenuItem.bind(this)
    this.onVisibleEndPoint      = this.onVisibleEndPoint.bind(this)
    this.onVisibleEndPointGroup = this.onVisibleEndPointGroup.bind(this)

    this.subMenus = []
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  setActiveSubMenu(id) {
    this.setState({
      activeSubMenu: id
    })
  }

  setActiveMenuItem(id) {
    this.setState({
      activeMenuItem: id
    })
  }

  getActiveMenuItem() {
    return this.state.activeMenuItem
  }

  isActiveSubMenu(id) {
    return this.state.activeSubMenu === id
  }

  onVisibleEndPointGroup(id) {
    // console.log(`Api.onVisibleEndPointGroup ${id}`)
    this.setActiveSubMenu(id)
    this.setActiveMenuItem(id)
  }

  onVisibleEndPoint(id) {
    // console.log(`Api.onVisibleEndPoint ${id}`)
    this.setActiveMenuItem(id)
  }

  render() {
    return (
      <React.Fragment>
        <nav className={apiStyles.nav}>
          <button type="button" onClick={this.toggleMenu}>Menu</button>
          <ol className={this.state.menuActive ? "" : apiStyles.hidden}>
            {this.props.data.staticMethods.edges.map(({ node }) => {
              return <li key={node.id}>
                <a href={`#octokit-${node.fields.idName}`}>{node.frontmatter.title}</a>
              </li>
            })}
            {this.props.data.endpointScopes.edges.map(({ node }) => {
              return <ApiSubMenu
                        key={node.id} node={node}
                        onUserInteraction={this.setActiveSubMenu}
                        isActive={this.isActiveSubMenu}
                        getActiveMenuItem={this.getActiveMenuItem}></ApiSubMenu>
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
            return <EndPointGroup
                      key={node.id}
                      node={node}
                      onVisibleEndPointGroup={this.onVisibleEndPointGroup}
                      onVisibleEndPoint={this.onVisibleEndPoint}>
                   </EndPointGroup>
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
