import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import { graphql } from "gatsby";

import IndexPage from "../components/index-page";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charset="utf-8" />
      <title>octokit/rest.js</title>
    </Helmet>
    <IndexPage data={data} />
  </Layout>
);

export const query = graphql`
  query {
    staticMethods: allMarkdownRemark(sort: { fields: fields___slug }) {
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
    endpointScopes: allOctokitApiGroup {
      edges {
        node {
          id
          name
          methods {
            id
            name
            description
            example
            documentationUrl
            isDeprecated
            parameters {
              name
              required
              description
            }
            renamed {
              before {
                scope
                id
              }
              after {
                scope
                id
              }
              afterId
            }
          }
        }
      }
    }
  }
`;
