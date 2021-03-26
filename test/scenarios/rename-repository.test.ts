import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("rename-repository", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.repos.get() with previous name (https://github.com/cypress-io/cypress/issues/1314)", () => {
    return octokit.rest.repos
      .update({
        owner: "octokit-fixture-org",
        repo: "rename-repository",
        name: "rename-repository-newname",
      })

      .then(() => {
        return octokit.rest.repos.get({
          owner: "octokit-fixture-org",
          repo: "rename-repository",
        });
      })

      .then(() => {
        return octokit.rest.repos.update({
          owner: "octokit-fixture-org",
          repo: "rename-repository",
          name: "rename-repository-newname",
          description: "test description",
        });
      });
  });
});
