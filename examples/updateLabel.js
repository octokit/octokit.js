const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.updateLabel({
  owner: 'octokit',
  repo: 'rest.js',
  oldname: 'labelA',
  name: 'labelB',
  color: '0052cc'
})
