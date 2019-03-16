import React from 'react'
import { StaticQuery, Link } from 'gatsby'

import layoutStyles from './layout.module.css'
import './layout.css'
import Search from "./search"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={layoutStyles.container}>
    <header className={layoutStyles.header}>
      <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>octokit.js</h3>
      </Link>

      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <Search searchIndex={data.siteSearchIndex.index} />
        )}
      />

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/guides/'>Guides</ListLink>
        <ListLink to='/api/'>API</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
