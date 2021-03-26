// this file is not run directly but instead required in paginate-issues-test.js
// for Node v10 and higher only

import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("paginate-issues", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("for await (let result of octokit.paginate.iterator()", async () => {
    const options = {
      owner: "octokit-fixture-org",
      repo: "paginate-issues",
      per_page: 3,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
    };
    const results = [];
    for await (const result of octokit.paginate.iterator(
      // @ts-ignore TODO: *.endpoint.merge on endpoint methods should always return .url property
      octokit.rest.issues.listForRepo.endpoint.merge(options)
    )) {
      results.push(...result.data);
    }
    expect(results.length).toEqual(13);
  });
});
