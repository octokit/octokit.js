const nock = require("nock");
const { getUserAgent } = require("universal-user-agent");

const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("smoke", () => {
  it("called as function", () => {
    Octokit();
  });

  it("baseUrl option", () => {
    nock("http://myhost.com")
      .get("/my/api/orgs/myorg")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "http://myhost.com/my/api"
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("userAgent option", () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        "user-agent": `blah octokit.js/0.0.0-development ${getUserAgent()}`
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com",
      userAgent: "blah"
    });
    return octokit.request("/");
  });

  it("previews option", () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        accept:
          "application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com",
      previews: [
        // test with & without -preview suffix
        "jean-grey-preview",
        "symmetra"
      ]
    });

    return octokit.request("/");
  });

  it("mediaType request option", () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        accept:
          "application/vnd.github.foo-preview.raw,application/vnd.github.bar-preview.raw,application/vnd.github.baz-preview.raw"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com",
      previews: ["foo", "bar-preview"]
    });

    return octokit.request("/", {
      mediaType: {
        previews: ["bar", "baz-preview"],
        format: "raw"
      }
    });
  });

  it("timeZone option", () => {
    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com",
      timeZone: "Europe/Amsterdam"
    });

    const requestOptions = octokit.repos.get.endpoint("GET /");
    expect(requestOptions.headers["time-zone"]).to.equal("Europe/Amsterdam");
  });

  it("request option", () => {
    const octokit = new Octokit({
      request: {
        foo: "bar"
      }
    });

    octokit.hook.wrap("request", (request, options) => {
      expect(options.request.foo).to.equal("bar");
      return "ok";
    });

    return octokit
      .request("/")

      .then(response => {
        expect(response).to.equal("ok");
      });
  });

  it("response.status & response.headers", () => {
    nock("http://myhost.com")
      .get("/my/api/orgs/myorg")
      .reply(200, {}, { "x-foo": "bar" });

    const octokit = new Octokit({
      baseUrl: "http://myhost.com/my/api"
    });

    return octokit.orgs
      .get({ org: "myorg" })

      .then(response => {
        expect(response.headers["x-foo"]).to.equal("bar");
        expect(response.status).to.equal(200);
      });
  });

  it('.request("GET /")', () => {
    nock("https://smoke-test.com", {
      reqheaders: {
        accept: "application/vnd.github.v3+json"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com"
    });
    return octokit.request("GET /");
  });

  it('.request.endpoint("GET /")', () => {
    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com"
    });

    const requestOptions = octokit.request.endpoint("GET /");

    expect(requestOptions).to.deep.equal({
      method: "GET",
      url: "https://smoke-test.com/",
      headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": `octokit.js/0.0.0-development ${getUserAgent()}`
      },
      request: {
        hook: requestOptions.request.hook
      }
    });
  });

  it(".repos.get.endpoint()", () => {
    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com"
    });

    const requestOptions = octokit.repos.get.endpoint("GET /");

    expect(requestOptions).to.deep.equal({
      method: "GET",
      url: "https://smoke-test.com/",
      headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": `octokit.js/0.0.0-development ${getUserAgent()}`
      },
      request: {
        hook: requestOptions.request.hook,
        validate: {
          owner: {
            required: true,
            type: "string"
          },
          repo: {
            required: true,
            type: "string"
          }
        }
      }
    });
  });

  it(".registerEndpoints()", () => {
    nock("https://smoke-test.com")
      .get("/baz")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://smoke-test.com"
    });
    expect(octokit.registerEndpoints).to.be.a("function");

    octokit.registerEndpoints({
      issues: {
        fooBar: {
          method: "GET",
          url: "/baz"
        }
      }
    });

    // make sure .registerEndpoints does not remove other methods on the same scope
    expect(octokit.issues.get).to.be.a("function");

    return octokit.issues.fooBar();
  });

  it("options.log", () => {
    // console.debug not implemented in Node 6
    // cy.stub(console, 'debug')
    cy.stub(console, "info");
    cy.stub(console, "warn");
    cy.stub(console, "error");
    const octokit1 = new Octokit();

    octokit1.log.debug("foo");
    octokit1.log.info("bar");
    octokit1.log.warn("baz");
    octokit1.log.error("daz");

    // expect(console.debug.callCount).to.equal(0)
    expect(console.info.callCount).to.equal(0);
    expect(console.warn.callCount).to.equal(1);
    expect(console.error.callCount).to.equal(1);

    const calls2 = [];
    const octokit2 = new Octokit({
      log: {
        debug: calls2.push.bind(calls2),
        info: calls2.push.bind(calls2),
        warn: calls2.push.bind(calls2),
        error: calls2.push.bind(calls2)
      }
    });

    octokit2.log.debug("foo");
    octokit2.log.info("bar");
    octokit2.log.warn("baz");
    octokit2.log.error("daz");

    expect(calls2).to.deep.equal(["foo", "bar", "baz", "daz"]);
  });
});
