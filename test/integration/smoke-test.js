const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const should = chai.should()

describe('constructor', () => {
  it('called as function', () => {
    GitHub()
  })

  it('host & pathPrefix options', () => {
    nock('https://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      host: 'myhost.com',
      pathPrefix: '/my/api/'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('has .getReposApi() method', () => {
    const github = new GitHub()
    const api = github.getReposApi()
    api.getAll.should.be.a('function')
  })

  it('callback', (done) => {
    nock('https://api.github.com')
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub()

    github.orgs.get({org: 'myorg'}, done)
  })

  it('custom header', () => {
    nock('https://api.github.com')
      .get('/orgs/octokit')
      .reply(200, {})

    const github = new GitHub()

    const customHeaders = {
      'User-Agent': 'blah'
    }

    github.orgs.get({
      org: 'octokit',
      headers: customHeaders
    })
  })

  it('pagination', () => {
    nock('https://api.github.com')
      .get('/organizations')
      .query(true)
      .reply(200, [{}], {
        'Link': '<https://api.github.com/organizations?since=3>; rel="next", <https://api.github.com/organizations?since=0>; rel="first", <https://api.github.com/organizations?since=1>; rel="prev"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })

      .get('/organizations')
      .query({since: 0})
      .reply(200, [{}])
      .get('/organizations')
      .query({since: 1})
      .reply(200, [{}])
      .get('/organizations')
      .query({since: 3})
      .reply(404, {})

    const github = new GitHub()

    github.orgs.getAll({
      org: 'octokit',
      per_page: 1,
      page: 2
    })

    .then((result) => {
      github.hasNextPage(result).should.be.a('string')
      github.hasPreviousPage(result).should.be.a('string')
      github.hasFirstPage(result).should.be.a('string')
      should.not.exist(github.hasLastPage(result))

      const customHeaders = {foo: 'bar'}
      const callback = () => {}
      github.getFirstPage(result, callback)
      github.getPreviousPage(result, customHeaders)
      github.getNextPage(result).catch(callback)
      github.getLastPage(result, customHeaders, (error) => {
        error.code.should.equal('404')
      })

      // test error with promise
      github.getLastPage(result).catch(callback)

      // getNextPage(link, headers, callback)
      // getPreviousPage(link, headers, callback)
      // getFirstPage(link, headers, callback)
      // getLastPage(link, headers, callback)
    })
  })
})
