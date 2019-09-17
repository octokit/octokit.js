const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("add-labels-to-issue", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("(#587) add-labels-to-issue-test", () => {
    return octokit.issues
      .create({
        owner: "octokit-fixture-org",
        repo: "add-labels-to-issue",
        title: "Issue without a label"
      })

      .then(() => {
        return octokit.issues.addLabels({
          owner: "octokit-fixture-org",
          repo: "add-labels-to-issue",
          issue_number: 1,
          labels: ["Foo", "bAr", "baZ"]
        });
      });
  });
});
