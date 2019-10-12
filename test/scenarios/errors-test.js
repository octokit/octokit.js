const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("errors", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("(#684) errors-test", () => {
    return octokit.issues
      .createLabel({
        owner: "octokit-fixture-org",
        repo: "errors",
        name: "foo",
        color: "invalid"
      })

      .catch(error => {
        expect(error.message).to.equal(
          `Validation Failed: {"resource":"Label","code":"invalid","field":"color"}`
        );
        expect(error.errors).to.deep.equal([
          {
            resource: "Label",
            code: "invalid",
            field: "color"
          }
        ]);
        expect(error.documentation_url).to.match(
          new RegExp("v3/issues/labels/#create-a-label")
        );
      });
  });
});
