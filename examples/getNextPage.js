const octokit = require('@octokit/rest')({
  debug: true
})

octokit.repos.getAll({
  owner: 'octokit',
  repo: 'rest.js',
  affiliation: 'owner,organization_member'
})

.then(result => {
  if (octokit.hasNextPage(result)) {
    return octokit.getNextPage(result)

    .then(handleResults)
  }

  handleResults(result)
})

function handleResults (result) {
  // result.data has list of repositories
}
