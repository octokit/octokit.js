import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("create-status", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.repos.createCommitStatus()", () => {
    return Promise.all([
      octokit.repos.createCommitStatus({
        owner: "octokit-fixture-org",
        repo: "create-status",
        sha: "0000000000000000000000000000000000000001",
        state: "failure",
        target_url: "https://example.com",
        description: "create-status failure test",
        context: "example/1",
      }),
      octokit.repos.createCommitStatus({
        owner: "octokit-fixture-org",
        repo: "create-status",
        sha: "0000000000000000000000000000000000000001",
        state: "success",
        target_url: "https://example.com",
        description: "create-status success test",
        context: "example/2",
      }),
    ])

      .then(() => {
        return octokit.repos.listCommitStatusesForRef({
          owner: "octokit-fixture-org",
          repo: "create-status",
          ref: "0000000000000000000000000000000000000001",
        });
      })

      .then((response) => {
        expect(response.data.length).toEqual(2);

        return octokit.repos.getCombinedStatusForRef({
          owner: "octokit-fixture-org",
          repo: "create-status",
          ref: "0000000000000000000000000000000000000001",
        });
      })

      .then((response) => {
        expect(response.data.state).toEqual("failure");
      });
  });
});
