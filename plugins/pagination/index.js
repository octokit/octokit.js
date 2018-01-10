module.exports = paginationPlugin

function paginationPlugin (github) {
  github.getFirstPage = require('./get-first-page')
  github.getLastPage = require('./get-last-page')
  github.getNextPage = require('./get-next-page')
  github.getPreviousPage = require('./get-previous-page')
  github.hasFirstPage = require('./has-first-page')
  github.hasLastPage = require('./has-last-page')
  github.hasNextPage = require('./has-next-page')
  github.hasPreviousPage = require('./has-previous-page')
}
