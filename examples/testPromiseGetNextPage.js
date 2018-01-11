'use strict'

const octokit = require('@octokit/rest')({
  debug: true
})

function getAllOrgRepos (orgName) {
  let repos = []

  function pager (result) {
    repos = repos.concat(result.data)

    if (octokit.hasNextPage(result)) {
      return octokit.getNextPage(result).then(pager)
    }

    return repos
  }

  return octokit.repos.getForOrg({ org: orgName })
    .then(pager)
}

getAllOrgRepos('github')
  .then((orgRepos) => {
    // orgRepos is array of all repositories meta data
  })
