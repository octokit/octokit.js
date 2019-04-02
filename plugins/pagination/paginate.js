module.exports = paginate

const Deprecation = require('deprecation')
const once = require('once')

const deprecateIncompleteResults = once((log, deprecation) => log.warn(deprecation))
const deprecateTotalCount = once((log, deprecation) => log.warn(deprecation))
const deprecateNamespace = once((log, deprecation) => log.warn(deprecation))

const iterator = require('./iterator')

function paginate (octokit, route, options, mapFn) {
  if (typeof options === 'function') {
    mapFn = options
    options = undefined
  }
  options = octokit.request.endpoint.merge(route, options)
  return gather(octokit, [], iterator(octokit, options)[Symbol.asyncIterator](), mapFn)
}

function gather (octokit, results, iterator, mapFn) {
  return iterator.next()
    .then(result => {
      if (result.done) {
        return results
      }

      let earlyExit = false
      function done () {
        earlyExit = true
      }

      // normalize list responses with { total_count, incomplete_results, items } keys
      // https://github.com/octokit/rest.js/issues/1283
      if ('total_count' in result.value.data && result.value.headers.link) {
        const incompleteResults = result.value.data.incomplete_results
        const repositorySelection = result.value.data.repository_selection
        const totalCount = result.value.data.total_count
        delete result.value.data.incomplete_results
        delete result.value.data.repository_selection
        delete result.value.data.total_count

        const namespaceKey = Object.keys(result.value.data)[0]

        result.value.data = result.value.data[namespaceKey]

        Object.defineProperty(result.value.data, namespaceKey, {
          get () {
            deprecateNamespace(octokit.log, new Deprecation(`[@octokit/rest] "result.data.${namespaceKey}" is deprecated. Use "result.data" instead`))
            return result.value.data
          }
        })

        if (typeof incompleteResults !== 'undefined') {
          Object.defineProperty(result.value.data, 'incomplete_results', {
            get () {
              deprecateIncompleteResults(octokit.log, new Deprecation('[@octokit/rest] "result.data.incomplete_results" is deprecated.'))
              return incompleteResults
            }
          })
        }

        Object.defineProperty(result.value.data, 'repository_selection', {
          get () {
            deprecateTotalCount(octokit.log, new Deprecation('[@octokit/rest] "result.data.repository_selection" is deprecated.'))
            return repositorySelection
          }
        })

        Object.defineProperty(result.value.data, 'total_count', {
          get () {
            deprecateTotalCount(octokit.log, new Deprecation('[@octokit/rest] "result.data.total_count" is deprecated.'))
            return totalCount
          }
        })
      }

      results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data)

      if (earlyExit) {
        return results
      }

      return gather(octokit, results, iterator, mapFn)
    })
}
