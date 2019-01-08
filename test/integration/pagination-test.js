const nock = require('nock')

const Octokit = require('../../')

require('../mocha-node-setup')

describe('pagination', () => {
  it('.paginate()', () => {
    nock('https://pagination-test.com')
      .get('/organizations')
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])
      .persist()

    const octokit = new Octokit({
      baseUrl: 'https://pagination-test.com'
    })

    return Promise.all([
      octokit.paginate('GET /organizations', { per_page: 1 })
        .then(organizations => {
          expect(organizations).to.deep.equal([
            { id: 1 },
            { id: 2 }
          ])
        }),
      octokit.paginate('GET /organizations', { per_page: 1 }, response => response.data.map(org => org.id))
        .then(organizations => {
          expect(organizations).to.deep.equal([1, 2])
        }),
      octokit.paginate({
        method: 'GET',
        url: '/organizations',
        per_page: 1
      }, response => response.data.map(org => org.id))
        .then(organizations => {
          expect(organizations).to.deep.equal([1, 2])
        })
    ])
  })

  it('.paginate() with map function returning undefined', () => {
    nock('https://pagination-test.com')
      .get('/organizations')
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])

    const octokit = new Octokit({
      baseUrl: 'https://pagination-test.com'
    })

    return octokit.paginate(
      'GET /organizations',
      { per_page: 1 },
      response => undefined
    )
      .then(results => {
        expect(results).to.deep.equal([undefined, undefined])
      })
  })

  it('.paginate() with early exit', () => {
    nock('https://pagination-test.com')
      .get('/organizations')
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])

    const octokit = new Octokit({
      baseUrl: 'https://pagination-test.com'
    })

    return octokit.paginate(
      'GET /organizations',
      { per_page: 1 },
      (response, done) => {
        done()
        return response.data.map(org => org.id)
      }
    )
      .then(organizations => {
        expect(organizations).to.deep.equal([1])
      })
  })

  it('.paginate() with Link header pointing to different path', () => {
    nock('https://other-pagination-test.com')
      .get('/organizations')
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://other-pagination-test.com/foobar?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/foobar')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])

    const octokit = new Octokit({
      baseUrl: 'https://other-pagination-test.com'
    })

    return octokit.paginate('GET /organizations', { per_page: 1 })
      .then(organizations => {
        expect(organizations).to.deep.equal([
          { id: 1 },
          { id: 2 }
        ])
      })
  })

  it('autopagination', () => {
    nock('https://pagination-test.com')
      .get('/organizations')
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }], {
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .persist()

    const octokit = new Octokit({
      baseUrl: 'https://pagination-test.com'
    })

    octokit.hook.wrap('request', (request, options) => {
      if (!options.request.paginate) {
        return request(options)
      }

      delete options.request.paginate
      return octokit.paginate(options)
    })

    return octokit.request('GET /organizations', { per_page: 1, request: { paginate: true } })
      .then(organizations => {
        expect(organizations).to.deep.equal([
          { id: 1 },
          { id: 2 }
        ])
      })
  })

  it('.paginate.iterator for end endpoints that don’t paginate', () => {
    nock('https://pagination-test.com')
      .get('/orgs/myorg')
      .reply(200, {
        foo: 'bar'
      })

    const octokit = new Octokit({
      baseUrl: 'https://pagination-test.com'
    })

    const iterator = octokit.paginate.iterator({
      method: 'GET',
      url: '/orgs/:org',
      org: 'myorg'
    })[Symbol.asyncIterator]()

    return iterator.next()
      .then(result => {
        expect(result.value.data.foo).to.equal('bar')
      })
  })
})
