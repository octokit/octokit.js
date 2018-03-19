const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/818', () => {
  it('octokit.apps.getInstallations()', () => {
    nock('https://api.github.com')
      .get('/app/installations')
      .reply(200, [])

    const client = new Octokit()
    return client.apps.getInstallations()
  })
})
