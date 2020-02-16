const path = require(`path`);

const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }, pluginOptions) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const parent = getNode(node.parent);
    const idName = _.kebabCase(node.frontmatter.title || parent.name);

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });

    createNodeField({
      node,
      name: `idName`,
      value: idName
    });

    // save the file's directory so it can be used by the Template
    // component to group data in a GraphQL query
    createNodeField({
      node,
      name: `parentRelativeDirectory`,
      value: parent.relativeDirectory
    });

    // set a version field on pages so they can be queried
    // appropriately in the Template component
    let version = pluginOptions.currentVersion;
    if (parent.gitRemote___NODE) {
      const { sourceInstanceName } = getNode(parent.gitRemote___NODE);
      version = sourceInstanceName;
    }

    createNodeField({
      node,
      name: `version`,
      value: version
    });
  }
};

exports.createPages = async ({ actions, graphql }, pluginOptions) => {
  const { createPage } = actions;

  // query for all git sources that are set up to read from
  // older branches on this repo (v16, etc.)
  const { data } = await graphql(`
    {
      allGitRemote(filter: { name: { eq: "rest.js" } }) {
        nodes {
          sourceInstanceName
        }
      }
    }
  `);

  // save the path to the Template component
  const component = path.resolve(`./src/components/template.js`);

  const versions = [
    pluginOptions.currentVersion,
    ...data.allGitRemote.nodes.map(remote => remote.sourceInstanceName)
  ];

  // create a page for each version sourced from git
  versions.forEach(version => {
    createPage({
      path: `/` + version,
      component,
      context: {
        // specify git source names in the same format as they were
        // configured in gatsby-config.js
        version,
        endpoints: version + `-endpoints`
      }
    });
  });
};
