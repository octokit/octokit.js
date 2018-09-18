const nock = require('nock')
const getUserAgent = require('universal-user-agent')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('smoke', () => {
  it('called as function', () => {
    GitHub()
  })

  it('host & pathPrefix options', () => {
    nock('http://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      baseUrl: 'http://myhost.com/my/api'
    })

    return github.orgs.get({ org: 'myorg' })
  })

  it('response.status & response.headers', () => {
    nock('http://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {}, { 'x-foo': 'bar' })

    const github = new GitHub({
      baseUrl: 'http://myhost.com/my/api'
    })

    return github.orgs.get({ org: 'myorg' })

      .then(response => {
        expect(response.headers['x-foo']).to.equal('bar')
        expect(response.status).to.equal(200)
      })
  })

  it('callback', (done) => {
    nock('https://smoke-test.com')
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    github.orgs.get({ org: 'myorg' }, done)
  })

  it('custom header', () => {
    nock('https://smoke-test.com', {
      reqheaders: {
        'user-agent': `blah octokit.js/0.0.0-semantically-released ${getUserAgent()}`
      }
    })
      .get('/orgs/octokit')
      .reply(200, {})

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    return github.orgs.get({
      org: 'octokit',
      headers: {
        'User-Agent': 'blah'
      }
    })
  })

  it('custom accept header', () => {
    nock('https://smoke-test.com', {
      reqheaders: {
        'accept': 'foo'
      }
    })
      .get('/orgs/octokit')
      .reply(200, {})
      .persist()

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    return Promise.all([
      github.orgs.get({
        org: 'octokit',
        headers: {
          accept: 'foo'
        }
      }),
      github.orgs.get({
        org: 'octokit',
        headers: {
          Accept: 'foo'
        }
      })
    ])
  })
})
