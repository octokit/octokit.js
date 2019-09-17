const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("create-status", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.repos.createStatus()", () => {
    return Promise.all([
      octokit.repos.createStatus({
        owner: "octokit-fixture-org",
        repo: "create-status",
        sha: "0000000000000000000000000000000000000001",
        state: "failure",
        target_url: "https://example.com",
        description: "create-status failure test",
        context: "example/1"
      }),
      octokit.repos.createStatus({
        owner: "octokit-fixture-org",
        repo: "create-status",
        sha: "0000000000000000000000000000000000000001",
        state: "success",
        target_url: "https://example.com",
        description: "create-status success test",
        context: "example/2"
      })
    ])

      .then(() => {
        return octokit.repos.listStatusesForRef({
          owner: "octokit-fixture-org",
          repo: "create-status",
          ref: "0000000000000000000000000000000000000001"
        });
      })

      .then(response => {
        expect(response.data.length).to.equal(2);

        return octokit.repos.getCombinedStatusForRef({
          owner: "octokit-fixture-org",
          repo: "create-status",
          ref: "0000000000000000000000000000000000000001"
        });
      })

      .then(response => {
        expect(response.data.state).to.equal("failure");
      });
  });
});
