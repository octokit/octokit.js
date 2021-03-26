import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("add-labels-to-issue", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("(#587) add-labels-to-issue-test", () => {
    return octokit.rest.issues
      .create({
        owner: "octokit-fixture-org",
        repo: "add-labels-to-issue",
        title: "Issue without a label",
      })

      .then(() => {
        return octokit.rest.issues.addLabels({
          owner: "octokit-fixture-org",
          repo: "add-labels-to-issue",
          issue_number: 1,
          labels: ["Foo", "bAr", "baZ"],
        });
      });
  });
});
