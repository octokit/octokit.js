const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('lock-issue')

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

  it('github.issues.{lock,unlock}()', function () {
    return this.github.issues.lock({
      owner: 'octokit-fixture-org',
      repo: 'lock-issue',
      number: 1
    })

    .then(() => {
      return this.github.issues.unlock({
        owner: 'octokit-fixture-org',
        repo: 'lock-issue',
        number: 1
      })
    })
  })
})
