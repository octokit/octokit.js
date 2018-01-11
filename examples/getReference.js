const octokit = require('@octokit/rest')({
  debug: true
})

octokit.gitdata.getReference({
  owner: 'octokit',
  repo: 'rest.js',
  ref: 'heads/master'
})
