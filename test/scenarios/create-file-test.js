const btoa = require('btoa-lite')

const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('create-file')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.repos.createFile()', () => {
    return github.repos.createFile({
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
