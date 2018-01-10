module.exports = getPreviousPage

const getPage = require('./get-page')

function getPreviousPage (link, headers, callback) {
  return getPage(link, 'prev', headers, callback)
}
