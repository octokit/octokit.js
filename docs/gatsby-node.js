const path = require(`path`)

const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }

  if (node.internal.type === 'OctokitRoute') {
    const slug = `api/${_.kebabCase(node.scope)}/${_.kebabCase(node.idName)}`
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
    createNodeField({
      node,
      name: `scopeSlug`,
      value: `api/${_.kebabCase(node.scope)}`
    })
  }

  if (node.internal.type === 'OctokitScope') {
    createNodeField({
      node,
      name: `routeSlugs`,
      value: node.routesIdNames.map(idName => `api/${_.kebabCase(node.name)}/${_.kebabCase(idName)}`)
    })
    createNodeField({
      node,
      name: `slug`,
      value: `api/${_.kebabCase(node.name)}`
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const guidesPagesResult = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`)
  guidesPagesResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/guide.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    })
  })

  const octokitScopesResult = await graphql(`{
    allOctokitScope {
      edges {
        node {
          id
          name
          fields {
            slug
          }
        }
      }
    }
  }`)
  octokitScopesResult.data.allOctokitScope.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/api-scope.js`),
      context: {
        id: node.id,
        scope: node.name
      }
    })
  })

  const octokitRoutesResult = await graphql(`{
    allOctokitRoute {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }`)
  octokitRoutesResult.data.allOctokitRoute.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/api.js`),
      context: {
        id: node.id
      }
    })
  })
}
