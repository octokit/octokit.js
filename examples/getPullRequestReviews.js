const octokit = require('@octokit/rest')({
  debug: true
})

octokit.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'rest.js',
  number: 1
})
