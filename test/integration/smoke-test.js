const nock = require('nock')

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

    return github.orgs.get({org: 'myorg'})
  })

  it('callback', (done) => {
    nock('https://smoke-test.com')
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    github.orgs.get({org: 'myorg'}, done)
  })

  it('custom header', () => {
    nock('https://smoke-test.com')
      .get('/orgs/octokit')
      .reply(200, {})

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    const customHeaders = {
      'User-Agent': 'blah'
    }

    github.orgs.get({
      org: 'octokit',
      headers: customHeaders
    })
  })

  it('pagination', (done) => {
    nock('https://smoke-test.com', {
      reqheaders: {
        authorization: 'token secrettoken123',
        'user-agent': `octokit/rest.js v0.0.0-semantically-released`
      }
    })
      .get('/organizations')
      .query({page: 3, per_page: 1})
      .reply(200, [{}], {
        'Link': '<https://smoke-test.com/organizations?page=4&per_page=1>; rel="next", <https://smoke-test.com/organizations?page=1&per_page=1>; rel="first", <https://smoke-test.com/organizations?page=2&per_page=1>; rel="prev"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({page: 1, per_page: 1})
      .reply(200, [{}])
      .get('/organizations')
      .query({page: 2, per_page: 1})
      .reply(200, [{}])
      .get('/organizations')
      .query({page: 4, per_page: 1})
      .reply(404, {})

    const github = new GitHub({
      baseUrl: 'https://smoke-test.com'
    })

    github.authenticate({
      type: 'token',
      token: 'secrettoken123'
    })

    github.orgs.getAll({
      page: 3,
      per_page: 1
    })

      .then((result) => {
        expect(github.hasNextPage(result)).to.be.a('string')
        expect(github.hasPreviousPage(result)).to.be.a('string')
        expect(github.hasFirstPage(result)).to.be.a('string')
        expect(github.hasLastPage(result)).to.be.an('undefined')

        const callback = () => {}

        return Promise.all([
          new Promise((resolve, reject) => {
            github.getFirstPage(result, (error, result) => {
              if (error) {
                return reject(error)
              }

              expect(() => {
                github.hasPreviousPage(result)
              }).to.not.throw()
              expect(github.hasPreviousPage(result)).to.be.an('undefined')

              resolve()
            })
          }),
          github.getPreviousPage(result, {foo: 'bar', accept: 'application/vnd.github.v3+json'}),
          github.getNextPage(result).catch(callback),
          new Promise(resolve => {
            github.getLastPage(result, { foo: 'bar' }, (error) => {
              expect(error.code).to.equal(404)
              resolve()
            })
          }),
          // test error with promise
          github.getLastPage(result).catch(callback)
        ])
      })

      .then(() => {
        done()
      })

      .catch(done)
  })
})
