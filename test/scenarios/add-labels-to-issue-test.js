const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('add-labels-to-issue')

    .then(github => {
      this.github = github
    })
  })

  it('(#587) add-labels-to-issue-test', function () {
    this.github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return this.github.issues.create({
      owner: 'octokit-fixture-org',
      repo: 'add-labels-to-issue',
      title: 'Issue without a label',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then(() => {
      return this.github.issues.addLabels({
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
