module.exports = paginate

const iterator = require('./iterator')

function paginate (octokit, route, options) {
  options = octokit.request.endpoint.merge(route, options)
  return gather([], iterator(octokit, options)[Symbol.asyncIterator]())
}

function gather (results, iterator) {
  return iterator.next()
    .then(result => {
      if (result.done) {
        return results
      }

      results.push.apply(results, result.value.data)
      return gather(results, iterator)
    })
}
