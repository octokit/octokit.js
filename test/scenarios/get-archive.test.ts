import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("get-archive", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  if ("cy" in global) {
    return it.skip("octokit.repos.archive() (#758)");
  }

  it('octokit.repos.archive({owner: "octokit-fixture-org", repo: "get-archive"})', () => {
    return octokit.repos
      .getArchiveLink({
        owner: "octokit-fixture-org",
        repo: "get-archive",
        archive_format: "tarball",
        ref: "master"
      })

      .then(response => {
        expect(response.data.byteLength).toEqual(172);
      });
  });
});
