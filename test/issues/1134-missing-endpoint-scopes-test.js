const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/1134", () => {
  it("octokit.pulls", () => {
    const octokit = new Octokit();
    expect(octokit.pulls).to.be.an("object");
  });
});
