const nock = require("nock");

const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("registerEndpoints", () => {
  it("optins are not altered in registered endpoint methods", () => {
    nock("https://api.github.com")
      .get("/repos/octocat/hello-world/issues/123")
      .reply(200, {});

    const octokit = new Octokit({
      log: {
        warn: () => {}
      }
    });

    octokit.registerEndpoints({
      foo: {
        bar: {
          method: "GET",
          params: {
            issue_number: {
              required: true,
              type: "integer"
            },
            number: {
              alias: "issue_number",
              deprecated: true,
              type: "integer"
            },
            owner: {
              required: true,
              type: "string"
            },
            repo: {
              required: true,
              type: "string"
            }
          },
          url: "/repos/:owner/:repo/issues/:issue_number"
        }
      }
    });

    const options = {
      owner: "octocat",
      repo: "hello-world",
      number: 123
    };

    const promise = octokit.foo.bar(options);

    expect(options).to.deep.equal({
      owner: "octocat",
      repo: "hello-world",
      number: 123
    });

    return promise;
  });
});
