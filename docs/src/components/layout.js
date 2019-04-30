import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (

      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

          <title>
            octokit/rest.js
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

export default ({ children }) => (
  <Layout children={children}></Layout>
)
