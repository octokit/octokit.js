const chai = require('chai')
const simple = require('simple-mock')

const GitHub = require('../../')
const PARAMS = require('../../lib/definitions/params.json')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('setup routes', () => {
  it('missing param definition', () => {
    const github = new GitHub()

    simple.mock(PARAMS, 'gist_id', undefined)
    github.gists.createComment({gist_id: 'abc4567', body: 'foo bar'})

    .catch(error => {
      error.code.should.equal('400')
    })

    simple.restore()
  })

  it('missing param definition with callback', (done) => {
    const github = new GitHub()

    simple.mock(PARAMS, 'gist_id', undefined)
    github.gists.createComment({gist_id: 'abc4567', body: 'foo bar'}, (error) => {
      error.code.should.equal('400')
      done()
    })

    simple.restore()
  })
})
