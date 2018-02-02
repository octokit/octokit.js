const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('(#587) add-labels-to-issue-test', () => {
    const githubUserA = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.issues.create({
      owner: 'octokit-fixture-org',
      repo: 'add-labels-to-issue',
      title: 'Issue without a label',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then(() => {
      return githubUserA.issues.addLabels({
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
