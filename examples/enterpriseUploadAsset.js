const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true,
  host: 'github.my-GHE-enabled-company.com',
  pathPrefix: '/api/v3'
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.uploadAsset({
  owner: 'foo-organization',
  repo: 'bar-repository',
  id: '123456',
  filePath: 'README.md',
  name: 'z.sh'
})
