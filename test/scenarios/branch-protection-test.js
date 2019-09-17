const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("branch-protection", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.repos.{get,update,remove}BranchProtection()", () => {
    return octokit.repos
      .getBranchProtection({
        owner: "octokit-fixture-org",
        repo: "branch-protection",
        branch: "master"
      })

      .catch(error => {
        if (/Branch not protected/.test(error.message)) {
          return;
        }

        throw error;
      })

      .then(() => {
        return octokit.repos.updateBranchProtection({
          owner: "octokit-fixture-org",
          repo: "branch-protection",
          branch: "master",
          required_status_checks: null,
          required_pull_request_reviews: null,
          restrictions: null,
          enforce_admins: false
        });
      })

      .then(() => {
        return octokit.repos.updateBranchProtection({
          owner: "octokit-fixture-org",
          repo: "branch-protection",
          branch: "master",
          required_status_checks: {
            strict: true,
            contexts: ["foo/bar"]
          },
          required_pull_request_reviews: {
            dismissal_restrictions: {
              users: ["octokit-fixture-user-a"],
              teams: [] // bug: server returns "Only 100 users and teams can be specified." when set to ['a-team']
            },
            dismiss_stale_reviews: true,
            require_code_owner_reviews: false
          },
          restrictions: {
            users: ["octokit-fixture-user-a"],
            teams: ["a-team"]
          },
          enforce_admins: true
        });
      })

      .then(() => {
        return octokit.repos.removeBranchProtection({
          owner: "octokit-fixture-org",
          repo: "branch-protection",
          branch: "master"
        });
      });
  });
});
