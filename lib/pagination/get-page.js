module.exports = getPage

const urlParse = require('url').parse

const errors = require('../utils/errors')
const getPageLinks = require('./get-page-links')

function getPage (link, which, headers, callback) {
  if (typeof headers === 'function') {
    callback = headers
    headers = null
  }
  headers = applyAcceptHeader(link, headers)

  var url = getPageLinks(link)[which]
  if (!url) {
    var urlErr = new errors.NotFound('No ' + which + ' page found')
    if (callback) {
      return callback(urlErr)
    }
    return Promise.reject(urlErr)
  }

  var parsedUrl = urlParse(url, true)

  var msg = Object.create(parsedUrl.query)
  msg.headers = headers

  var block = {
    url: parsedUrl.pathname,
    method: 'GET',
    params: parsedUrl.query
  }

  if (callback) {
    return self.handler(msg, block, callback)
  }

  return new Promise(function (resolve, reject) {
    var cb = function (err, obj) {
      if (err) {
        reject(err)
      } else {
        resolve(obj)
      }
    }
    self.handler(msg, block, cb)
  })
}

function applyAcceptHeader (res, headers) {
  var previous = res.meta && res.meta['x-github-media-type']
  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = 'application/vnd.' + previous.replace('; format=', '+')
  return headers
}
