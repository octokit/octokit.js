module.exports = paginationPlugin

function paginationPlugin (octokit) {
  octokit.getFirstPage = require('./get-first-page')
  octokit.getLastPage = require('./get-last-page')
  octokit.getNextPage = require('./get-next-page')
  octokit.getPreviousPage = require('./get-previous-page')
  octokit.hasFirstPage = require('./has-first-page')
  octokit.hasLastPage = require('./has-last-page')
  octokit.hasNextPage = require('./has-next-page')
  octokit.hasPreviousPage = require('./has-previous-page')
}
