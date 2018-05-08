const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/727', () => {
  it('sends request to correct baseUrl', () => {
    nock('https://github.domain.com')
      .get('/orgs/frontendgine/repos')
      .query({type: 'public'})
      .reply(200, [])

    const client = new Octokit({
      baseUrl: 'https://github.domain.com'
    })

    client.repos.getForOrg({
      org: 'frontendgine',
      type: 'public'
    })
  })
})
