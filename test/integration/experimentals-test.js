const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('authentication plugin', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      baseUrl: 'https://authentication-plugin-test-host.com'
    })
  })

  it('OAuth authentication with URL containing ?', () => {
    nock('https://authentication-plugin-test-host.com')
      .get('/')
      .query({foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return github.request({
      url: '/?foo=bar'
    })
  })
})
