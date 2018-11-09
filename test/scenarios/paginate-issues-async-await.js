// this file is not run directly but instead required in paginate-issues-test.js
// for Node v10 and higher only

const { getInstance } = require('../util')

describe('api.github.com', () => {
  let github

  if (global.navigator) {
    const chromeVersion = parseInt(global.navigator.appVersion.match(/Chrome\/(\d+)/).pop(), 10)
    if (chromeVersion < 63) {
      return it.skip(`for await (let result of github.paginate.iterator() (Chrome v${chromeVersion} does not support async iterators, they were introduced in v63)`)
    }
  }

  beforeEach(() => {
    return getInstance('paginate-issues')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('for await (let result of github.paginate.iterator()', async () => {
    const options = {
      owner: 'octokit-fixture-org',
      repo: 'paginate-issues',
      per_page: 3,
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    }
    const results = []
    for await (const result of github.paginate.iterator(github.issues.getForRepo.endpoint.merge(options))) {
      results.push(...result.data)
    }
    expect(results.length).to.equal(13)
  })
})
