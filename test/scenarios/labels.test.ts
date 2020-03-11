import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

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
        expect(Array.isArray(result.data)).toEqual(true);

        return octokit.issues.createLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
          color: "663399"
        });
      })

      .then(result => {
        expect(result.data.name).toEqual("test-label");

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
        expect(result.data.name).toEqual("test-label-updated");

        return octokit.issues.deleteLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label-updated"
        });
      })

      .then(result => {
        expect(result.data).toEqual(undefined);
      });
  });
});
