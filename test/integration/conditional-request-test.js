const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

chai.should()

describe('request 304s', () => {
  beforeEach(function () {
    this.github = new GitHub({
      host: 'request-errors-test.com'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))
  })

  it('304 etag', function () {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    return this.github.orgs.get({org: 'myorg', headers: {'If-None-Match': 'etag'}})

    .catch(exception => {
      exception.code.should.equal(304)
    })
  })
  it('304 last-modified', function () {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    return this.github.orgs.get({org: 'myorg', headers: {'If-Modified-Since': 'Sun Dec 24 2017 22:00:00 GMT-0600 (CST)'}})

    .catch(exception => {
      exception.code.should.equal(304)
    })
  })
})
