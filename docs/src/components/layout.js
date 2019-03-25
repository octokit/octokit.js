import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import layoutStyles from './layout.module.css'
import './layout.css'
import Search from "./search"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearchQuery: false
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(query) {
    this.setState({
      hasSearchQuery: !!query.trim()
    })
  }

  render() {
    return <div>
      <header className={layoutStyles.header}>
        <h3 style={{ display: `inline` }}>octokit/rest.js</h3>

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
      </header>

      <div className={this.state.hasSearchQuery ? [layoutStyles.container, layoutStyles.hidden].join(' ') : layoutStyles.container}>
        {this.props.children}
      </div>
    </div>
  }
}


export default ({ children }) => (
  <Layout children={children}></Layout>
)
