import React, { Component } from "react"
import { Index } from "elasticlunr"
import IconSearch from "./icon-search"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      hasFocus: false,
    }
    this.reset = this.reset.bind(this)
  }

  render() {
    const classNames = [
      "search",
      (this.state.hasFocus || this.state.query) ? "active" : "inactive"
    ]
    return (
      <div className={classNames.join(" ")}>
        <label className="input">
          <IconSearch label="Search" />
          <input type="search" value={this.state.query} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.search} placeholder="search" />
        </label>
        <ul onClick={this.reset} className="results">
          {this.state.query && this.state.results.length === 0 ? (<li>No results found.</li>) : ""}

          {this.state.results.map(page => {
            if (page.type === 'API method') {
              return <li key={page.id}>
                <a href={page.slug}>
                  <strong>{page.name}</strong> <small>(<code>{page.route}</code>)</small><br />
                  <code>octokit.{page.method}</code>
                </a>
              </li>
            }

            if (page.type === 'API') {
              return <li key={page.id}>
                <a href={page.slug}>
                  <strong>{page.title}</strong> (API)
                </a>
              </li>
            }

            return <li key={page.id}>
              <a href={page.slug}>
                <strong>{page.title}</strong> (Guide)
              </a>
            </li>
          })}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  onFocus = evt => {
    this.setState({hasFocus: true})
  }

  onBlur = evt => {
    this.setState({hasFocus: false})
  }

  search = evt => {
    const query = evt.target.value

    const searchOptions = {
      expand: true,
      fields: {
        title: {boost: 3},
        name: {boost: 2 },
        scope: {boost: 2 },
        route: {boost: 1 },
        method: {boost: 1 }
      }
    }

    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, searchOptions)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }

  reset = evt => {
    this.setState({
      query: '',
      results: []
    })
  }
}
