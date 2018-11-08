const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('pagination', () => {
  it('.paginate()', () => {
    nock('https://pagination-test.com')
      .get('/organizations')
      .query({ page: 1, per_page: 1 })
      .reply(200, [{ id: 1 }], {
        'Link': '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        'X-GitHub-Media-Type': 'github.v3; format=json'
      })
      .get('/organizations')
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])

    const github = new GitHub({
      baseUrl: 'https://pagination-test.com'
    })

    github.paginate('GET /organizations', { per_page: 1 })
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
      .query({ page: 1 })
      .reply(200, {
        foo: 'bar'
      })

    const github = new GitHub({
      baseUrl: 'https://pagination-test.com'
    })

    const iterator = github.paginate.iterator({
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
