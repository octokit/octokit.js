const {getInstance} = require('../util')

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
    return github.repos.edit({
      owner: 'octokit-fixture-org',
      repo: 'rename-repository',
      name: 'rename-repository-newname',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then(() => {
      return github.repos.get({
        owner: 'octokit-fixture-org',
        repo: 'rename-repository',
        // TODO: remove once #587 is resolved
        headers: {
          accept: 'application/vnd.github.v3+json'
        }
      })
    })

    .then(() => {
      return github.repos.edit({
        owner: 'octokit-fixture-org',
        repo: 'rename-repository',
        // TODO: remove once #587 is resolved
        headers: {
          accept: 'application/vnd.github.v3+json'
        },
        name: 'rename-repository-newname',
        description: 'test description'
      })
    })
  })
})
