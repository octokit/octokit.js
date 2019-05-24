const { join } = require('path')
const { writeFileSync } = require('fs')

const camelCase = require('lodash.camelcase')
const jsonSchemaRefParser = require('json-schema-ref-parser')

const sortKeys = require('sort-keys')

const ROUTES_PATH = join(__dirname, '..', 'plugins', 'rest-api-endpoints', 'routes.json')

const ROUTES = {}

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
          params
        }

        if (acceptHeader.required) {
          ROUTES[scope][idName].headers = {
            accept: acceptHeader.schema.default
          }
        }

        // {
        //   summary: 'List issues for a repository',
        //   description: '**Note**: GitHub\'s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.\n\nBe aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.\n\n',
        //   operationId: 'issues-list-for-repo',
        //   tags: [
        //     'issues'
        //   ],
        //   externalDocs: {
        //     description: 'API method documentation',
        //     url: 'https://developer.github.com/v3/issues/#list-issues-for-a-repository'
        //   },
        //   parameters: [
        //     {
        //       name: 'owner',
        //       'in': 'path',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: true,
        //       description: 'owner parameter'
        //     },
        //     {
        //       name: 'repo',
        //       'in': 'path',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: true,
        //       description: 'repo parameter'
        //     },
        //     {
        //       name: 'milestone',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.'
        //     },
        //     {
        //       name: 'state',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.'
        //     },
        //     {
        //       name: 'assignee',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.'
        //     },
        //     {
        //       name: 'creator',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'The user that created the issue.'
        //     },
        //     {
        //       name: 'mentioned',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'A user that\'s mentioned in the issue.'
        //     },
        //     {
        //       name: 'labels',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'A list of comma separated label names. Example: `bug,ui,@high`'
        //     },
        //     {
        //       name: 'sort',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'What to sort results by. Can be either `created`, `updated`, `comments`.'
        //     },
        //     {
        //       name: 'direction',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'The direction of the sort. Can be either `asc` or `desc`.'
        //     },
        //     {
        //       name: 'since',
        //       'in': 'query',
        //       schema: {
        //         type: 'string'
        //       },
        //       required: false,
        //       description: 'Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.'
        //     },
        //     {
        //       name: 'per_page',
        //       'in': 'query',
        //       schema: {
        //         type: 'integer'
        //       },
        //       required: false,
        //       description: 'Results per page (max 100)'
        //     },
        //     {
        //       name: 'page',
        //       'in': 'query',
        //       schema: {
        //         type: 'integer'
        //       },
        //       required: false,
        //       description: 'Page number of the results to fetch.'
        //     }
        //   ],
        //   'x-code-samples': [
        //     {
        //       lang: 'Shell',
        //       source: 'curl \\\n  -H"Accept: application/vnd.github.v3+json" \\\n  https://developer.github.com/repos/octocat/:repo/issues'
        //     },
        //     {
        //       lang: 'JS',
        //       source: 'octokit.issues.get({\n  owner: \'octocat\',\n  repo: \'hello-world\'\n})'
        //     }
        //   ],
        //   responses: {
        //     '200': {
        //       description: 'response',
        //       content: {
        //         'application/json': {
        //           schema: {}
        //         }
        //       }
        //     }
        //   }
        // }
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
