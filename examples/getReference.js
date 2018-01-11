const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.gitdata.getReference({
  owner: 'octokit',
  repo: 'rest.js',
  ref: 'heads/master'
})
