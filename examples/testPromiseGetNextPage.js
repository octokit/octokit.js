'use strict'

const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

function getAllOrgRepos (orgName) {
  let repos = []

  function pager (result) {
    repos = repos.concat(result.data)

    if (github.hasNextPage(result)) {
      return github.getNextPage(result).then(pager)
    }

    return repos
  }

  return github.repos.getForOrg({ org: orgName })
    .then(pager)
}

getAllOrgRepos('github')
  .then((orgRepos) => {
    // orgRepos is array of all repositories meta data
  })
