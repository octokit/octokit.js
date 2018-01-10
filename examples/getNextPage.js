const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.repos.getAll({
  owner: 'octokit',
  repo: 'rest.js',
  affiliation: 'owner,organization_member'
})

.then(result => {
  if (github.hasNextPage(result)) {
    return github.getNextPage(result)

    .then(handleResults)
  }

  handleResults(result)
})

function handleResults (result) {
  // result.data has list of repositories
}
