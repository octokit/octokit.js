import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("labels", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.issues.*", () => {
    return octokit.rest.issues
      .listLabelsForRepo({
        owner: "octokit-fixture-org",
        repo: "labels",
      })

      .then((result) => {
        expect(Array.isArray(result.data)).toEqual(true);

        return octokit.rest.issues.createLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
          color: "663399",
        });
      })

      .then((result) => {
        expect(result.data.name).toEqual("test-label");

        return octokit.rest.issues.getLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
        });
      })

      .then(() => {
        return octokit.rest.issues.updateLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label",
          new_name: "test-label-updated",
          color: "BADA55",
        });
      })

      .then((result) => {
        expect(result.data.name).toEqual("test-label-updated");

        return octokit.rest.issues.deleteLabel({
          owner: "octokit-fixture-org",
          repo: "labels",
          name: "test-label-updated",
        });
      });
  });
});
