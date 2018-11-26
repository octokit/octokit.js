const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('lock-issue')

      .then(instance => {
        octokit = instance

        octokit.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('octokit.issues.{lock,unlock}()', () => {
    return octokit.issues.lock({
      owner: 'octokit-fixture-org',
      repo: 'lock-issue',
      number: 1
    })

      .then(() => {
        return octokit.issues.unlock({
          owner: 'octokit-fixture-org',
          repo: 'lock-issue',
          number: 1
        })
      })
  })
})
