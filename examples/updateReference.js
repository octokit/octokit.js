const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.gitdata.updateReference({
  owner: 'octokit',
  repo: 'node-github',
  ref: 'heads/master',
  sha: '81c559e2e8551982235bc86594cd86ffb135b053'
  // force: true
})
