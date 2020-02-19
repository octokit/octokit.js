import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

export default function Index(props) {
  const { currentVersion } = props.data.sitePlugin.pluginOptions;
  return (
    <Helmet>
      {/* redirect the root path "/" to the current version */}
      <meta http-equiv="refresh" content={`0;url=./${currentVersion}`} />
      <script>
        if (window.location.hash) (window.location.pathname += "v16/")
      </script>
    </Helmet>
  );
}

export const pageQuery = graphql`
  {
    # query for the configured current version slug
    sitePlugin(name: { eq: "gatsby-plugin-versioned-docs" }) {
      pluginOptions {
        currentVersion
      }
    }
  }
`;
