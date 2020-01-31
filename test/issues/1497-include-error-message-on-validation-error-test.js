const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/1497", () => {
  it("octokit.repos.updateBranchProtection()", () => {
    nock("https://request-errors-test.com", {
      reqheaders: {
        accept:
          "application/vnd.github.hellcat-preview+json,application/vnd.github.luke-cage-preview+json,application/vnd.github.zzzax-preview+json",
        authorization: "token secret123"
      }
    })
      .put("/repos/gr2m/sandbox/branches/gr2m-patch-1/protection", {
        required_status_checks: { strict: true, contexts: ["wip"] },
        enforce_admins: true,
        required_pull_request_reviews: {
          required_approving_review_count: 1,
          dismiss_stale_reviews: true,
          require_code_owner_reviews: true,
          dismissal_restrictions: { users: [], teams: [] }
        },
        restrictions: { users: [], teams: [] }
      })
      .reply(403, {
        message: "Validation Failed",
        errors: [
          "Only organization repositories can have users and team restrictions"
        ],
        documentation_url:
          "https://developer.github.com/v3/repos/branches/#update-branch-protection"
      });

    const octokit = new Octokit({
      baseUrl: "https://request-errors-test.com",
      auth: "token secret123"
    });
    return octokit.repos
      .updateBranchProtection({
        mediaType: { previews: ["hellcat", "luke-cage", "zzzax"] },
        owner: "gr2m",
        repo: "sandbox",
        branch: "gr2m-patch-1",
        required_status_checks: { strict: true, contexts: ["wip"] },
        enforce_admins: true,
        required_pull_request_reviews: {
          required_approving_review_count: 1,
          dismiss_stale_reviews: true,
          require_code_owner_reviews: true,
          dismissal_restrictions: { users: [], teams: [] }
        },
        restrictions: { users: [], teams: [] }
      })
      .then(() => {
        expect.fail("This should throw error.");
      })
      .catch(error => {
        expect(error).to.have.property(
          "message",
          `Validation Failed: "Only organization repositories can have users and team restrictions"`
        );
      });
  });
});
