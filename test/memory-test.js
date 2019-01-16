const { iterate } = require('leakage')
const Octokit = require('../')

const TestOctokit = Octokit
  .plugin((octokit) => {
    // skip sending requests altogether
    octokit.hook.wrap('request', () => null)
  })

describe('memory leaks (relax, tests run slow)', function () {
  this.timeout(30000)

  it('creating many instances', () => {
    return iterate.async(() => {
      const octokit = new TestOctokit()

      return octokit.request('/')
    }, { iterations: 100 })
  })

  it('one instance, many requests', () => {
    const octokit = new TestOctokit()

    return iterate.async(() => {
      return octokit.request('/')
    })
  })
})
