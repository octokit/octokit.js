const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('release-assets')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.repos.*Assets', () => {
    let releaseId
    let assetId

    return github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

      .then(result => {
        releaseId = result.data.id

        return github.repos.uploadAsset({
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

        return github.repos.getAssets({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          id: releaseId
        })
      })

      .then(result => {
        return github.repos.getAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          id: assetId
        })
      })

      .then(result => {
        return github.repos.editAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          id: assetId,
          name: 'new-filename.txt',
          label: 'new label'
        })
      })

      .then(result => {
        return github.repos.deleteAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          id: assetId
        })
      })
  })
})
