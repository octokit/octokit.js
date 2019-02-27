const nock = require('nock')
const Octokit = require('../..')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/1161', () => {
  it('paginates results from search', () => {
    nock('https://api.github.com')
      .get('/search/issues')
      .query({
        q: 'repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26',
        per_page: 1
      })
      .reply(200, {
        total_count: 2,
        incomplete_results: false,
        items: [
          {
            id: '123'
          }
        ]
      }, {
        'Link': '<https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=2>; rel="next", <https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=2>; rel="last"'
      })

      .get('/search/issues')
      .query({
        q: 'repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26',
        per_page: 1,
        page: 2
      })
      .reply(200, {
        total_count: 2,
        incomplete_results: false,
        items: [
          {
            id: '456'
          }
        ]
      })

    const octokit = new Octokit()
    const options = octokit.search.issuesAndPullRequests.endpoint.merge({
      q: `repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26`,
      per_page: 1,
      headers: {
        'accept-encoding': ''
      }
    })

    return octokit.paginate(options)
      .then(results => {
        expect(results).to.deep.equal([
          { id: '123' },
          { id: '456' }
        ])
      })
  })
})
