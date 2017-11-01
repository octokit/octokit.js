const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.createFile({
  owner: 'octokit',
  repo: 'node-github',
  path: 'blah.txt',
  message: 'blah blah',
  content: 'YmxlZXAgYmxvb3A=' // base64-encoded "bleep bloop"
})
