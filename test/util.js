module.exports = {
  loadFixture,
  fixtureToInstace,
  getInstance
}

const fetch = require('cross-fetch')
const merge = require('lodash/merge')

const GitHub = require('../')

function loadFixture (scenario) {
  return fetch('http://localhost:3000/fixtures', {
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({scenario})
  })

    .then(response => response.json())

    .catch(error => {
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Fixtures server could not be reached. Make sure to start it with "npm run start-fixtures-server"')
      }

      throw error
    })
}

function fixtureToInstace ({url}, options) {
  return new GitHub(merge(options, {
    baseUrl: url
  }))
}

function getInstance (scenario, options) {
  return loadFixture(scenario)

    .then(fixture => fixtureToInstace(fixture, options))
}
