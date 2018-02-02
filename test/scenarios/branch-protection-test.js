const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.repos.{get,update,remove}BranchProtection()', () => {
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
  })
})
