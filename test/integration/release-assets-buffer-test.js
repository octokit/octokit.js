const chai = require('chai')
const fixtures = require('@octokit/fixtures')
const stringToArrayBuffer = require('string-to-arraybuffer')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    github = new GitHub()
    github.plugin(require('../../lib/plugins/authentication'))
    github.plugin(require('../../lib/plugins/endpoint-methods'))
  })

  it('github.repos.uploadAsset as Buffer', () => {
    fixtures.mock('api.github.com/release-assets')
    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

    .then(result => {
      const content = Buffer.from('Hello, world!\n')
      return github.repos.uploadAsset({
        url: result.data.upload_url,
        file: content,
        contentType: 'text/plain',
        contentLength: 14,
        name: 'test-upload.txt',
        label: 'test'
      })
    })
  })

  it('github.repos.uploadAsset as ArrayBuffer', () => {
    fixtures.mock('api.github.com/release-assets')

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

    .then(result => {
      const content = stringToArrayBuffer('Hello, world!\n')
      return github.repos.uploadAsset({
        url: result.data.upload_url,
        file: content,
        contentType: 'text/plain',
        contentLength: 14,
        name: 'test-upload.txt',
        label: 'test'
      })
    })
  })
})
