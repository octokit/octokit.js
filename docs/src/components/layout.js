import React, { Component } from "react";

class Layout extends Component {
  render() {
    return this.props.children;
  }
}

export default ({ children }) => <Layout children={children}></Layout>;
