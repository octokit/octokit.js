const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('release-assets')

    .then(github => {
      this.github = github

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.repos.*Assets', function () {
    let releaseId
    let assetId

    return this.github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

    .then(result => {
      releaseId = result.data.id

      return this.github.repos.uploadAsset({
        url: result.data.upload_url,
        file: 'Hello, world!\n',
        contentType: 'text/plain',
        contentLength: 14,
        name: 'test-upload.txt',
        label: 'test'
      })
    })

    .then(result => {
      assetId = releaseId

      return this.github.repos.getAssets({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: releaseId
      })
    })

    .then(result => {
      return this.github.repos.getAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId
      })
    })

    .then(result => {
      return this.github.repos.editAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId,
        name: 'new-filename.txt',
        label: 'new label'
      })
    })

    .then(result => {
      return this.github.repos.deleteAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId
      })
    })
  })
})
