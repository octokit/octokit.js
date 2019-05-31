const _ = require('lodash')
const jsonSchemaRefParser = require('json-schema-ref-parser')

function schemaToParams (params, schema, prefix = '') {
  Object.entries(schema.properties)
    .forEach(([paramName, definition]) => {
      const paramNameWithPrefix = prefix + paramName
      const param = {
        name: paramNameWithPrefix,
        type: definition.type,
        enum: definition.enum,
        description: definition.description
      }

      params.push(param)

      if (schema.required && schema.required.includes(paramName)) {
        param.required = true
      }

      if (definition.nullable) {
        param.allowNull = true
      }

      if (definition.pattern) {
        param.validation = definition.pattern
      }

      // handle arrays
      if (definition.type === 'array') {
        param.type = definition.items.type + '[]'

        if (definition.items.type === 'object') {
          schemaToParams(params, definition.items, `${paramNameWithPrefix}[].`)
        }
      }

      // handle objects
      if (definition.type === 'object') {
        schemaToParams(params, definition, `${paramNameWithPrefix}.`)
      }
    })
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const schema = await jsonSchemaRefParser.dereference(require.resolve('@octokit/routes'))

  let methodsByScope = {}
  for (const [path, definitions] of Object.entries(schema.paths)) {
    for (const [method, definition] of Object.entries(definitions)) {
      // ignore legacy endpoints
      if (definition['x-github'].legacy) {
        continue
      }

      if (definition['x-github'].githubCloudOnly) {
        continue
      }

      const scope = definition.tags[0]
      if (!methodsByScope[scope]) {
        methodsByScope[scope] = []
      }

      const scopeId = `octokit-routes-${scope}`

      const endpointId = `octokit-routes-${definition.operationId}`
      const idName = definition.operationId.substr(scope.length + 1)
      const paramNames = definition.parameters
        .filter(param => param.required)
        .map(param => param.name)

      if (definition.requestBody) {
        if (definition['x-github'].requestBodyParameterName) {
          paramNames.push(definition['x-github'].requestBodyParameterName)
        } else {
          paramNames.push(...(definition.requestBody.content['application/json'].schema.required || []))
        }
      }

      const params = []

      if (definition.requestBody) {
        if (definition['x-github'].requestBodyParameterName) {
          const paramName = definition['x-github'].requestBodyParameterName
          const contentType = Object.keys(definition.requestBody.content)[0]
          const { schema } = definition.requestBody.content[contentType]
          params[paramName] = {
            type: schema.type,
            mapTo: 'data'
          }
          if (schema.type === 'array') {
            params[paramName].type = schema.items.type + '[]'
          }

          params[paramName].required = true
        } else {
          schemaToParams(params, definition.requestBody.content['application/json'].schema)
        }
      }

      const paramsString = paramNames.length ? `{
  ${paramNames.join(',\n  ')}
}` : ''
      const example = `octokit.${scope}.${_.camelCase(idName)}(${paramsString})`

      const endpoint = {
        name: definition.summary,
        enabledForApps: null, // TODO
        githubCloudOnly: definition['x-github'].githubCloudOnly,
        method,
        path,
        previews: [], // TODO
        params,
        description: definition.description,
        idName,
        documentationUrl: definition.externalDocs.url
      }

      createNode({
        id: endpointId,
        parent: scopeId,
        children: [],
        scope,
        ...endpoint,
        example,
        internal: {
          description: `${endpoint.name} Method`,
          contentDigest: endpointId,
          type: 'OctokitApiMethod'
        }
      })
      methodsByScope[scope].push({
        id: endpointId,
        scope,
        ...endpoint,
        example
      })
    }
  }

  Object.keys(methodsByScope).sort().forEach(scope => {
    const methods = methodsByScope[scope]
    createNode({
      id: `octokit-routes-${scope}`,
      parent: null,
      children: methods.map(method => method.id),
      methods: methods,
      name: scope,
      internal: {
        description: `${scope} Scope`,
        contentDigest: scope,
        type: 'OctokitApiGroup'
      }
    })
  })
}
