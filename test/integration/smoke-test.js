const nock = require("nock");
const { getUserAgent } = require("universal-user-agent");
const { Octokit: Core } = require("@octokit/core");

const { Octokit } = require("../../");

const userAgent = `octokit-rest.js/0.0.0-development octokit-core.js/${
  Core.VERSION
} ${getUserAgent()}`;

require("../mocha-node-setup");

describe("Smoke tests", () => {
  it("is a function", () => {
    expect(Octokit).to.be.instanceOf(Function);
    expect(() => new Octokit()).not.to.throw();
  });

  it("userAgent option", () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        "user-agent": `my-app/1.2.3 ${userAgent}`
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com",
      userAgent: "my-app/1.2.3"
    });
    return octokit.request("/");
  });

  it("@octokit/plugin-rest-endpoint-methods", () => {
    const octokit = new Octokit();
    expect(octokit.repos.get).to.be.instanceOf(Function);
  });

  it("@octokit/plugin-paginate-rest", () => {
    const octokit = new Octokit();
    expect(octokit.paginate).to.be.instanceOf(Function);
  });

  it("@octokit/plugin-request-log", () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        "user-agent": `my-app/1.2.3 ${userAgent}`
      }
    })
      .get("/")
      .reply(200, {})
      .get("/")
      .reply(404, {});

    const consoleStub = {
      debug: cy.stub(),
      info: cy.stub(),
      warn: cy.stub(),
      error: cy.stub()
    };

    const octokit = new Octokit({
      log: consoleStub
    });

    return octokit
      .request("/")
      .then(() => {
        expect(consoleStub.debug.callCount).to.equal(1);
        expect(consoleStub.info.callCount).to.equal(1);
        expect(consoleStub.warn.callCount).to.equal(0);
        expect(consoleStub.error.callCount).to.equal(0);

        return octokit.request("/");
      })
      .then(() => {
        expect(consoleStub.debug.callCount).to.equal(2);
        expect(consoleStub.info.callCount).to.equal(2);
        expect(consoleStub.warn.callCount).to.equal(0);
        expect(consoleStub.error.callCount).to.equal(0);
      });
  });
});
