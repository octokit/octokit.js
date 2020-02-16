import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

export default function Index(props) {
  const { currentVersion } = props.data.sitePlugin.pluginOptions;
  return (
    <Helmet>
      <meta http-equiv="refresh" content={`0;url=/${currentVersion}`} />
    </Helmet>
  );
}

export const pageQuery = graphql`
  {
    sitePlugin(name: { eq: "gatsby-plugin-versioned-docs" }) {
      pluginOptions {
        currentVersion
      }
    }
  }
`;
