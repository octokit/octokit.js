const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('add-labels-to-issue')

      .then(instance => {
        github = instance
      })
  })

  it.skip('(#587) add-labels-to-issue-test (skipping due to https://github.com/octokit/routes/releases/tag/v14.7.0)', () => {
    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.create({
      owner: 'octokit-fixture-org',
      repo: 'add-labels-to-issue',
      title: 'Issue without a label'
    })

      .then(() => {
        return github.issues.addLabels({
          owner: 'octokit-fixture-org',
          repo: 'add-labels-to-issue',
          number: 1,
          labels: [
            'Foo',
            'bAr',
            'baZ'
          ]
        })
      })
  })
})
