const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('request 304s', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      baseUrl: 'https://request-errors-test.com'
    })
  })

  it('304 etag', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    return github.orgs.get({org: 'myorg', headers: {'If-None-Match': 'etag'}})

      .catch(exception => {
        expect(exception.code).to.equal(304)
      })
  })
  it('304 last-modified', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    return github.orgs.get({org: 'myorg', headers: {'If-Modified-Since': 'Sun Dec 24 2017 22:00:00 GMT-0600 (CST)'}})

      .catch(exception => {
        expect(exception.code).to.equal(304)
      })
  })
})
