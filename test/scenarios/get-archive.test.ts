import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("get-archive", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  if ("cy" in global) {
    return it.skip("octokit.rest.repos.archive() (#758)");
  }

  it('octokit.rest.repos.downloadTarballArchive({owner: "octokit-fixture-org", repo: "get-archive"})', () => {
    return octokit.rest.repos
      .downloadTarballArchive({
        owner: "octokit-fixture-org",
        repo: "get-archive",
        ref: "main",
      })

      .then((response) => {
        // @ts-ignore https://github.com/octokit/types.ts/issues/211
        expect(response.data.byteLength).toEqual(172);
      });
  });
});
