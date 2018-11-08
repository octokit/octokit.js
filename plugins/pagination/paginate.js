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

      results.push.apply(results, mapFn ? mapFn(result.value) : result.value.data)
      return gather(results, iterator, mapFn)
    })
}
