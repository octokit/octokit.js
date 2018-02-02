const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

chai.should()

describe('authentication plugin', () => {
  it('OAuth authentication with URL containing ?', () => {
    nock('https://authentication-plugin-test-host.com')
      .get('/')
      .query({foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    const github = new GitHub({
      host: 'authentication-plugin-test-host.com'
    })

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
