const nock = require('nock')
const getUserAgent = require('universal-user-agent')

const Octokit = require('../../')

require('../mocha-node-setup')

describe('smoke', () => {
  it('called as function', () => {
    Octokit()
  })

  it('baseUrl option', () => {
    nock('http://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'http://myhost.com/my/api'
    })

    return octokit.orgs.get({ org: 'myorg' })
  })

  it('headers["User-Agent"] option', () => {
    nock('https://smoke-test.com', {
      reqheaders: {
        'user-agent': `blah octokit.js/0.0.0-semantically-released ${getUserAgent()}`
      }
    })
      .get('/orgs/octokit')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com',
      headers: {
        'User-Agent': 'blah'
      }
    })

    return octokit.orgs.get({
      org: 'octokit'
    })
  })

  it('headers.accept option', () => {
    nock('https://smoke-test.com', {
      reqheaders: {
        'accept': 'foo'
      }
    })
      .get('/orgs/octokit')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com',
      headers: {
        accept: 'foo'
      }
    })

    return octokit.orgs.get({
      org: 'octokit'
    })
  })

  it('response.status & response.headers', () => {
    nock('http://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {}, { 'x-foo': 'bar' })

    const octokit = new Octokit({
      baseUrl: 'http://myhost.com/my/api'
    })

    return octokit.orgs.get({ org: 'myorg' })

      .then(response => {
        expect(response.headers['x-foo']).to.equal('bar')
        expect(response.status).to.equal(200)
      })
  })

  it('.request("GET /")', () => {
    nock('https://smoke-test.com', {
      reqheaders: {
        'accept': 'application/vnd.github.v3+json'
      }
    })
      .get('/')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com'
    })
    return octokit.request('GET /')
  })

  it('.request.endpoint("GET /")', () => {
    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com'
    })

    const requestOptions = octokit.request.endpoint('GET /')
    expect(requestOptions).to.deep.equal({
      method: 'GET',
      url: 'https://smoke-test.com/',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': `octokit.js/0.0.0-semantically-released ${getUserAgent()}`
      },
      request: {}
    })
  })

  it('.registerEndpoints()', () => {
    nock('https://smoke-test.com')
      .get('/baz')
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com'
    })
    expect(octokit.registerEndpoints).to.be.a('function')

    octokit.registerEndpoints({
      issues: {
        fooBar: {
          method: 'GET',
          url: '/baz'
        }
      }
    })

    // make sure .registerEndpoints does not remove other methods on the same scope
    expect(octokit.issues.get).to.be.a('function')

    return octokit.issues.fooBar()
  })
})
