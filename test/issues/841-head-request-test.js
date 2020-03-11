const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/841", () => {
  it("supports sending GET requests with method: HEAD", () => {
    nock("https://head-request-test.com")
      .head("/repos/whatwg/html/pulls/1")
      .query(true)
      // GitHub API returns 200 and Content-{Type|Length} headers for HEAD requsets
      .reply(200, "", {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": 19137
      })
      .head("/repos/whatwg/html/pulls/2")
      .query(true)
      .reply(404, "", {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": 120
      });

    const octokit = new Octokit({
      baseUrl: "https://head-request-test.com"
    });

    octokit.pulls
      .get({
        method: "head",
        owner: "whatwg",
        repo: "html",
        pull_number: 1
      })

      .then(() => {
        return octokit.pulls
          .get({
            method: "head",
            owner: "whatwg",
            repo: "html",
            pull_number: 2
          })

          .catch(error => {
            expect(error.status).to.equal(404);
          });
      });
  });
});
