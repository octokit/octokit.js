const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("get-content", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.repos.getContents()", () => {
    return octokit.repos
      .getContents({
        owner: "octokit-fixture-org",
        repo: "hello-world",
        path: ""
      })

      .then(response => {
        expect(response.data.length).to.equal(1);

        return octokit.repos.getContents({
          owner: "octokit-fixture-org",
          repo: "hello-world",
          path: "README.md",
          headers: {
            accept: "application/vnd.github.v3.raw"
          }
        });
      })

      .then(response => {
        expect(response.data).to.equal("# hello-world");
      });
  });
});
