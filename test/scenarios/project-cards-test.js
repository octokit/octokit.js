const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('project-cards')

    .then(github => {
      this.github = github

      github.plugin(require('../../lib/plugins/authentication'))
      github.plugin(require('../../lib/plugins/endpoint-methods'))

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.projects.*ProjectCard()', function () {
    return this.github.projects.createProjectCard({
      column_id: 1000,
      note: 'Example card 1'
    })

    .then(() => {
      return this.github.projects.createProjectCard({
        column_id: 1000,
        note: 'Example card 2'
      })
    })

    .then(() => {
      return this.github.projects.getProjectCards({
        column_id: 1000
      })
    })

    .then(() => {
      return this.github.projects.getProjectCard({
        id: 1000
      })
    })

    .then(() => {
      return this.github.projects.updateProjectCard({
        id: 1000,
        note: 'Example card 1 updated'
      })
    })

    .then(() => {
      return this.github.projects.moveProjectCard({
        id: 1000,
        position: 'top',
        column_id: 1001
      })
    })

    .then(() => {
      return this.github.projects.moveProjectCard({
        id: 1001,
        position: 'bottom',
        column_id: 1001
      })
    })

    .then(() => {
      return this.github.projects.moveProjectCard({
        id: 1000,
        position: 'after:1001'
      })
    })

    .then(() => {
      return this.github.projects.deleteProjectCard({
        id: 1000
      })
    })
  })
})
