const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

describe('request errors', () => {
  it('timeout', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .socketDelay(2000)
      .reply(200, {})

    const octokit = new Octokit({
      baseUrl: 'https://request-errors-test.com',
      timeout: 1000
    })

    return octokit.orgs.get({ org: 'myorg' })

      .catch(error => {
        expect(error.name).to.equal('HttpError')
        expect(error.status).to.equal(504)
        expect(error).to.have.property('stack')
      })
  })

  it('500', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .replyWithError('ooops')

    const octokit = new Octokit({
      baseUrl: 'https://request-errors-test.com'
    })

    return octokit.orgs.get({ org: 'myorg' })

      .catch(error => {
        expect(error.name).to.equal('HttpError')
        expect(error.status).to.equal(500)
        expect(error).to.have.property('stack')
      })
  })

  it('404', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(404, 'not found')

    const octokit = new Octokit({
      baseUrl: 'https://request-errors-test.com',
      timeout: 1000
    })

    return octokit.orgs.get({ org: 'myorg' })

      .catch(error => {
        expect(error.name).to.equal('HttpError')
        expect(error.status).to.equal(404)
        expect(error).to.have.property('stack')
      })
  })

  it('401', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(401)

    const octokit = new Octokit({
      baseUrl: 'https://request-errors-test.com',
      timeout: 1000
    })

    return octokit.orgs.get({ org: 'myorg' })

      .catch(error => {
        expect(error.name).to.equal('HttpError')
        expect(error.status).to.equal(401)
        expect(error).to.have.property('stack')
      })
  })

  it('error headers', () => {
    nock('https://request-errors-test.com')
      .get('/orgs/myorg')
      .reply(401, {}, {
        'x-foo': 'bar'
      })

    const octokit = new Octokit({
      baseUrl: 'https://request-errors-test.com',
      timeout: 1000
    })

    return octokit.orgs.get({ org: 'myorg' })

      .catch(error => {
        expect(error.name).to.equal('HttpError')
        expect(error.status).to.equal(401)
        expect(error.headers).to.deep.equal({
          'content-type': 'application/json',
          'x-foo': 'bar'
        })
      })
  })
})
