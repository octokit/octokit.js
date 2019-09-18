const btoa = require("btoa-lite");

const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("create-file", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.repos.createOrUpdateFile()", () => {
    return octokit.repos
      .createOrUpdateFile({
        owner: "octokit-fixture-org",
        repo: "create-file",
        path: "test.txt",
        message: "create test.txt",
        content: btoa("Test content")
      })

      .then(response => {
        expect(response.data.content.type).to.equal("file");
      });
  });
});
