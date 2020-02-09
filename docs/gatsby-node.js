const path = require(`path`);

const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const idName = _.kebabCase(node.frontmatter.title);
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

    let version = ``;
    const parent = getNode(node.parent);
    if (parent.gitRemote___NODE) {
      const gitRemote = getNode(parent.gitRemote___NODE);
      version = gitRemote.sourceInstanceName;
    }

    createNodeField({
      node,
      name: `version`,
      value: version
    });
  }

  if (node.internal.type === "OctokitRoute") {
    const slug = `api/${_.kebabCase(node.scope)}/${_.kebabCase(node.idName)}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    createNodeField({
      node,
      name: `scopeSlug`,
      value: `api/${_.kebabCase(node.scope)}`
    });
  }

  if (node.internal.type === "OctokitScope") {
    createNodeField({
      node,
      name: `slug`,
      value: `api/${_.kebabCase(node.name)}`
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {data} = await graphql(`
    {
      allGitRemote {
        nodes {
          sourceInstanceName
        }
      }
      allOctokitApiGroup {
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
  `);

  const component = path.resolve(`./src/components/template.js`);

  // create index page with current version content
  createPage({
    path: `/`,
    component,
    context: {
      version: ``,
      endpointScopes: data.allOctokitApiGroup
    }
  });

  // create a page for each version sourced from git
  data.allGitRemote.nodes.forEach(({ sourceInstanceName }) => {
    createPage({
      path: `/` + sourceInstanceName,
      component,
      context: {
        version: sourceInstanceName,
        endpointScopes: {
          edges: []
        }
      }
    });
  })
};
