const { join } = require('path')
const { writeFileSync } = require('fs')

const camelCase = require('lodash.camelcase')
const jsonSchemaRefParser = require('json-schema-ref-parser')

const sortKeys = require('sort-keys')

const ROUTES_PATH = join(__dirname, '..', 'plugins', 'rest-api-endpoints', 'routes.json')

const ROUTES = {}

function definitionToEndpoint ({ method, url }, definition) {
  const scope = camelCase(definition.tags[0])
  const idName = camelCase(definition.operationId.substr(definition.tags[0].length + 1))

  if (!ROUTES[scope]) {
    ROUTES[scope] = {}
  }

  const params = {}

  // URL, headers and query params
  definition.parameters
    .forEach(param => {
      if (param.in === 'header') {
        return
      }

      params[param.name] = {
        type: param.schema.type,
        enum: param.schema.enum
      }

      if (param.required) {
        params[param.name].required = true
      }
    })

  // request body params
  if (definition.requestBody) {
    const requiredParams = definition.requestBody.content['application/json'].schema.required
    Object.entries(definition.requestBody.content['application/json'].schema.properties)
      .forEach(([param, definition]) => {
        params[param] = {
          type: definition.type,
          enum: definition.enum
        }

        if (requiredParams && requiredParams.includes(param)) {
          params[param].required = true
        }
      })
  }

  const headerParameters = definition.parameters
    .filter(param => param.in === 'header')
  const acceptHeader = headerParameters.find(param => param.name === 'accept')

  ROUTES[scope][idName] = {
    method: method.toUpperCase(),
    url: url.replace(/\{([^}]+)\}/g, ':$1'),
    params,
    deprecated: definition.deprecated
  }

  if (acceptHeader.required) {
    ROUTES[scope][idName].headers = {
      accept: acceptHeader.schema.default
    }
  }
}

jsonSchemaRefParser.dereference(require.resolve('@octokit/routes'))
  .then(schema => {
    for (const [url, definitions] of Object.entries(schema.paths)) {
      for (const [method, definition] of Object.entries(definitions)) {
        // ignore legacy endpoints
        if (definition['x-github'].legacy) {
          continue
        }

        if (definition['x-github'].githubCloudOnly) {
          continue
        }

        definitionToEndpoint({ method, url }, definition)

        definition['x-changes'].forEach(change => {
          if (change.type !== 'idName') {
            return
          }

          const scope = camelCase(definition.tags[0])
          const before = camelCase(change.meta.before.idName)
          const after = camelCase(change.meta.after.idName)

          definitionToEndpoint(
            { method, url },
            Object.assign({}, definition, {
              operationId: [definition.tags[0], change.meta.before.idName].join('-'),
              deprecated: `octokit.${scope}.${before}() has been renamed to octokit.${scope}.${after}() (${change.date})`
            })
          )
        })
      }
    }
  })

  .then(() => {
    writeFileSync(ROUTES_PATH, JSON.stringify(sortKeys(ROUTES, { deep: true }), null, 2) + '\n')
    console.log(`${ROUTES_PATH} written.`)
  })

// const camelCase = require('lodash.camelcase')

// const ROUTES = require('./lib/get-routes')()

// const newRoutes = {}

// const endpoints = Object.keys(ROUTES).reduce((result, scope) => {
//   const scopeEndpoints = ROUTES[scope]
//   scopeEndpoints.forEach(endpoint => {
//     endpoint.scope = scope
//   })
//   return result.concat(scopeEndpoints)
// }, [])

// endpoints.forEach(endpoint => {
//   const scope = endpoint.scope

//   if (!newRoutes[scope]) {
//     newRoutes[scope] = {}
//   }

//   const idName = endpoint.idName

//   // new route
//   newRoutes[scope][idName] = {
//     method: endpoint.method,
//     headers: endpoint.headers,
//     params: endpoint.params.reduce((result, param) => {
//       result[param.name] = {
//         type: param.type
//       }
//       if (param.allowNull) {
//         result[param.name].allowNull = true
//       }
//       if (param.required) {
//         result[param.name].required = true
//       }
//       if (param.mapTo) {
//         result[param.name].mapTo = param.mapTo === 'input' ? 'data' : param.mapTo

//         if (result[param.name].mapTo === 'data' === param.name) {
//           delete result[param.name].mapTo
//         }
//       }
//       if (param.enum) {
//         result[param.name].enum = param.enum
//       }
//       if (param.regex) {
//         result[param.name].validation = param.regex
//       }
//       if (param.deprecated) {
//         result[param.name].deprecated = true
//         result[param.name].alias = param.deprecated.after.name
//       }
//       return result
//     }, {}),
//     url: endpoint.path
//   }

//   const previewHeaders = endpoint.previews
//     .filter(preview => preview.required)
//     .map(preview => `application/vnd.github.${preview.name}-preview+json`)
//     .join(',')

//   if (previewHeaders) {
//     newRoutes[scope][idName].headers = {
//       accept: previewHeaders
//     }
//   }

//   if (endpoint.deprecated) {
//     if (endpoint.deprecated.after) {
//       newRoutes[scope][idName].deprecated = `octokit.${scope}.${camelCase(endpoint.deprecated.before.idName)}() has been renamed to octokit.${scope}.${camelCase(endpoint.deprecated.after.idName)}() (${endpoint.deprecated.date})`
//     } else {
//       newRoutes[scope][idName].deprecated = endpoint.deprecated.message
//     }
//   }
// })

// writeFileSync(ROUTES_PATH, JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n')
// console.log(`${ROUTES_PATH} written.`)
