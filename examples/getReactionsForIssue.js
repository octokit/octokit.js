const octokit = require('@octokit/rest')({
  debug: true
})

octokit.reactions.getForIssue({
  owner: 'octokit',
  repo: 'rest.js',
  number: '365'
})
