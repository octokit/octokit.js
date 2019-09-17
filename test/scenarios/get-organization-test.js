const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("get-organization", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it('octokit.orgs.get({owner: "octokit-fixture-org"})', () => {
    return octokit.orgs
      .get({ org: "octokit-fixture-org" })

      .then(response => {
        expect(response.data.login).to.equal("octokit-fixture-org");
      });
  });
});
