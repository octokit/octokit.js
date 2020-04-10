import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("get-repository", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it('octokit.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    return octokit.repos
      .get({
        owner: "octokit-fixture-org",
        repo: "hello-world",
      })

      .then((response) => {
        expect(response.data.owner.login).toEqual("octokit-fixture-org");
      });
  });
});
