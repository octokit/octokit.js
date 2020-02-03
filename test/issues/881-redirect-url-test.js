const nock = require("nock");
const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("https://github.com/octokit/rest.js/issues/881", () => {
  it("returns response.url", () => {
    nock("https://issue-881-api.github.com")
      .head("/repos/octocat/Hello-World/tarball/master")
      .reply(302, "", [
        "Location",
        "https://issue-881-codeload.github.com/octocat/Hello-World/legacy.tar.gz/master"
      ]);

    nock("https://issue-881-codeload.github.com:443")
      .head("/octocat/Hello-World/legacy.tar.gz/master")
      .reply(200, "", [
        "Access-Control-Allow-Origin",
        "https://render.githubusercontent.com",
        "Content-Security-Policy",
        "default-src 'none'; style-src 'unsafe-inline'; sandbox",
        "Strict-Transport-Security",
        "max-age=31536000",
        "Vary",
        "Authorization,Accept-Encoding",
        "X-Content-Type-Options",
        "nosniff",
        "X-Frame-Options",
        "deny",
        "X-XSS-Protection",
        "1; mode=block",
        "ETag",
        '"7fd1a60b01f91b314f59955a4e4d4e80d8edf11d"',
        "Content-Type",
        "application/x-gzip",
        "Content-Disposition",
        "attachment; filename=octocat-Hello-World-7fd1a60.tar.gz",
        "X-Geo-Block-List",
        "",
        "Date",
        "Sun, 20 Jan 2019 16:01:29 GMT",
        "X-GitHub-Request-Id",
        "E889:15B9:4A3FE:CED6E:5C449B59",
        "Connection",
        "close"
      ]);

    const octokit = new Octokit({
      baseUrl: "https://issue-881-api.github.com"
    });

    return octokit.repos
      .getArchiveLink({
        method: "HEAD",
        owner: "octocat",
        repo: "Hello-World",
        archive_format: "tarball",
        ref: "master"
      })

      .then(response => {
        expect(response.url).to.equal(
          "https://issue-881-codeload.github.com/octocat/Hello-World/legacy.tar.gz/master"
        );
      });
  });
});
