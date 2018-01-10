const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.gitdata.getReferences({
  owner: 'octokit',
  repo: 'rest.js'
})
