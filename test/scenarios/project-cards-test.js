const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('project-cards')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.projects.*ProjectCard()', () => {
    return github.projects.createProjectCard({
      column_id: 1000,
      note: 'Example card 1'
    })

      .then(() => {
        return github.projects.createProjectCard({
          column_id: 1000,
          note: 'Example card 2'
        })
      })

      .then(() => {
        return github.projects.getProjectCards({
          column_id: 1000
        })
      })

      .then(() => {
        return github.projects.getProjectCard({
          id: 1000
        })
      })

      .then(() => {
        return github.projects.updateProjectCard({
          id: 1000,
          note: 'Example card 1 updated'
        })
      })

      .then(() => {
        return github.projects.moveProjectCard({
          id: 1000,
          position: 'top',
          column_id: 1001
        })
      })

      .then(() => {
        return github.projects.moveProjectCard({
          id: 1001,
          position: 'bottom',
          column_id: 1001
        })
      })

      .then(() => {
        return github.projects.moveProjectCard({
          id: 1000,
          position: 'after:1001'
        })
      })

      .then(() => {
        return github.projects.deleteProjectCard({
          id: 1000
        })
      })
  })
})
