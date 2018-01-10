const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.gitdata.updateReference({
  owner: 'octokit',
  repo: 'rest.js',
  ref: 'heads/master',
  sha: '81c559e2e8551982235bc86594cd86ffb135b053'
  // force: true
})
