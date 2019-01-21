const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

const Mocktokit = Octokit
  .plugin((octokit) => {
    octokit.hook.wrap('request', () => null)
  })

describe('deprecations', () => {
  beforeEach(() => {
    cy.stub(console, 'warn')
  })

  // deprecated methods
  it('octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)', () => {
    const octokit = new Mocktokit()

    return octokit.search.issues({ q: 'foo' })
      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('octokit.authenticate(): basic', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): basic with 2fa', () => {
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

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): basic with async 2fa', () => {
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

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return Promise.resolve(123456)
      }
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): basic with 2fa and invalid one-time-password', () => {
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

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })

      .then(() => {
        throw new Error('should not resolve')
      })

      .catch(error => {
        expect(error.message).to.match(/Invalid one-time password/i)
      })
  })

  it('octokit.authenticate(): basic without 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    expect(console.warn.callCount).to.equal(1)

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

  it('octokit.authenticate(): token', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth token', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ access_token: 'abc4567' })
      .reply(200, {})

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth token with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({ per_page: 1, access_token: 'abc4567' })
      .reply(200, [])

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.repos.listForOrg({ org: 'myorg', per_page: 1 })
  })

  it('octokit.authenticate(): oauth key & secret', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, {})

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth key & secret with query', () => {
    nock('https://authentication-test-host.com')
      .get('/')
      .query({ foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, [])

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/?foo=bar')
  })

  it('octokit.authenticate(): app', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const octokit = new Octokit({ baseUrl: 'https://authentication-test-host.com' })

    octokit.authenticate({
      type: 'app',
      token: 'abc4567'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): without options', () => {
    const octokit = new Octokit()
    octokit.authenticate()
    expect(console.warn.callCount).to.equal(1)
  })

  it('octokit.authenticate(): errors', () => {
    const octokit = new Octokit()

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

    expect(console.warn.callCount).to.equal(4)
  })

  it('octokit.authenticate() when "auth" option is set', () => {
    const octokit = new Octokit({
      auth: 'token secret123'
    })

    octokit.authenticate({
      type: 'token',
      token: 'secret123'
    })

    expect(console.warn.callCount).to.equal(1)
    expect(console.warn.lastCall.lastArg).to.match(/octokit\.authenticate\(\) is deprecated and has no effect/)
  })

  // deprecated client options
  it('agent option', () => {
    const octokit = new Octokit({
      agent: 'agent'
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.agent).to.equal('agent')
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('timeout option', () => {
    const octokit = new Octokit({
      timeout: 123
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.timeout).to.equal(123)
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers["User-Agent"] option', () => {
    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com',
      headers: {
        'User-Agent': 'blah'
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers['user-agent']).to.match(/^blah octokit\.js\/0\.0\.0-semantically-released /)
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers.accept option', () => {
    const octokit = new Octokit({
      headers: {
        accept: 'application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json'
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers.accept).to.equal('application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json')
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })
})
