const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("labels", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.issues.*", () => {
    return octokit.issues
      .listLabelsForRepo({
        owner: "octokit-fixture-org",
        repo: "labels"
      })

      .then(result => {
        expect(result.data).to.be.an("array");

        return octokit.issues.createLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
          color: "663399"
        });
      })

      .then(result => {
        expect(result.data.name).to.equal("test-label");

        return octokit.issues.getLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label"
        });
      })

      .then(() => {
        return octokit.issues.updateLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
          new_name: "test-label-updated",
          color: "BADA55"
        });
      })

      .then(result => {
        expect(result.data.name).to.equal("test-label-updated");

        return octokit.issues.deleteLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label-updated"
        });
      })

      .then(result => {
        expect(result.data).to.equal(undefined);
      });
  });
});
