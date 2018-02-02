const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('(#587) add-labels-to-issue-test', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    github.plugin(require('../../lib/plugins/authentication'))
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.create({
      owner: 'octokit-fixture-org',
      repo: 'add-labels-to-issue',
      title: 'Issue without a label',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
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
