import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import layoutStyles from './layout.module.css'
import './layout.css'
import Search from "./search"
import IconMenu from "./icon-menu"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearchQuery: false,
      menuActive: false,
    }
    this.onSearch   = this.onSearch.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  onSearch(query) {
    this.setState({
      hasSearchQuery: !!query.trim()
    })
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  render() {
    return <div>
      <header className={layoutStyles.header}>
        <h1>octokit/rest.js</h1>

        <StaticQuery
          query={graphql`
            query SearchIndexQuery {
              siteSearchIndex {
                index
              }
            }
          `}
          render={data => (
            <Search onSearch={this.onSearch} searchIndex={data.siteSearchIndex.index} />
          )}
        />
        <button type="button" onClick={this.toggleMenu}>
          <IconMenu label="Menu" />
        </button>
      </header>

      <div className={layoutStyles.container}>
        {this.props.children}
      </div>
    </div>
  }
}


export default ({ children }) => (
  <Layout children={children}></Layout>
)
