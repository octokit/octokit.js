const _ = require('lodash')
const sortKeys = require('sort-keys')
const routes = require('@octokit/routes')

const restRoutes = require('../lib/routes')
const restEndpoints = Object.keys(restRoutes).reduce((result, scope) => {
  const endpoints = Object.keys(restRoutes[scope]).reduce((result, idName) => {
    const endpoint = restRoutes[scope][idName]
    endpoint.scope = scope
    endpoint.idName = idName
    return result.concat(endpoint)
  }, [])
  return result.concat(endpoints)
}, [])

const newRoutes = {}
Object.keys(restRoutes).forEach(scope => {
  newRoutes[scope] = {}
})

const mapScopes = {
  git: 'gitdata',
  integrations: 'apps',
  oauthAuthorizations: 'authorization',
  pulls: 'pullRequests'
}

function findMatchingRoutes (endpoint) {
  const matches = []
  restEndpoints.forEach((route, i) => {
    // ignores
    if (route.method === 'GET' && route.url === '/repos/:owner/:repo/git/refs') return
    if (route.url === '/repos/:owner/:repo/git/refs/tags') return

    if (route.method === endpoint.method && route.url === endpoint.path) {
      matches.push(`${route.scope}.${route.idName}`)
    }
  })

  return _.uniq(matches)
}

function normalize (methodName) {
  return _.camelCase(methodName.replace(/^edit/, 'update'))
}

function updateRoute ({ scope, idName, endpoint }) {
  let headers
  const isNewEndpoint = !restRoutes[scope][idName]
  if (!isNewEndpoint) {
    headers = restRoutes[scope][idName].headers

    // keep parameter aliases
    Object.keys(restRoutes[scope][idName].params).forEach(name => {
      const param = restRoutes[scope][idName].params[name]

      if (!param.alias) {
        return
      }

      endpoint.params.push({
        name,
        alias: param.alias,
        deprecated: param.deprecated
      })
    })
  }

  restRoutes[scope][idName] = {
    method: endpoint.method,
    params: endpoint.params.reduce((result, param) => {
      result[param.name] = {
        type: param.type
      }
      if (param.allowNull) {
        result[param.name].allowNull = true
      }
      if (param.required) {
        result[param.name].required = true
      }
      if (param.mapTo) {
        result[param.name].mapTo = param.mapTo
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.regex) {
        result[param.name].validation = param.regex
      }
      if (param.alias) {
        result[param.name].alias = param.alias
      }
      if (param.deprecated) {
        result[param.name].deprecated = param.deprecated
      }
      return result
    }, {}),
    url: endpoint.path
  }

  // // The code below is a breaking change as it removes preview headers that
  // // are not required to use the endpoint. So until we want the breaking
  // // change we keep the preview headers as they are
  if (isNewEndpoint) {
    const previewHeaders = endpoint.previews
      .filter(preview => preview.required)
      .map(preview => `application/vnd.github.${preview.name}-preview+json`)
      .join(',')

    if (previewHeaders) {
      restRoutes[scope][idName].headers = {
        accept: previewHeaders
      }
    }
  } else {
    restRoutes[scope][idName].headers = headers
  }

  // exception for uploadReleaseAssets which passes parameters as header values
  // see https://github.com/octokit/rest.js/pull/1043
  if (idName === 'uploadReleaseAsset') {
    restRoutes[scope][idName].params['headers.content-length'] = restRoutes[scope][idName].params['Content-Length']
    restRoutes[scope][idName].params['headers.content-type'] = restRoutes[scope][idName].params['Content-Type']
    delete restRoutes[scope][idName].params['Content-Length']
    delete restRoutes[scope][idName].params['Content-Type']
  }

  // exception for markdown.renderRaw which requires a content-type header
  // see https://github.com/octokit/rest.js/pull/1043
  if (idName === 'renderRaw') {
    restRoutes[scope][idName].headers = {
      'content-type': 'text/plain; charset=utf-8'
    }
  }
}

const counts = {
  same: 0,
  changed: 0,
  added: 0
}
const summaryNewRoutes = []
const summaryChangedRoutes = []

const endpoints = Object.keys(routes).reduce((result, scope) => {
  const scopeEndpoints = routes[scope]
  scopeEndpoints.forEach(endpoint => {
    endpoint.scope = scope
  })
  return result.concat(scopeEndpoints)
}, [])

console.log('')
endpoints.forEach(endpoint => {
  const routes = findMatchingRoutes(endpoint)
  const scope = mapScopes[endpoint.scope] || endpoint.scope

  if (!scope) {
    throw new Error(`Unknown scope: ${endpoint.scope}`)
  }

  if (!restRoutes[scope]) {
    console.log(`New scope: ${scope}`)
    restRoutes[scope] = {}
  }

  // ignore legacy endpoints such as https://developer.github.com/v3/activity/watching/#check-if-you-are-watching-a-repository-legacy
  if (/legacy$/.test(endpoint.idName)) {
    return
  }

  const idName = normalize(endpoint.idName)
  const newRoute = `${scope}.${idName}`

  // new route
  if (routes.length === 0) {
    summaryNewRoutes.push(`- \`${newRoute}\` ([${endpoint.method} ${endpoint.path}](${endpoint.documentationUrl}))`)
    counts.added++
    updateRoute({ scope, idName, endpoint })
    return
  }

  if (routes.length === 1) {
    const route = routes[0]

    // unchanged
    if (newRoute === route) {
      counts.same++

      updateRoute({ scope, idName, endpoint })
      return
    }

    // changed
    summaryChangedRoutes.push(`- \`${route}\` ➜ \`${newRoute}\` ([${endpoint.method} ${endpoint.path}](${endpoint.documentationUrl}))`)
    counts.changed++

    const [oldScope, oldMethodName] = route.split('.')
    restRoutes[scope][idName] = restRoutes[oldScope][oldMethodName]
    restRoutes[oldScope][oldMethodName] = {
      alias: newRoute,
      deprecated: '`' + route + '()` is deprecated, use `' + newRoute + '()`'
    }
    return
  }

  console.log(`TBD: split into two routes - ${routes.join(', ')}`)
  // there are currently three cases when more than one route is matched:
  // 1. repos.createFile vs repos.updateFile
  // 2. pulls.create vs pulls.createFromIssue
  // 3. pulls.createComment vs pulls.createCommentReply
})

Object.keys(restRoutes).forEach(scope => {
  Object.keys(restRoutes[scope]).forEach(method => {
    delete restRoutes[scope][method].scope
    delete restRoutes[scope][method].idName
  })
})
require('fs').writeFileSync(require('path').join(__dirname, '..', 'lib', 'routes.json'), JSON.stringify(sortKeys(restRoutes, { deep: true }), null, 2) + '\n')

//
// summary
const output = `# Summary

<table>
  <tr><th>unchanged</th><td>${counts.same}</td></tr>
  <tr><th>changed</th><td>${counts.changed}</td></tr>
  <tr><th>added</th><td>${counts.added}</td></tr>
</table>

## summaryNewRoutes

${summaryNewRoutes.sort().join('\n')}

## Changed routes

${summaryChangedRoutes.sort().join('\n')}`

console.log(output)
