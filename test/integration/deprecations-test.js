const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

const Mocktokit = Octokit
  .plugin((octokit) => {
    octokit.hook.wrap('request', () => null)
  })

describe('deprecations', () => {
  it('octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)', () => {
    let warnCalled = false
    const octokit = new Mocktokit({
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    return octokit.search.issues({ q: 'foo' })
      .then(() => {
        expect(warnCalled).to.equal(true)
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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return Promise.resolve(123456)
      }
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password',
      on2fa () {
        return 123456
      }
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    expect(warnCalled).to.equal(true)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth token', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ access_token: 'abc4567' })
      .reply(200, {})

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    expect(warnCalled).to.equal(true)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth token with query', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg/repos')
      .query({ per_page: 1, access_token: 'abc4567' })
      .reply(200, [])

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    expect(warnCalled).to.equal(true)

    return octokit.repos.listForOrg({ org: 'myorg', per_page: 1 })
  })

  it('octokit.authenticate(): oauth key & secret', () => {
    nock('https://authentication-test-host.com')
      .get('/orgs/myorg')
      .query({ client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, {})

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    expect(warnCalled).to.equal(true)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): oauth key & secret with query', () => {
    nock('https://authentication-test-host.com')
      .get('/')
      .query({ foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret' })
      .reply(200, [])

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    expect(warnCalled).to.equal(true)

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

    let warnCalled = false
    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate({
      type: 'app',
      token: 'abc4567'
    })

    expect(warnCalled).to.equal(true)

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('octokit.authenticate(): without options', () => {
    let warnCalled = false
    const octokit = new Octokit({
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.authenticate()
    expect(warnCalled).to.equal(true)
  })

  it('octokit.authenticate(): errors', () => {
    let warnCalledCount = 0
    const octokit = new Octokit({
      log: {
        warn: () => {
          warnCalledCount++
        }
      }
    })

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

    expect(warnCalledCount).to.equal(4)
  })

  it('octokit.authenticate() when "auth" option is set', () => {
    let warnCalledWith
    const octokit = new Octokit({
      auth: 'token secret123',
      log: {
        warn: (message) => {
          warnCalledWith = message
        }
      }
    })

    octokit.authenticate({
      type: 'token',
      token: 'secret123'
    })

    expect(warnCalledWith).to.match(/octokit\.authenticate\(\) is deprecated and has no effect/)
  })

  // deprecated client options
  it('agent option', () => {
    let warnCalled = false
    const octokit = new Octokit({
      agent: 'agent',
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.agent).to.equal('agent')
      return 'ok'
    })

    expect(warnCalled).to.equal(true)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('timeout option', () => {
    let warnCalled = false
    const octokit = new Octokit({
      timeout: 123,
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.timeout).to.equal(123)
      return 'ok'
    })

    expect(warnCalled).to.equal(true)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers["User-Agent"] option', () => {
    let warnCalled = false
    const octokit = new Octokit({
      headers: {
        'User-Agent': 'blah'
      },
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers['user-agent']).to.match(/^blah octokit\.js\/0\.0\.0-semantically-released /)
      return 'ok'
    })

    expect(warnCalled).to.equal(true)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers.accept option', () => {
    let warnCalled = false
    const octokit = new Octokit({
      headers: {
        accept: 'application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json'
      },
      log: {
        warn: () => {
          warnCalled = true
        }
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers.accept).to.equal('application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json')
      return 'ok'
    })

    expect(warnCalled).to.equal(true)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })
})
