const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('request errors', () => {
  it('timeout', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .socketDelay(2000)
      .reply(200, {})

    const github = new GitHub({
      host: 'request-errors-test.com',
      timeout: 1000
    })

    return github.orgs.get({org: 'myorg'})

    .catch(error => {
      error.code.should.equal(504)
      error.should.have.property('stack')
    })
  })

  it('500', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .replyWithError('ooops')

    const github = new GitHub({
      host: 'request-errors-test.com',
      timeout: 1000
    })

    return github.orgs.get({org: 'myorg'})

    .catch(error => {
      error.code.should.equal(500)
      error.should.have.property('stack')
    })
  })

  it('404', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(404, 'not found')

    const github = new GitHub({
      host: 'request-errors-test.com',
      timeout: 1000
    })

    return github.orgs.get({org: 'myorg'})

    .catch(error => {
      error.code.should.equal(404)
      error.should.have.property('stack')
    })
  })
})
