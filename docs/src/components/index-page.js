import React, { Component } from "react"

import { graphql, StaticQuery } from 'gatsby'

import layoutStyles from '../components/layout.module.css'
import '../components/layout.css'

import Api from "../components/api"
import Search from "../components/search"
import IconMenu from "../components/icon-menu"

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearchQuery: false,
      menuActive: false,
    }
    this.onSearch   = this.onSearch.bind(this)
    this.onToggleMenu = this.onToggleMenu.bind(this)
    this.isMenuActive = this.isMenuActive.bind(this)
  }

  onSearch(query) {
    this.setState({
      hasSearchQuery: !!query.trim()
    })
  }

  onToggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  isMenuActive() {
    return this.state.menuActive
  }

  render() {
    const data = this.props.data
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
        <button type="button" onClick={this.onToggleMenu}>
          <IconMenu label="Menu" />
        </button>
      </header>

      <div className={layoutStyles.container}>
        <Api data={data} isMenuActive={this.isMenuActive}></Api>
      </div>
    </div>
  }
}
