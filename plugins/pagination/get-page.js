module.exports = getPage

const urlParse = require('url').parse

const errors = require('../../request/errors')
const getPageLinks = require('./get-page-links')
const request = require('../../request/request')

function getPage (link, which, headers, callback) {
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

  const requestOptions = urlParse(url)
  requestOptions.headers = applyAcceptHeader(link, headers)

  if (callback) {
    return request(requestOptions, callback)
  }

  return new Promise((resolve, reject) => {
    request(requestOptions, (error, response) => {
      if (error) {
        return reject(error)
      }

      resolve(response)
    })
  })
}

function applyAcceptHeader (res, headers) {
  const previous = res.headers && res.headers['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = `application/vnd.${previous.replace('; format=', '+')}`
  return headers
}
