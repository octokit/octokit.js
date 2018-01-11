const Octokit = require('@octokit/rest')

const octokit1 = new Octokit()
const octokit2 = new Octokit()

octokit1.authenticate({
  type: 'oauth',
  token: 'add-a-real-token-here'
})

octokit2.authenticate({
  type: 'oauth',
  token: 'add-a-different-token-here'
})
