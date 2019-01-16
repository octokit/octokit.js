const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('add-labels-to-issue')

      .then(instance => {
        octokit = instance
      })
  })

  it('(#587) add-labels-to-issue-test', () => {
    octokit.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return octokit.issues.create({
      owner: 'octokit-fixture-org',
      repo: 'add-labels-to-issue',
      title: 'Issue without a label'
    })

      .then(() => {
        return octokit.issues.addLabels({
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
