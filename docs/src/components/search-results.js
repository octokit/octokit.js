import React, { Component, PureComponent } from "react";
import debounceRender from "react-debounce-render";

class SearchResults extends Component {
  render() {
    return this.props.results.map(page => {
      return <Row key={page.id} page={page} />;
    });
  }
}

class Row extends PureComponent {
  render() {
    const { page } = this.props;

    if (page.type === "API method") {
      return (
        <li key={page.id}>
          <a href={page.slug}>
            <strong>{page.name}</strong>{" "}
            <small>
              (<code>{page.route}</code>)
            </small>
            <br />
            <code>{page.method}</code>
          </a>
        </li>
      );
    }

    if (page.type === "API") {
      return (
        <li key={page.id}>
          <a href={page.slug}>
            <strong>{page.title}</strong> (API)
          </a>
        </li>
      );
    }

    return (
      <li key={page.id}>
        <a href={page.slug}>
          <strong>{page.title}</strong> (Guide)
        </a>
      </li>
    );
  }
}

export default debounceRender(SearchResults, 100);
