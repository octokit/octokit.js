const chai = require('chai')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('missing argument', () => {
  it('github.orgs.get({})', () => {
    const github = new GitHub()

    return github.orgs.get({})

    .catch(error => {
      error.toString().should.equal('Empty value for parameter \'org\': undefined')
      error.toJSON().should.deep.equal({
        code: '400',
        message: 'Empty value for parameter \'org\': undefined',
        status: 'Bad Request'
      })
    })
  })

  it('request error', () => {
    const github = new GitHub({
      host: 'nope'
    })

    return github.orgs.get({org: 'foo'})

    .catch(error => {
      error.toJSON().should.deep.equal({
        code: '500',
        message: 'getaddrinfo ENOTFOUND nope nope:443',
        status: 'Internal Server Error'
      })
    })
  })
})
