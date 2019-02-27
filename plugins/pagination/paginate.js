module.exports = paginate

const iterator = require('./iterator')

function paginate (octokit, route, options, mapFn) {
  if (typeof options === 'function') {
    mapFn = options
    options = undefined
  }
  options = octokit.request.endpoint.merge(route, options)
  return gather([], iterator(octokit, options)[Symbol.asyncIterator](), mapFn)
}

function gather (results, iterator, mapFn) {
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
      // https://github.com/octokit/rest.js/issues/1161
      if (result.value.data.items) {
        result.value.data = result.value.data.items
      }

      results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data)

      if (earlyExit) {
        return results
      }

      return gather(results, iterator, mapFn)
    })
}
