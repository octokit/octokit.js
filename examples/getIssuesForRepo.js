const GitHubApi = require('github')
const github = new GitHubApi({
  debug: false
})

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'node-github'
})
