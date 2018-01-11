const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true,
  host: 'github.my-ghe-enabled-company.com',
  pathPrefix: '/api/v3'
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.getReleaseByTag({
  owner: 'octokit-fixture-org',
  repo: 'release-assets',
  tag: 'v1.0.0'
})

.then(result => {
  return github.repos.uploadAsset({
    url: result.data.upload_url,
    file: 'Hello, world!\n',
    contentType: 'text/plain',
    contentLength: 14,
    name: 'test-upload.txt',
    label: 'test'
  })
})
