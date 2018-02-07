const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.issues.*', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    github.plugin(require('../../lib/plugins/authentication'))
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.getLabels({
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
        oldname: 'test-label',
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
      expect(result.data).to.equal('')
    })
  })
})
