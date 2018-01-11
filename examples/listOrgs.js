const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.getAll({
  page: 5,
  per_page: 100
})
