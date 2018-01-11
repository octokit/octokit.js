const octokit = require('@octokit/rest')({
  debug: true
})

octokit.users.get({})
