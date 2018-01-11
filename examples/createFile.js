const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.repos.createFile({
  owner: 'octokit',
  repo: 'rest.js',
  path: 'blah.txt',
  message: 'blah blah',
  content: 'YmxlZXAgYmxvb3A=' // base64-encoded "bleep bloop"
})
