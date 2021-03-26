import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("search-issues", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it('octokit.rest.search.issuesAndPullRequests({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    return octokit.rest.search
      .issuesAndPullRequests({
        q: "sesame repo:octokit-fixture-org/search-issues",
      })

      .then((response) => {
        expect(response.data.total_count).toEqual(2);
      });
  });
});
