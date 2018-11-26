const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('rename-repository')

      .then(instance => {
        octokit = instance

        octokit.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('octokit.repos.get() with previous name (https://github.com/cypress-io/cypress/issues/1314)', () => {
    return octokit.repos.update({
      owner: 'octokit-fixture-org',
      repo: 'rename-repository',
      name: 'rename-repository-newname'
    })

      .then(() => {
        return octokit.repos.get({
          owner: 'octokit-fixture-org',
          repo: 'rename-repository'
        })
      })

      .then(() => {
        return octokit.repos.update({
          owner: 'octokit-fixture-org',
          repo: 'rename-repository',
          name: 'rename-repository-newname',
          description: 'test description'
        })
      })
  })
})
