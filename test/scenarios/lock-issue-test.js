const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("lock-issue", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.issues.{lock,unlock}()", () => {
    return octokit.issues
      .lock({
        owner: "octokit-fixture-org",
        repo: "lock-issue",
        issue_number: 1
      })

      .then(() => {
        return octokit.issues.unlock({
          owner: "octokit-fixture-org",
          repo: "lock-issue",
          issue_number: 1
        });
      });
  });
});
