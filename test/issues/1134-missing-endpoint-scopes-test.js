const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/1134", () => {
  it("octokit.rest.pulls", () => {
    const octokit = new Octokit();
    expect(octokit.rest.pulls).to.be.an("object");
  });
});
