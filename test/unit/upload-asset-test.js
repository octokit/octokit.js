const fs = require("fs");

const chai = require("chai");
const nock = require("nock");

const { Octokit } = require("../../");

chai.should();

describe("octokit.repos.uploadReleaseAsset", () => {
  it("accepts file stream (#675)", () => {
    const octokit = new Octokit();
    const size = fs.statSync(__filename).size;

    nock("https://upload.test")
      .post("/", function(data) {
        return fs.readFileSync(__filename, "utf8") === data;
      })
      .reply(200);

    return octokit.repos.uploadReleaseAsset({
      url: "https://upload.test",
      headers: {
        "content-type": "text/json",
        "content-length": size
      },
      data: fs.createReadStream(__filename),
      name: "package.json"
    });
  });
});
