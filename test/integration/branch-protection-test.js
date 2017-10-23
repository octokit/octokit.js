const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.repos.{get,update,remove}BranchProtection()', () => {
    const GitHubMock = fixtures.mock('api.github.com/branch-protection')

    const github = new GitHub()

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.repos.getBranchProtection({
      owner: 'octokit-fixture-org',
      repo: 'branch-protection',
      branch: 'master'
    })

    .catch(error => {
      if (/Branch not protected/.test(error.message)) {
        return
      }

      throw error
    })

    .then(() => {
      return github.repos.updateBranchProtection({
        owner: 'octokit-fixture-org',
        repo: 'branch-protection',
        branch: 'master',
        required_status_checks: null,
        required_pull_request_reviews: null,
        restrictions: null,
        enforce_admins: false
      })
    })

    .then(() => {
      return github.repos.updateBranchProtection({
        owner: 'octokit-fixture-org',
        repo: 'branch-protection',
        branch: 'master',
        required_status_checks: {
          strict: true,
          contexts: [
            'foo/bar'
          ]
        },
        required_pull_request_reviews: {
          dismissal_restrictions: {
            users: ['octokit-fixture-user-a'],
            teams: [] // bug: server returns "Only 100 users and teams can be specified." when set to ['a-team']
          },
          dismiss_stale_reviews: true,
          require_code_owner_reviews: false
        },
        restrictions: {
          users: ['octokit-fixture-user-a'],
          teams: ['a-team']
        },
        enforce_admins: true
      })
    })

    .then(() => {
      return github.repos.removeBranchProtection({
        owner: 'octokit-fixture-org',
        repo: 'branch-protection',
        branch: 'master'
      })
    })

    .then((response) => {
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
