module.exports = getLastPage

const getPage = require('./get-page')

function getLastPage (link, headers, callback) {
  return getPage(link, 'last', headers, callback)
}
