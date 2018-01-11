const octokit = require('@octokit/rest')({
  debug: true
})

octokit.users.getById({ id: '429706' })
