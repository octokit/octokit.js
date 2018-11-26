const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

describe('authentication plugin', () => {
  let octokit

  beforeEach(() => {
    octokit = new Octokit({
      baseUrl: 'https://authentication-plugin-test-host.com'
    })
  })

  it('OAuth authentication with URL containing ?', () => {
    nock('https://authentication-plugin-test-host.com')
      .get('/')
      .query({ foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, {})

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return octokit.request({
      url: '/?foo=bar'
    })
  })
})
