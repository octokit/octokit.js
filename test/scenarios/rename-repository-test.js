const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('rename-repository')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.repos.get() with previous name (https://github.com/cypress-io/cypress/issues/1314)', () => {
    return github.repos.update({
      owner: 'octokit-fixture-org',
      repo: 'rename-repository',
      name: 'rename-repository-newname'
    })

      .then(() => {
        return github.repos.get({
          owner: 'octokit-fixture-org',
          repo: 'rename-repository'
        })
      })

      .then(() => {
        return github.repos.update({
          owner: 'octokit-fixture-org',
          repo: 'rename-repository',
          name: 'rename-repository-newname',
          description: 'test description'
        })
      })
  })
})
