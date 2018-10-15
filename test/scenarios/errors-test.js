const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('errors')

      .then(instance => {
        github = instance
      })
  })

  it('(#684) errors-test', () => {
    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.createLabel({
      owner: 'octokit-fixture-org',
      repo: 'errors',
      name: 'foo',
      color: 'invalid'
    })

      .catch(error => {
        expect(error.message).to.equal('Validation Failed')
        expect(error.errors).to.deep.equal([{
          resource: 'Label',
          code: 'invalid',
          field: 'color'
        }])
        expect(error.documentation_url).to.match(new RegExp('v3/issues/labels/#create-a-label'))
      })
  })
})
