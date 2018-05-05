const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('mark-notifications-as-read')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.activity.markNotificationsAsRead()', () => {
    return github.activity.markNotificationsAsRead()
  })
})
