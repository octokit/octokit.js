const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/765", () => {
  it("octokit.rest.issues.update({..., milestone: null})", () => {
    nock("https://api.github.com")
      .patch("/repos/epmatsw/example-repo/issues/1", (body) => {
        expect(body).to.deep.equal({ milestone: null });
        return true;
      })
      .reply(200, {});

    const octokit = new Octokit();
    return octokit.rest.issues.update({
      owner: "epmatsw",
      repo: "example-repo",
      milestone: null,
      issue_number: 1,
    });
  });
});
