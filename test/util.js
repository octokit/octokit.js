module.exports = {
  loadFixture,
  fixtureToInstance,
  getInstance
};

const { Octokit } = require("../");
const { request } = require("@octokit/request");

function loadFixture(scenario) {
  return request("POST http://localhost:3000/fixtures", {
    data: JSON.stringify({ scenario })
  })
    .then(response => response.data)

    .catch(error => {
      if (error.status === "ECONNREFUSED") {
        throw new Error(
          'Fixtures server could not be reached. Make sure to start it with "npm run start-fixtures-server"'
        );
      }

      throw error;
    });
}

function fixtureToInstance({ url }, options) {
  return new Octokit(
    Object.assign(options || {}, {
      baseUrl: url
    })
  );
}

function getInstance(scenario, options) {
  return loadFixture(scenario).then(fixture =>
    fixtureToInstance(fixture, options)
  );
}
