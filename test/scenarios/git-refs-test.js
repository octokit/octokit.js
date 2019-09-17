const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("git-refs", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.gitdata.*", () => {
    return octokit.gitdata
      .listRefs({
        owner: "octokit-fixture-org",
        repo: "git-refs"
      })

      .then(() => {
        return octokit.gitdata.createRef({
          owner: "octokit-fixture-org",
          repo: "git-refs",
          ref: "refs/heads/test",
          sha: "0000000000000000000000000000000000000002"
        });
      })

      .then(() => {
        return octokit.gitdata.updateRef({
          owner: "octokit-fixture-org",
          repo: "git-refs",
          ref: "heads/test",
          sha: "0000000000000000000000000000000000000001"
        });
      })

      .then(() => {
        return octokit.gitdata.listRefs({
          owner: "octokit-fixture-org",
          repo: "git-refs"
        });
      })

      .then(() => {
        return octokit.gitdata.deleteRef({
          owner: "octokit-fixture-org",
          repo: "git-refs",
          ref: "heads/test"
        });
      });
  });
});
