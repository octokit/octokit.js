module.exports = getPage

const errors = require('../../request/errors')
const getPageLinks = require('./get-page-links')

function getPage (octokit, link, which, headers, callback) {
  if (typeof headers === 'function') {
    callback = headers
    headers = null
  }

  const url = getPageLinks(link)[which]

  if (!url) {
    const urlError = new errors.NotFound(`No ${which} page found`)
    if (callback) {
      return callback(urlError)
    }
    return Promise.reject(urlError)
  }

  const requestOptions = {
    url,
    headers: applyAcceptHeader(link, headers)
  }

  const promise = octokit.request(requestOptions)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}

function applyAcceptHeader (res, headers) {
  const previous = res.meta && res.meta['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = `application/vnd.${previous.replace('; format=', '+')}`
  return headers
}
