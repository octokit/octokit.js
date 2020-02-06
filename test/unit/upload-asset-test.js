const fs = require("fs");

const chai = require("chai");
const nock = require("nock");

const { Octokit } = require("../../pkg");

chai.should();

describe("octokit.repos.uploadReleaseAsset", () => {
  it("accepts file stream (#675)", () => {
    const octokit = new Octokit();

    nock("https://upload.test", {
      reqheaders: {
        "content-type": "text/plain"
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
