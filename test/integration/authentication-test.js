const nock = require('nock')

const Octokit = require('../..')

require('../mocha-node-setup')

describe('authentication', () => {
  it('token', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: 'token abc4567'
    })

    return octokit.request('/')
  })

  it('basic', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password'
      }
    })

    return octokit.request('/')
  })

  it('basic with 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password',
        on2fa () {
          return 123456
        }
      }
    })

    return octokit.request('/')
  })

  it('basic with async 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password',
        on2fa () {
          return Promise.resolve(123456)
        }
      }
    })

    return octokit.request('/')
  })

  it('basic with 2fa and invalid one-time-password', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password',
        on2fa () {
          return 123456
        }
      }
    })

    return octokit.request('/')

      .then(() => {
        throw new Error('should not resolve')
      })

      .catch(error => {
        expect(error.message).to.match(/Invalid one-time password/i)
      })
  })

  it('basic with missing 2fa', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password'
      }
    })

    return octokit.request('/')

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

  it('app', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: 'Bearer abc4567'
    })

    return octokit.request('/')
  })

  it('oauth key & secret', () => {
    nock('https://authentication-test-host.com')
      .get('/')
      .query({ client_id: 'id123', client_secret: 'secret456' })
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        clientId: 'id123',
        clientSecret: 'secret456'
      }
    })

    return octokit.request('/')
  })

  it('oauth key & secret with "?" in URL', () => {
    nock('https://authentication-test-host.com')
      .get('/')
      .query({ foo: 'bar', client_id: 'id123', client_secret: 'secret456' })
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        clientId: 'id123',
        clientSecret: 'secret456'
      }
    })

    return octokit.request('/?foo=bar')
  })

  it('auth is function', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: () => 'token abc4567'
    })

    return octokit.request('/')
  })

  it('auth is async function', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: () => Promise.resolve('token abc4567')
    })

    return octokit.request('/')
  })

  /**
   * There is a special case for OAuth applications, when `clientId` and `clientSecret` is passed as
   * Basic Authorization instead of query parameters. The only routes where that applies share the same
   * URL though: `/applications/:client_id/tokens/:access_token`. We identify this acception by looking
   * for this path.
   *
   *  1. [Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
   *  2. [Reset an authorization](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
   *  3. [Revoke an authorization for an application](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)
   */
  it('OAuth client & secret to check authorization', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic aWQxMjM6c2VjcmV0NDU2'
      }
    })
      .get('/applications/id123/tokens/token123')
      .reply(200, {})
      .post('/applications/id123/tokens/token123')
      .reply(200, {})
      .delete('/applications/id123/tokens/token123')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        clientId: 'id123',
        clientSecret: 'secret456'
      }
    })

    const options = {
      client_id: 'id123',
      access_token: 'token123'
    }

    return Promise.all([
      octokit.request('GET /applications/:client_id/tokens/:access_token', options),
      octokit.request('POST /applications/:client_id/tokens/:access_token', options),
      octokit.request('DELETE /applications/:client_id/tokens/:access_token', options)
    ])
  })

  it('error to authenticated request', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/')
      .reply(404, {})

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: 'token abc4567'
    })

    return octokit.request('/')

      .catch(() => {})
  })

  it('invalid auth errors', () => {
    expect(() => {
      Octokit({ auth: {} })
    }).to.throw(Error)
  })
})
