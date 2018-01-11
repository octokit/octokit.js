const octokit = require('@octokit/rest')({
  debug: true
})

octokit.repos.getContent({
  owner: 'octokit',
  repo: 'rest.js',
  path: ''
})
