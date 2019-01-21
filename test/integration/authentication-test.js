const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

describe('authentication', () => {
  let octokit

  beforeEach(() => {
    octokit = new Octokit({
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

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('basic with 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('basic with async 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return Promise.resolve(123456)
      }
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('basic with 2fa and invalid one-time-password', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    return octokit.orgs.get({ org: 'myorg' })

      .then(() => {
        throw new Error('should not resolve')
      })

      .catch(error => {
        expect(error.message).to.match(/Invalid one-time password/i)
      })
  })

  it('basic without 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    return octokit.orgs.get({ org: 'myorg' })
      .then(() => {
        throw new Error('should fail with "on2fa missing" error')
      })
      .catch(error => {
        expect(error.message).to.equal('2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication')
        expect(error.status).to.equal(401)
        expect(!!error.headers).to.equal(true)
        expect(!!error.request).to.equal(true)
      })
  })

  it('token', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    octokit.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('oauth token', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ access_token: 'abc4567' })
      .reply(200, {})

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('oauth token with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({ per_page: 1, access_token: 'abc4567' })
      .reply(200, [])

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return octokit.repos.listForOrg({ org: 'myorg', per_page: 1 })
  })

  it('oauth key & secret', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, {})

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('oauth key & secret with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({ per_page: 1, client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, [])

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return octokit.repos.listForOrg({ org: 'myorg', per_page: 1 })
  })

  it('app', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    octokit.authenticate({
      type: 'app',
      token: 'abc4567'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('authenticate without options', () => {
    octokit.authenticate()
  })

  it('authenticate errors', () => {
    expect(() => {
      octokit.authenticate({})
    }).to.throw(Error)

    expect(() => {
      octokit.authenticate({ type: 'basic' })
    }).to.throw(Error)

    expect(() => {
      octokit.authenticate({ type: 'oauth' })
    }).to.throw(Error)

    expect(() => {
      octokit.authenticate({ type: 'token' })
    }).to.throw(Error)
  })
})
