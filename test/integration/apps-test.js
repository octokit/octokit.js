const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('apps', () => {
  let client

  beforeEach(() => {
    client = new GitHub({
      baseUrl: 'https://apps-test-host.com'
    })
  })

  it('adds "machine-man" preview header', () => {
    nock('https://apps-test-host.com', {
      reqheaders: {
        authorization: 'Bearer 123',
        accept: 'application/vnd.github.v3+json,application/vnd.github.machine-man-preview+json'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    client.authenticate({
      type: 'app',
      token: '123'
    })

    return client.orgs.get({ org: 'myorg' })
  })

  it('adds "machine-man" preview header to custom accept header', () => {
    nock('https://apps-test-host.com', {
      reqheaders: {
        authorization: 'Bearer 123',
        accept: 'foo-bar,application/vnd.github.machine-man-preview+json'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    client.authenticate({
      type: 'app',
      token: '123'
    })

    return client.orgs.get({
      org: 'myorg',
      headers: {
        accept: 'foo-bar'
      }
    })
  })

  it('does not add "machine-man" preview header if it is already set', () => {
    nock('https://apps-test-host.com', {
      reqheaders: {
        authorization: 'Bearer 123',
        accept: 'application/vnd.github.machine-man-preview+json'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    client.authenticate({
      type: 'app',
      token: '123'
    })

    return client.orgs.get({
      org: 'myorg',
      headers: {
        accept: 'application/vnd.github.machine-man-preview+json'
      }
    })
  })

  it('adds "mercy" and "machine-man" preview headers when authenticated as installation', () => {
    nock('https://apps-test-host.com', {
      reqheaders: {
        authorization: 'token xyz-installation-token',
        accept: 'application/vnd.github.mercy-preview+json,application/vnd.github.machine-man-preview+json'
      }
    })
      .get('/installation/repositories')
      .reply(200, {})

    client.authenticate({
      type: 'token',
      token: 'xyz-installation-token'
    })

    return client.apps.getInstallationRepositories({})
  })
})
