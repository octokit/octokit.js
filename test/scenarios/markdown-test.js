const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("markdown", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.markdown.render() & .renderMarkdownRaw()", () => {
    return octokit.markdown
      .render({
        text: `### Hello

b597b5d`,
        context: "octokit-fixture-org/hello-world",
        mode: "gfm",
        headers: {
          accept: "text/html"
        }
      })

      .then(response => {
        expect(response.data).to.match(/<h3>Hello<\/h3>/);
        expect(response.data).to.match(
          /\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/
        );
        expect(response.data).to.match(/<tt>b597b5d<\/tt>/);

        return octokit.markdown.renderRaw({
          data: `### Hello

b597b5d`,
          headers: {
            accept: "text/html",
            "content-type": "text/plain; charset=utf-8"
          }
        });
      });
  });

  it("octokit.markdown.render() with capitalized headers.Accept", () => {
    return octokit.markdown
      .render({
        text: `### Hello

b597b5d`,
        context: "octokit-fixture-org/hello-world",
        mode: "gfm",
        headers: {
          Accept: "text/html"
        }
      })

      .then(response => {
        expect(response.data).to.match(/<h3>Hello<\/h3>/);
        expect(response.data).to.match(
          /\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/
        );
        expect(response.data).to.match(/<tt>b597b5d<\/tt>/);
      });
  });
});
