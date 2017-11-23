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

  it('invalid value for github.issues.getAll({filter})', () => {
    const github = new GitHub({
      host: 'nope'
    })

    return github.issues.getAll({filter: 'foo'})

    .catch(error => {
      error.toJSON().should.deep.equal({
        code: '400',
        message: 'Invalid value for parameter \'filter\': foo',
        status: 'Bad Request'
      })
    })
  })

  it('Not a number for github.issues.createCommitComment({..., position})', () => {
    const github = new GitHub({
      host: 'nope'
    })

    return github.repos.createCommitComment({
      owner: 'foo',
      repo: 'bar',
      sha: 'lala',
      body: 'Sing with me!',
      position: 'Age Ain’t Nothing'
    })

    .catch(error => {
      error.toJSON().should.deep.equal({
        code: '400',
        message: 'Invalid value for parameter \'position\': Age Ain’t Nothing is NaN',
        status: 'Bad Request'
      })
    })
  })
})
