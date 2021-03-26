import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("lock-issue", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.issues.{lock,unlock}()", () => {
    return octokit.rest.issues
      .lock({
        owner: "octokit-fixture-org",
        repo: "lock-issue",
        issue_number: 1,
      })

      .then(() => {
        return octokit.rest.issues.unlock({
          owner: "octokit-fixture-org",
          repo: "lock-issue",
          issue_number: 1,
        });
      });
  });
});
