const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/1553", () => {
  it.skip("octokit.rest.teams.removeMember()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.rest.teams.removeMember).to.equal("function");
  });
  it.skip("octokit.rest.teams.removeMembership()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.rest.teams.removeMembership).to.equal("function");
  });
  it.skip("octokit.rest.teams.listMembers()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.rest.teams.listMembers).to.equal("function");
  });
  it.skip("octokit.rest.teams.listMembers.endpoint()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.rest.teams.listMembers.endpoint).to.equal("function");
  });
  it.skip("octokit.rest.teams.listMembersLegacy.endpoint()", () => {
    const octokit = new Octokit();
    expect(typeof octokit.rest.teams.listMembersLegacy.endpoint).to.equal(
      "function"
    );
  });
});
