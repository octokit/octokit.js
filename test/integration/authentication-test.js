const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('authentication', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      baseUrl: 'https://authentication-test-host.com'
    })
  })

  it('basic', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    github.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('token', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    github.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('oauth token', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({access_token: 'abc4567'})
      .reply(200, {})

    github.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('oauth token with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({per_page: 1, access_token: 'abc4567'})
      .reply(200, [])

    github.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return github.repos.getForOrg({org: 'myorg', per_page: 1})
  })

  it('oauth key & secret', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('oauth key & secret with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({per_page: 1, client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, [])

    github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return github.repos.getForOrg({org: 'myorg', per_page: 1})
  })

  it('app with token', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    github.authenticate({
      type: 'app',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('app with appTokenGenerator', () => {
    const tokenGenerator = () => 'abcdef'

    nock('https://authentication-test-host.com', {
      reqheaders: {
        accept: 'application/vnd.github.machine-man-preview+json',
        authorization: 'Bearer abcdef'
      }
    })
      .get('/app/installations')
      .reply(200, {})

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer v.xyx789'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    github.authenticate({
      type: 'app',
      appTokenGenerator: tokenGenerator
    })

    return github.apps.getInstallations({})
  })

  it('app with appTokenGenerator and installationId - reusing cached token', () => {
    const tokenGenerator = () => 'abcdef'

    nock('https://authentication-test-host.com', {
      reqheaders: {
        accept: 'application/vnd.github.machine-man-preview+json',
        authorization: 'Bearer abcdef'
      }
    })
      .post('/app/installations/456/access_tokens')
      .once()
      .reply(201, {
        'token': 'v.xyx789',
        'expires_at': '2118-09-01T00:00:00Z'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer v.xyx789'
      }
    })
      .get('/orgs/myorg')
      .twice()
      .reply(200, {})

    github.authenticate({
      type: 'app',
      appTokenGenerator: tokenGenerator,
      installationId: 456
    })

    return github.orgs.get({org: 'myorg'}).then(() => {
      // Make a second request to prove that the token is reused
      github.orgs.get({org: 'myorg'})
    })
  })

  it('app with appTokenGenerator and installationId - requesting new token after expiry', () => {
    const tokenGenerator = () => {
      return 'abcdef'
    }

    nock('https://authentication-test-host.com', {
      reqheaders: {
        accept: 'application/vnd.github.machine-man-preview+json',
        authorization: 'Bearer abcdef'
      }
    })
      .post('/app/installations/456/access_tokens')
      .once()
      .reply(201, {
        'token': 'v.xyx789',
        'expires_at': '2008-09-01T00:00:00Z'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        accept: 'application/vnd.github.machine-man-preview+json',
        authorization: 'Bearer abcdef'
      }
    })
      .post('/app/installations/456/access_tokens')
      .once()
      .reply(201, {
        'token': 'v.ghj567',
        'expires_at': '2008-09-01T00:00:00Z'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer v.xyx789'
      }
    })
      .get('/orgs/myorg')
      .once()
      .reply(200, {})

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer v.ghj567'
      }
    })
      .get('/orgs/myorg')
      .once()
      .reply(200, {})

    github.authenticate({
      type: 'app',
      appTokenGenerator: tokenGenerator,
      installationId: 456
    })

    return github.orgs.get({org: 'myorg'}).then(() => {
      // Make a second request to prove that the token is rerequested
      github.orgs.get({org: 'myorg'})
    }).catch(() => {})
  })

  it('authenticate without options', () => {
    github.authenticate()
  })

  it('authenticate errors', () => {
    expect(() => {
      github.authenticate({})
    }).to.throw(Error)

    expect(() => {
      github.authenticate({type: 'basic'})
    }).to.throw(Error)

    expect(() => {
      github.authenticate({type: 'oauth'})
    }).to.throw(Error)

    expect(() => {
      github.authenticate({type: 'token'})
    }).to.throw(Error)
  })
})
