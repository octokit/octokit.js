const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('labels')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.issues.*', () => {
    return github.issues.listLabelsForRepo({
      owner: 'octokit-fixture-org',
      repo: 'labels'
    })

      .then((result) => {
        expect(result.data).to.be.an('array')

        return github.issues.createLabel({
          owner: 'octokit-fixture-org',
          repo: 'labels',
          name: 'test-label',
          color: '663399'
        })
      })

      .then((result) => {
        expect(result.data.name).to.equal('test-label')

        return github.issues.getLabel({
          owner: 'octokit-fixture-org',
          repo: 'labels',
          name: 'test-label'
        })
      })

      .then(() => {
        return github.issues.updateLabel({
          owner: 'octokit-fixture-org',
          repo: 'labels',
          current_name: 'test-label',
          name: 'test-label-updated',
          color: 'BADA55'
        })
      })

      .then((result) => {
        expect(result.data.name).to.equal('test-label-updated')

        return github.issues.deleteLabel({
          owner: 'octokit-fixture-org',
          repo: 'labels',
          name: 'test-label-updated'
        })
      })

      .then((result) => {
        expect(result.data).to.equal(undefined)
      })
  })
})
