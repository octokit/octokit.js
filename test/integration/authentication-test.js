const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

describe('authentication', () => {
  beforeEach(function () {
    this.github = new GitHub({
      host: 'authentication-test-host.com'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))
    github.plugin(require('../../lib/plugins/authentication'))
  })

  it('basic', function () {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    this.github.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    return this.github.orgs.get({org: 'myorg'})
  })

  it('token', function () {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    this.github.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    return this.github.orgs.get({org: 'myorg'})
  })

  it('oauth token', function () {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({access_token: 'abc4567'})
      .reply(200, {})

    this.github.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return this.github.orgs.get({org: 'myorg'})
  })

  it('oauth token with query', function () {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({per_page: 1, access_token: 'abc4567'})
      .reply(200, [])

    this.github.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return this.github.repos.getForOrg({org: 'myorg', per_page: 1})
  })

  it('oauth key & secret', function () {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    this.github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return this.github.orgs.get({org: 'myorg'})
  })

  it('oauth key & secret with query', function () {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({per_page: 1, client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, [])

    this.github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return this.github.repos.getForOrg({org: 'myorg', per_page: 1})
  })

  it('integration', function () {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    this.github.authenticate({
      type: 'integration',
      token: 'abc4567'
    })

    return this.github.orgs.get({org: 'myorg'})
  })

  it('authenticate without options', function () {
    this.github.authenticate()
  })

  it('authenticate errors', function () {
    expect(() => {
      this.github.authenticate({})
    }).to.throw(Error)

    expect(() => {
      this.github.authenticate({type: 'basic'})
    }).to.throw(Error)

    expect(() => {
      this.github.authenticate({type: 'oauth'})
    }).to.throw(Error)

    expect(() => {
      this.github.authenticate({type: 'token'})
    }).to.throw(Error)
  })
})
