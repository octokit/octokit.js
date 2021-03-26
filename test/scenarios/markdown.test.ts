import { getInstance, OctokitType } from "../util";

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("markdown", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("octokit.rest.markdown.render() & .renderMarkdownRaw()", () => {
    return octokit.rest.markdown
      .render({
        text: `### Hello

b597b5d`,
        context: "octokit-fixture-org/hello-world",
        mode: "gfm",
        headers: {
          accept: "text/html",
        },
      })

      .then((response) => {
        expect(response.data).toMatch(/<h3>Hello<\/h3>/);
        expect(response.data).toMatch(
          /\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/
        );
        expect(response.data).toMatch(/<tt>b597b5d<\/tt>/);

        return octokit.rest.markdown.renderRaw({
          data: `### Hello

b597b5d`,
          headers: {
            accept: "text/html",
            "content-type": "text/plain; charset=utf-8",
          },
        });
      });
  });

  it("octokit.rest.markdown.render() with capitalized headers.Accept", () => {
    return octokit.rest.markdown
      .render({
        text: `### Hello

b597b5d`,
        context: "octokit-fixture-org/hello-world",
        mode: "gfm",
        headers: {
          Accept: "text/html",
        },
      })

      .then((response) => {
        expect(response.data).toMatch(/<h3>Hello<\/h3>/);
        expect(response.data).toMatch(
          /\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/
        );
        expect(response.data).toMatch(/<tt>b597b5d<\/tt>/);
      });
  });
});
