const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/861", () => {
  it("custom accept header", () => {
    nock("https://issues-861-test.com", {
      reqheaders: {
        accept: "application/vnd.github.antiope-preview+json",
        authorization: "token 123"
      }
    })
      .post("/repos/swinton/example/check-runs")
      .reply(201, {})
      .persist();

    const octokit = new Octokit({
      baseUrl: "https://issues-861-test.com",
      auth: "token 123"
    });

    return octokit.checks.create({
      owner: "swinton",
      repo: "example",
      name: "feedback",
      head_sha: "2e3d00a6f14a667d50ad9ccd6f3dcfded52121e2",
      status: "completed",
      started_at: new Date().toISOString(),
      completed_at: new Date().toISOString(),
      conclusion: "success"
    });
  });
});
