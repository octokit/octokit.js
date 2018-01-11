const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.issues.updateLabel({
  owner: 'octokit',
  repo: 'rest.js',
  oldname: 'labelA',
  name: 'labelB',
  color: '0052cc'
})
