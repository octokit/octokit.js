const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: false
})

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'rest.js'
})
