const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('create-status')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.repos.createStatus()', () => {
    return Promise.all([
      github.repos.createStatus({
        owner: 'octokit-fixture-org',
        repo: 'create-status',
        sha: '0000000000000000000000000000000000000001',
        state: 'failure',
        target_url: 'https://example.com',
        description: 'create-status failure test',
        context: 'example/1'
      }),
      github.repos.createStatus({
        owner: 'octokit-fixture-org',
        repo: 'create-status',
        sha: '0000000000000000000000000000000000000001',
        state: 'success',
        target_url: 'https://example.com',
        description: 'create-status success test',
        context: 'example/2'
      })
    ])

      .then(() => {
        return github.repos.getStatuses({
          owner: 'octokit-fixture-org',
          repo: 'create-status',
          ref: '0000000000000000000000000000000000000001'
        })
      })

      .then((response) => {
        expect(response.data.length).to.equal(2)

        return github.repos.getCombinedStatusForRef({
          owner: 'octokit-fixture-org',
          repo: 'create-status',
          ref: '0000000000000000000000000000000000000001'
        })
      })

      .then((response) => {
        expect(response.data.state).to.equal('failure')
      })
  })
})
