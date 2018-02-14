const btoa = require('btoa-lite')

const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('create-file')

    .then(github => {
      this.github = github
      github.plugin(require('../../lib/plugins/authentication'))
      github.plugin(require('../../lib/plugins/endpoint-methods'))

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.repos.createFile()', function () {
    return this.github.repos.createFile({
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
