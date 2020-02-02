const fs = require("fs");

const chai = require("chai");
const nock = require("nock");

const { Octokit } = require("../../");

chai.should();

describe("octokit.repos.uploadReleaseAsset", () => {
  it("accepts file stream (#675)", () => {
    const octokit = new Octokit();
    // const size = fs.statSync(__filename).size;

    nock("https://upload.test", {
      reqheaders: {
        "content-type": "text/plain"
        // nock does not get the auto-calculated "content-length" header
        // but it's tested in the scenario tests.
        // "content-length": size
      }
    })
      .post("/repos/octocat/hello-world/releases/123/assets", function(data) {
        return fs.readFileSync(__filename, "utf8") === data;
      })
      .query({
        name: "package.json"
      })
      .reply(200, { ok: true });

    return octokit.repos.uploadReleaseAsset({
      baseUrl: "https://upload.test",
      headers: {
        "content-type": "text/plain"
      },
      owner: "octocat",
      repo: "hello-world",
      release_id: 123,
      data: fs.createReadStream(__filename),
      name: "package.json"
    });
  });
});
