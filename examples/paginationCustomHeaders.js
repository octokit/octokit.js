const octokit = require('@octokit/rest')({
  debug: true
})

const customHeaders = {
  'User-Agent': 'blah'
}

octokit.issues.getForRepo({
  owner: 'octokit',
  repo: 'rest.js',
  headers: customHeaders
})
