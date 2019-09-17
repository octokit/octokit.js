// this file is not run directly but instead required in paginate-issues-test.js
// for Node v10 and higher only

const { getInstance } = require("../util");

describe("api.github.com", () => {
  let octokit;

  if (global.navigator) {
    const chromeVersion = parseInt(
      global.navigator.appVersion.match(/Chrome\/(\d+)/).pop(),
      10
    );
    if (chromeVersion < 63) {
      return it.skip(
        `for await (let result of octokit.paginate.iterator() (Chrome v${chromeVersion} does not support async iterators, they were introduced in v63)`
      );
    }
  }

  beforeEach(() => {
    return getInstance("paginate-issues", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("for await (let result of octokit.paginate.iterator()", async () => {
    const options = {
      owner: "octokit-fixture-org",
      repo: "paginate-issues",
      per_page: 3,
      headers: {
        accept: "application/vnd.github.v3+json"
      }
    };
    const results = [];
    for await (const result of octokit.paginate.iterator(
      octokit.issues.listForRepo.endpoint.merge(options)
    )) {
      results.push(...result.data);
    }
    expect(results.length).to.equal(13);
  });
});
