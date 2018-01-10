const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'rest.js',
  number: 1
})
