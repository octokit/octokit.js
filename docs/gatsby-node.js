const path = require(`path`);

const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
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
    let version = `current`;
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

exports.createPages = async ({ actions, graphql }) => {
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

  // create index page with current version content
  createPage({
    path: `/`,
    component,
    context: {
      version: `current`,
      endpoints: `current-endpoints`
    }
  });

  // create a page for each version sourced from git
  data.allGitRemote.nodes.forEach(({ sourceInstanceName }) => {
    createPage({
      path: `/` + sourceInstanceName,
      component,
      context: {
        // specify git source names in the same format as they were
        // configured in gatsby-config.js
        version: sourceInstanceName,
        endpoints: sourceInstanceName + `-endpoints`
      }
    });
  });
};
