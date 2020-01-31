const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("release-assets", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.repos.*Assets", () => {
    let releaseId;
    let assetId;

    return octokit.repos
      .getReleaseByTag({
        owner: "octokit-fixture-org",
        repo: "release-assets",
        tag: "v1.0.0"
      })

      .then(result => {
        releaseId = result.data.id;

        return octokit.repos.uploadReleaseAsset({
          url: result.data.upload_url,
          headers: {
            "content-type": "text/plain"
          },
          data: "Hello, world!\n",
          name: "test-upload.txt",
          label: "test"
        });
      })

      .then(result => {
        assetId = releaseId;

        return octokit.repos.listAssetsForRelease({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          release_id: releaseId
        });
      })

      .then(result => {
        return octokit.repos.getReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId
        });
      })

      .then(result => {
        return octokit.repos.updateReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId,
          name: "new-filename.txt",
          label: "new label"
        });
      })

      .then(result => {
        return octokit.repos.deleteReleaseAsset({
          owner: "octokit-fixture-org",
          repo: "release-assets",
          asset_id: assetId
        });
      });
  });
});
