const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("plugins", () => {
  it("gets called in constructor", () => {
    const MyOctokit = Octokit.plugin(octokit => {
      octokit.foo = "bar";
    });
    const myClient = new MyOctokit();
    expect(myClient.foo).to.equal("bar");
  });

  it("does not override plugins of original constructor", () => {
    const MyOctokit = Octokit.plugin(octokit => {
      octokit.foo = "bar";
    });
    const myClient = new MyOctokit();
    expect(myClient.foo).to.equal("bar");

    const octokit = new Octokit();
    expect(octokit.foo).to.equal(undefined);
  });

  it("receives client options", () => {
    const MyOctokit = Octokit.plugin((octokit, options) => {
      expect(options.foo).to.equal("bar");
    });
    new MyOctokit({ foo: "bar" });
  });

  it("does not load the same plugin more than once", () => {
    const myPlugin = (octokit, options) => {
      if (octokit.customKey) {
        throw new Error("Boom!");
      } else {
        octokit.customKey = true;
      }
    };
    const MyOctokit = Octokit.plugin(myPlugin).plugin(myPlugin);
    expect(() => new MyOctokit()).to.not.throw();
  });
});
