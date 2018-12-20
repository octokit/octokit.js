const crypto = require('crypto')

const _ = require('lodash')
const ROUTES = require('@octokit/routes')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  Object.keys(ROUTES).map(scope => {
    const scopeId = `octokit-routes-${scope}`
    const endpoints = []

    ROUTES[scope].forEach(endpoint => {
      const endpointId = `octokit-routes-${scope}-${_.kebabCase(endpoint.idName)}`
      const paramNames = endpoint.params
        .filter(param => param.required)
        .filter(param => !/\./.test(param.name))
        .map(param => param.name)
      const paramsString = paramNames.length ? `{
  ${paramNames.join(',\n  ')}
}` : ''
      const example = `octokit.${scope}.${_.camelCase(endpoint.idName)}(${paramsString})`
      const endpointNode = {
        id: endpointId,
        parent: scopeId,
        children: [],
        scope,
        ...endpoint,
        example
      }
      endpoints.push(endpointNode)
      createNode({
        ...endpointNode,
        internal: {
          description: `octokit.${scope}.${endpoint.idName}()`,
          contentDigest: crypto.createHash(`md5`).update(JSON.stringify(endpoint)).digest(`hex`),
          type: 'OctokitRoute'
        }
      })
    })

    createNode({
      id: scopeId,
      parent: null,
      children: endpoints.map(endpoint => endpoint.id),
      name: scope,
      endpoints: endpoints,
      internal: {
        description: `${scope} Scope`,
        contentDigest: scope,
        type: 'OctokitScope'
      }
    })
  })
}
