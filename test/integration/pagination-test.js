const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('pagination', () => {
  it('first / previous / next / last', (done) => {
    nock('https://pagination-test.com', {
      reqheaders: {
        authorization: 'token secrettoken123'
      }
    })
      .get('/organizations')
      .query({ page: 3, per_page: 1 })
      .reply(200, [{}], {
        'Link': '<https://pagination-test.com/organizations?page=4&per_page=1>; rel="next", <https://pagination-test.com/organizations?page=1&per_page=1>; rel="first", <https://pagination-test.com/organizations?page=2&per_page=1>; rel="prev"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 1, per_page: 1 })
      .reply(200, [{}])
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{}])
      .get('/organizations')
      .query({ page: 4, per_page: 1 })
      .reply(404, {})

    const github = new GitHub({
      baseUrl: 'https://pagination-test.com'
    })

    github.authenticate({
      type: 'token',
      token: 'secrettoken123'
    })

    github.orgs.getAll({
      page: 3,
      per_page: 1
    })

      .then((result) => {
        expect(github.hasNextPage(result)).to.be.a('string')
        expect(github.hasPreviousPage(result)).to.be.a('string')
        expect(github.hasFirstPage(result)).to.be.a('string')
        expect(github.hasLastPage(result)).to.be.an('undefined')

        const callback = () => {}

        return Promise.all([
          github.getFirstPage(result)
            .then(result => {
              expect(() => {
                github.hasPreviousPage(result)
              }).to.not.throw()
              expect(github.hasPreviousPage(result)).to.be.an('undefined')
            }),
          github.getPreviousPage(result, { foo: 'bar', accept: 'application/vnd.github.v3+json' }),
          github.getNextPage(result).catch(callback),
          github.getLastPage(result, { foo: 'bar' })
            .catch(error => {
              expect(error.code).to.equal(404)
            }),
          // test error with promise
          github.getLastPage(result).catch(callback)
        ])
      })

      .then(() => {
        done()
      })

      .catch(done)
  })

  it('carries accept header correctly', () => {
    nock('https://pagination-test.com', {
      reqheaders: {
        accept: 'application/vnd.github.hellcat-preview+json'
      }
    })
      .get('/user/teams')
      .query({ per_page: 1 })
      .reply(200, [{}], {
        'Link': '<https://pagination-test.com/user/teams?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github; param=hellcat-preview; format=json'
      })
      .get('/user/teams')
      .query({ page: 2, per_page: 1 })
      .reply(200, [])

    const client = new GitHub({
      baseUrl: 'https://pagination-test.com'
    })

    return client.users.getTeams({ per_page: 1 })
      .then(response => {
        return client.getNextPage(response)
      })
  })
})
