const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.issues.{lock,unlock}()', () => {
    const GitHubMock = fixtures.mock('api.github.com/lock-issue')

    const github = new GitHub()

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.lock({
      owner: 'octokit-fixture-org',
      repo: 'lock-issue',
      number: 1
    })

    .then(() => {
      return github.issues.unlock({
        owner: 'octokit-fixture-org',
        repo: 'lock-issue',
        number: 1
      })
    })

    .then((response) => {
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
