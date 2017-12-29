const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'rest.js',
  number: 1
})
