const stringToArrayBuffer = require("string-to-arraybuffer");
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

  it("octokit.request with Buffer data", () => {
    return octokit.repos
      .getReleaseByTag({
        owner: "octokit-fixture-org",
        repo: "release-assets",
        tag: "v1.0.0"
      })

      .then(result => {
        return octokit.request({
          method: "POST",
          url: result.data.upload_url,
          headers: {
            "content-type": "text/plain"
          },
          data: Buffer.from("Hello, world!\n"),
          name: "test-upload.txt",
          label: "test"
        });
      });
  });

  it("octokit.repos.uploadReleaseAsset as ArrayBuffer", () => {
    return octokit.repos
      .getReleaseByTag({
        owner: "octokit-fixture-org",
        repo: "release-assets",
        tag: "v1.0.0"
      })

      .then(result => {
        return octokit.request({
          method: "POST",
          url: result.data.upload_url,
          headers: {
            "content-type": "text/plain"
          },
          data: stringToArrayBuffer("Hello, world!\n"),
          name: "test-upload.txt",
          label: "test"
        });
      });
  });
});
