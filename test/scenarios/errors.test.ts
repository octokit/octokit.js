import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("errors", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("(#684) errors-test", () => {
    return octokit.rest.issues
      .createLabel({
        owner: "octokit-fixture-org",
        repo: "errors",
        name: "foo",
        color: "invalid",
      })

      .catch((error) => {
        expect(error.message).toEqual(
          `Validation Failed: {"resource":"Label","code":"invalid","field":"color"}`
        );
        expect(error.errors).toStrictEqual([
          {
            resource: "Label",
            code: "invalid",
            field: "color",
          },
        ]);
        expect(error.documentation_url).toMatch(
          new RegExp("rest/reference/issues#create-a-label")
        );
      });
  });
});
