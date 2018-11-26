const btoa = require('btoa-lite')

const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('create-file')

      .then(instance => {
        octokit = instance

        octokit.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('octokit.repos.createFile()', () => {
    return octokit.repos.createFile({
      owner: 'octokit-fixture-org',
      repo: 'create-file',
      path: 'test.txt',
      message: 'create test.txt',
      content: btoa('Test content')
    })

      .then((response) => {
        expect(response.data.content.type).to.equal('file')
      })
  })
})
