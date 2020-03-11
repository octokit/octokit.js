const nock = require("nock");

const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("request 304s", () => {
  let octokit;

  beforeEach(() => {
    octokit = new Octokit({
      baseUrl: "https://request-errors-test.com"
    });
  });

  it("304 etag", () => {
    nock("https://request-errors-test.com")
      .get("/orgs/myorg")
      .reply(304, "");

    return octokit.orgs
      .get({ org: "myorg", headers: { "If-None-Match": "etag" } })
      .then(response => {
        expect.fail("should throw error");
      })
      .catch(error => {
        expect(error.status).to.equal(304);
      });
  });

  it("304 last-modified", () => {
    nock("https://request-errors-test.com")
      .get("/orgs/myorg")
      .reply(304, "");

    return octokit.orgs
      .get({
        org: "myorg",
        headers: {
          "If-Modified-Since": "Sun Dec 24 2017 22:00:00 GMT-0600 (CST)"
        }
      })
      .then(response => {
        expect.fail("should throw error");
      })
      .catch(error => {
        expect(error.status).to.equal(304);
      });
  });
});
