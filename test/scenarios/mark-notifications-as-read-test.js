const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('mark-notifications-as-read')

      .then(instance => {
        octokit = instance

        octokit.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('octokit.activity.markAsRead()', () => {
    return octokit.activity.markAsRead()
  })
})
