const fs = require('fs')
const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true,
  host: 'github.my-ghe-enabled-company.com',
  pathPrefix: '/api/v3'
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.uploadAsset({
  url: 'https://github.my-ghe-enabled-company.com/api/uploads',
  file: fs.createReadStream(__filename),
  contentType: 'text/markdown',
  contentLength: fs.statSync(__filename).size,
  name: 'example.js'
})
