module.exports = getNextPage

const getPage = require('./get-page')

function getNextPage (link, headers, callback) {
  return getPage(link, 'next', headers, callback)
}
