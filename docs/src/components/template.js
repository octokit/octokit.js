import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";

import IndexPage from "./index-page";

export default ({ data, pageContext }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8" />
        <title>octokit/rest.js</title>
      </Helmet>
      <IndexPage version={pageContext.version} data={data} />
    </Fragment>
  );
};

export const query = graphql`
  query TemplateQuery($version: String, $endpoints: String) {
    # staticMethods are pages sourced from this repo
    staticMethods: allMarkdownRemark(
      filter: { fields: { version: { eq: $version } } }
      sort: { fields: fields___slug }
    ) {
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

    # endpointScopes are groups of pages sourced
    # from https://github.com/octokit/plugin-rest-endpoint-methods.js
    endpointScopes: allMarkdownRemark(
      filter: { fields: { version: { eq: $endpoints } } }
      sort: { fields: fields___slug }
    ) {
      # endpoints are grouped by the directory they reside in, as
      # configured in the onCreateNode hook in gatsby-node.js
      group(field: fields___parentRelativeDirectory) {
        fieldValue # this is the parentRelativeDirectory field
        edges {
          node {
            id
            html
            fields {
              idName
            }
            # use the contents of the document's h1 tag as its link text
            # in the sidebar
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  }
`;
