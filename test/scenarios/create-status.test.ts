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

  it("octokit.rest.repos.createCommitStatus()", () => {
    return Promise.all([
      octokit.rest.repos.createCommitStatus({
        owner: "octokit-fixture-org",
        repo: "create-status",
        sha: "0000000000000000000000000000000000000001",
        state: "failure",
        target_url: "https://example.com",
        description: "create-status failure test",
        context: "example/1",
      }),
      octokit.rest.repos.createCommitStatus({
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
        return octokit.rest.repos.listCommitStatusesForRef({
          owner: "octokit-fixture-org",
          repo: "create-status",
          ref: "0000000000000000000000000000000000000001",
        });
      })

      .then((response) => {
        // @ts-ignore type error likely caused by tempoaray workaround at https://github.com/octokit/types.ts/blob/2f664bcc543c0dd668645571839475f39f8c8b4b/scripts/update-endpoints/templates/endpoints.ts.template#L97-L99
        expect(response.data.length).toEqual(2);

        return octokit.rest.repos.getCombinedStatusForRef({
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
