const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/826', () => {
  it('throws error on 304 responses', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/octokit/repos?type=public')
      .reply(304, '')

    const client = new Octokit({
      baseUrl: 'https://request-errors-test.com'
    })
    return client.repos.getForOrg({
      org: 'octokit',
      type: 'public'
    })
      .then((response) => {
        expect.fail('should throw error')
      })
      .catch(error => {
        expect(error.code).to.equal(304)
      })
  })
})
