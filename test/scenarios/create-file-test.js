const btoa = require('btoa-lite')
const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.repos.createFile()', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    github.plugin(require('../../lib/plugins/authentication'))
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.repos.createFile({
      owner: 'octokit-fixture-org',
      repo: 'create-file',
      path: 'test.txt',
      message: 'create test.txt',
      content: btoa('Test content')
    })

    .then((response) => {
      response.data.content.type.should.equal('file')
    })
  })
})
