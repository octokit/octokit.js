import React, { Component } from 'react'
import { StaticQuery, Link } from 'gatsby'

import layoutStyles from './layout.module.css'
import './layout.css'
import Search from "./search"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
        <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>octokit/rest.js</h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/guides/'>Guides</ListLink>
          <ListLink to='/api/'>API</ListLink>
        </ul>

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
