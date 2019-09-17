import React, { Component } from "react";
import debounce from "lodash/debounce";
import { Index } from "elasticlunr";
import IconSearch from "./icon-search";
import SearchResults from "./search-results";

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
      hasFocus: false,
      visibleResultsCount: 0,
      maxHeight: 0
    };
    this.inputRef = React.createRef();
    this.listRef = React.createRef();
    this.onResize = debounce(this.onResize, 50);
    this.onScroll = debounce(this.onScroll, 50);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    const maxHeight = this.getSearchResultsHeight();
    this.setState({ maxHeight });
  }

  render() {
    const classNames = [
      "search",
      this.state.hasFocus || this.state.query ? "active" : "inactive"
    ];
    return (
      <div className={classNames.join(" ")}>
        <label className="input">
          <IconSearch label="Search" />
          <input
            ref={this.inputRef}
            type="search"
            value={this.state.query}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.search}
            placeholder="search"
          />
        </label>
        <ul
          ref={this.listRef}
          onScroll={this.onScroll}
          onClick={this.reset}
          className="results"
        >
          {this.state.query && this.state.results.length === 0 ? (
            <li>No results found.</li>
          ) : (
            ""
          )}
          <SearchResults
            results={this.state.results.slice(
              0,
              this.state.visibleResultsCount
            )}
          />
        </ul>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  onFocus = evt => {
    this.setState({ hasFocus: true });
  };

  onBlur = evt => {
    this.setState({ hasFocus: false });
  };

  // Get maximum height of search results element
  getSearchResultsHeight = () => {
    return window.innerHeight - this.inputRef.current.offsetHeight;
  };

  // Increase visible search results number when reaches the end of list
  onScroll = evt => {
    const { scrollTop, scrollHeight, offsetHeight } = this.listRef.current;
    const { visibleResultsCount, results } = this.state;

    if (scrollHeight <= scrollTop + offsetHeight + 50) {
      this.setState({
        visibleResultsCount:
          visibleResultsCount >= results.length
            ? visibleResultsCount
            : visibleResultsCount + 20
      });
    }
  };

  onResize = evt => {
    const maxHeight = this.getSearchResultsHeight();
    this.setState({ maxHeight });
  };

  search = evt => {
    const query = evt.target.value;

    const searchOptions = {
      expand: true,
      fields: {
        title: { boost: 3 },
        name: { boost: 2 },
        scope: { boost: 2 },
        route: { boost: 1 },
        method: { boost: 1 }
      }
    };

    this.index = this.getOrCreateIndex();
    // Query the index with search string to get an [] of IDs
    const results = this.index
      .search(query, searchOptions)
      // Map over each ID and return the full document
      .map(({ ref }) => this.index.documentStore.getDoc(ref));

    let height = 0;
    let visibleResultsCount;

    // object key is document type and property is height of that type
    const rowHeight = {
      "API method": 54,
      API: 26,
      default: 26
    };

    // Calculate maximum count of results that fits in current viewport height
    for (const [index, doc] of results.entries()) {
      height += rowHeight[doc.type] || rowHeight.default;

      if (height > this.state.maxHeight) {
        visibleResultsCount = index;
        break;
      }
    }

    this.setState({
      query,
      results,
      visibleResultsCount: visibleResultsCount || results.length
    });
  };

  reset = evt => {
    this.setState({
      query: "",
      results: []
    });
  };
}
