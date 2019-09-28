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
