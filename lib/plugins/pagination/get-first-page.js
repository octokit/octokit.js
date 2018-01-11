module.exports = getFirstPage

const getPage = require('./get-page')

function getFirstPage (link, headers, callback) {
  return getPage(link, 'first', headers, callback)
}
