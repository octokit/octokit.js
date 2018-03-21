const stringToArrayBuffer = require('string-to-arraybuffer')
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

  it('github.repos.uploadAsset as Buffer', () => {
    return github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

      .then(result => {
        return github.repos.uploadAsset({
          url: result.data.upload_url,
          file: Buffer.from('Hello, world!\n'),
          contentType: 'text/plain',
          contentLength: 14,
          name: 'test-upload.txt',
          label: 'test'
        })
      })
  })

  it('github.repos.uploadAsset as ArrayBuffer', () => {
    return github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

      .then(result => {
        return github.repos.uploadAsset({
          url: result.data.upload_url,
          file: stringToArrayBuffer('Hello, world!\n'),
          contentType: 'text/plain',
          contentLength: 14,
          name: 'test-upload.txt',
          label: 'test'
        })
      })
  })
})
