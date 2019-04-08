import React, { Component } from "react"
import apiStyles from './api.module.css'
import ApiSubMenu from "../components/api-sub-menu"
import EndPointGroup from "../components/end-point-group"

export default class Api extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeSubMenu: null,
      activeMenuItem: null
    }
    this.setActiveSubMenu       = this.setActiveSubMenu.bind(this)
    this.isActiveSubMenu        = this.isActiveSubMenu.bind(this)
    this.getActiveMenuItem      = this.getActiveMenuItem.bind(this)
    this.onVisibleEndPoint      = this.onVisibleEndPoint.bind(this)
    this.onVisibleEndPointGroup = this.onVisibleEndPointGroup.bind(this)

    this.subMenus = []
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
          <ol className={this.props.menuActive ? "" : apiStyles.hidden}>
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
