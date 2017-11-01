const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.updateLabel({
  owner: 'octokit',
  repo: 'node-github',
  oldname: 'labelA',
  name: 'labelB',
  color: '0052cc'
})
