const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('lock-issue')

    .then(instance => {
      github = instance

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.issues.{lock,unlock}()', () => {
    return github.issues.lock({
      owner: 'octokit-fixture-org',
      repo: 'lock-issue',
      number: 1
    })

    .then(() => {
      return github.issues.unlock({
        owner: 'octokit-fixture-org',
        repo: 'lock-issue',
        number: 1
      })
    })
  })
})
