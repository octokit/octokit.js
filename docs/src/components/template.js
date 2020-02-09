import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";

import IndexPage from "./index-page";

export default ({ data, pageContext }) => (
  <Fragment>
    <Helmet>
      <meta charset="utf-8" />
      <title>octokit/rest.js</title>
    </Helmet>
    <IndexPage
      data={{
        staticMethods: data.allMarkdownRemark,
        endpointScopes: pageContext.endpointScopes
      }}
    />
  </Fragment>
);


export const query = graphql`
  query TemplateQuery($version: String) {
    allMarkdownRemark(filter: {fields: {version: {eq: $version}}}, sort: {fields: fields___slug}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
          fields {
            idName
          }
        }
      }
    }
  }
`;
