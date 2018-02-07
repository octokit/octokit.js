const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.projects.*ProjectCard()', () => {
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
