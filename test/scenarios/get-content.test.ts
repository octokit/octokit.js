import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("get-content", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.repos.getContent()", () => {
    return octokit.rest.repos
      .getContent({
        owner: "octokit-fixture-org",
        repo: "hello-world",
        path: "",
      })

      .then((response) => {
        if (!Array.isArray(response.data)) {
          throw `folder response expected`;
        }

        expect(response.data.length).toEqual(1);

        return octokit.rest.repos.getContent({
          owner: "octokit-fixture-org",
          repo: "hello-world",
          path: "README.md",
          headers: {
            accept: "application/vnd.github.v3.raw",
          },
        });
      })

      .then((response) => {
        expect(response.data).toEqual("# hello-world");
      });
  });
});
