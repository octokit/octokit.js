import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("release-assets", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.repos.*Assets", () => {
    let releaseId: number;
    let assetId: number;

    return octokit.rest.repos
      .getReleaseByTag({
        owner: "octokit-fixture-org",
        repo: "release-assets",
        tag: "v1.0.0",
      })

      .then((result) => {
        releaseId = result.data.id;

        return octokit.request({
          method: "POST",
          url: result.data.upload_url,
          headers: {
            "content-type": "text/plain",
          },
          data: "Hello, world!\n",
          name: "test-upload.txt",
          label: "test",
        });
      })

      .then((result) => {
        assetId = releaseId;

        return octokit.rest.repos.listReleaseAssets({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          release_id: releaseId,
        });
      })

      .then((result) => {
        return octokit.rest.repos.getReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId,
        });
      })

      .then((result) => {
        return octokit.rest.repos.updateReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId,
          name: "new-filename.txt",
          label: "new label",
        });
      })

      .then((result) => {
        return octokit.rest.repos.deleteReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId,
        });
      });
  });
});
