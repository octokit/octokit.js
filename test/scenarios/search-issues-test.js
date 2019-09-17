const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("search-issues", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it('octokit.search.issuesAndPullRequests({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    return octokit.search
      .issuesAndPullRequests({
        q: "sesame repo:octokit-fixture-org/search-issues"
      })

      .then(response => {
        expect(response.data.total_count).to.equal(2);
      });
  });
});
