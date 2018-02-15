const nock = require('nock')

const GitHub = require('../../')

describe('authentication plugin', () => {
  beforeEach(function () {
    this.github = new GitHub({
      host: 'authentication-plugin-test-host.com'
    })
  })

  it('OAuth authentication with URL containing ?', function () {
    nock('https://authentication-plugin-test-host.com')
      .get('/')
      .query({foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    this.github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return this.github.request({
      url: '/?foo=bar'
    })
  })
})
