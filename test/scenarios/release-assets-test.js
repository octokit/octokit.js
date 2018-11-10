const { getInstance } = require('../util')

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

        return github.repos.uploadReleaseAsset({
          url: result.data.upload_url,
          headers: {
            'content-type': 'text/plain',
            'content-length': 14
          },
          file: 'Hello, world!\n',
          name: 'test-upload.txt',
          label: 'test'
        })
      })

      .then(result => {
        assetId = releaseId

        return github.repos.listAssetsForRelease({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          release_id: releaseId
        })
      })

      .then(result => {
        return github.repos.getReleaseAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          asset_id: assetId
        })
      })

      .then(result => {
        return github.repos.updateReleaseAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          asset_id: assetId,
          name: 'new-filename.txt',
          label: 'new label'
        })
      })

      .then(result => {
        return github.repos.deleteReleaseAsset({
          owner: 'octokit-fixture-org',
          repo: 'release-assets',
          asset_id: assetId
        })
      })
  })
})
