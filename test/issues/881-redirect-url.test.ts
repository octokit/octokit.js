import fetchMock from "fetch-mock";

import { Octokit } from "../../src";

describe("https://github.com/octokit/rest.js/issues/881", () => {
  it("returns response.url", () => {
    const REDIRECT_URL =
      "https://issue-881-codeload.github.com/octocat/Hello-World/legacy.tar.gz/master";

    const mock = fetchMock
      .sandbox()
      .headOnce(
        "https://api.github.com/repos/octocat/Hello-World/tarball/master",
        {
          redirectUrl: REDIRECT_URL,
        }
      )
      .headOnce(REDIRECT_URL, 200);

    const octokit = new Octokit({
      request: {
        fetch: mock,
      },
    });

    return octokit.rest.repos
      .downloadTarballArchive({
        method: "HEAD",
        owner: "octocat",
        repo: "Hello-World",
        ref: "master",
      })

      .then((response) => {
        // @ts-ignore https://github.com/octokit/types.ts/issues/211
        expect(response.url).toEqual(
          "https://issue-881-codeload.github.com/octocat/Hello-World/legacy.tar.gz/master"
        );
      });
  });
});
