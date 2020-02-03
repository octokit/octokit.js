const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/818", () => {
  it("octokit.apps.listInstallations()", () => {
    nock("https://api.github.com")
      .get("/app/installations")
      .reply(200, []);

    const octokit = new Octokit();
    return octokit.apps.listInstallations();
  });
});
