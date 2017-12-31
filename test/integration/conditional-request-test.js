const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('request 304s', () => {
  it('304 etag', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    const github = new GitHub({
      host: 'request-errors-test.com'
    })

    return github.orgs.get({org: 'myorg', headers: {'If-None-Match': 'etag'}})

    .catch(exception => {
      exception.code.should.equal(304)
    })
  })
  it('304 last-modified', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(304, '')

    const github = new GitHub({
      host: 'request-errors-test.com'
    })

    return github.orgs.get({org: 'myorg', headers: {'If-Modified-Since': 'Sun Dec 24 2017 22:00:00 GMT-0600 (CST)'}})

    .catch(exception => {
      exception.code.should.equal(304)
    })
  })
})
