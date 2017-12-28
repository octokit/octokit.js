const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const should = chai.should()

describe('smoke', () => {
  it('called as function', () => {
    GitHub()
  })

  it('host & pathPrefix options', () => {
    nock('http://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      host: 'myhost.com',
      protocol: 'http',
      pathPrefix: '/my/api/'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('callback', (done) => {
    nock('https://smoke-test.com')
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      host: 'smoke-test.com'
    })

    github.orgs.get({org: 'myorg'}, done)
  })

  it('custom header', () => {
    nock('https://smoke-test.com')
      .get('/orgs/octokit')
      .reply(200, {})

    const github = new GitHub({
      host: 'smoke-test.com'
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
    nock('https://smoke-test.com')
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
      host: 'smoke-test.com'
    })

    github.orgs.getAll({
      page: 3,
      per_page: 1
    })

    .then((result) => {
      github.hasNextPage(result).should.be.a('string')
      github.hasPreviousPage(result).should.be.a('string')
      github.hasFirstPage(result).should.be.a('string')
      should.not.exist(github.hasLastPage(result))

      const customHeaders = {foo: 'bar'}
      const callback = () => {}

      github.getFirstPage(result, (error, result) => {
        if (error) {
          return done(error)
        }

        should.not.throw(() => {
          github.hasPreviousPage(result)
        })
        should.not.exist(github.hasPreviousPage(result))

        done()
      })
      github.getPreviousPage(result, customHeaders)
      github.getNextPage(result).catch(callback)
      github.getLastPage(result, customHeaders, (error) => {
        error.code.should.equal('404')
      })

      // test error with promise
      github.getLastPage(result).catch(callback)
    })
  })
})
