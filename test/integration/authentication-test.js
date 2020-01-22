const nock = require("nock");
const { createActionAuth } = require("@octokit/auth");

const Octokit = require("../..");

require("../mocha-node-setup");

describe("authentication", () => {
  it("unauthenticated", () => {
    nock("https://authentication-test-host.com")
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com"
    });

    return octokit.auth().then(authentication => {
      expect(authentication).to.deep.equal({
        type: "unauthenticated"
      });
    });
  });

  it("OAuth token string", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: "token abc4567"
    });

    return octokit.request("/");
  });

  const BEARER_TOKEN =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTM4MTkzMTIsImV4cCI6MTU1MzgxOTM3MiwiaXNzIjoxfQ.etiSZ4LFQZ8tiMGJVqKDoGn8hxMCgwL4iLvU5xBUqbAPr4pbk_jJZmMQjuxTlOnRxq4e7NouTizGCdfohRMb3R1mpLzGPzOH9_jqSA_BWYxolsRP_WDSjuNcw6nSxrPRueMVRBKFHrqcTOZJej0djRB5pI61hDZJ_-DGtiOIFexlK3iuVKaqBkvJS5-TbTekGuipJ652g06gXuz-l8i0nHiFJldcuIruwn28hTUrjgtPbjHdSBVn_QQLKc2Fhij8OrhcGqp_D_fvb_KovVmf1X6yWiwXV5VXqWARS-JGD9JTAr2495ZlLV_E4WPxdDpz1jl6XS9HUhMuwBpaCOuipw";
  it("JSON Web Token string (app authentication)", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: `bearer ${BEARER_TOKEN}`
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: `bearer ${BEARER_TOKEN}`
    });

    return octokit.request("/");
  });

  it("error to authenticated request", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/")
      .reply(404, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: "token abc4567",
      log: {
        warn() {}
      }
    });

    return octokit
      .request("/")

      .catch(() => {});
  });

  it("options.auth=token without prefix", () => {
    nock("https://authentication-test-host-token-without-prefix.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host-token-without-prefix.com",
      auth: "abc4567"
    });

    return octokit.request("/").catch(error => {
      console.log(`error.request`);
      console.log(error.request);
    });
  });

  it("options.auth=bearer without prefix", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization:
          "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTM4MTkzMTIsImV4cCI6MTU1MzgxOTM3MiwiaXNzIjoxfQ.etiSZ4LFQZ8tiMGJVqKDoGn8hxMCgwL4iLvU5xBUqbAPr4pbk_jJZmMQjuxTlOnRxq4e7NouTizGCdfohRMb3R1mpLzGPzOH9_jqSA_BWYxolsRP_WDSjuNcw6nSxrPRueMVRBKFHrqcTOZJej0djRB5pI61hDZJ_-DGtiOIFexlK3iuVKaqBkvJS5-TbTekGuipJ652g06gXuz-l8i0nHiFJldcuIruwn28hTUrjgtPbjHdSBVn_QQLKc2Fhij8OrhcGqp_D_fvb_KovVmf1X6yWiwXV5VXqWARS-JGD9JTAr2495ZlLV_E4WPxdDpz1jl6XS9HUhMuwBpaCOuipw"
      }
    })
      .get("/app")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTM4MTkzMTIsImV4cCI6MTU1MzgxOTM3MiwiaXNzIjoxfQ.etiSZ4LFQZ8tiMGJVqKDoGn8hxMCgwL4iLvU5xBUqbAPr4pbk_jJZmMQjuxTlOnRxq4e7NouTizGCdfohRMb3R1mpLzGPzOH9_jqSA_BWYxolsRP_WDSjuNcw6nSxrPRueMVRBKFHrqcTOZJej0djRB5pI61hDZJ_-DGtiOIFexlK3iuVKaqBkvJS5-TbTekGuipJ652g06gXuz-l8i0nHiFJldcuIruwn28hTUrjgtPbjHdSBVn_QQLKc2Fhij8OrhcGqp_D_fvb_KovVmf1X6yWiwXV5VXqWARS-JGD9JTAr2495ZlLV_E4WPxdDpz1jl6XS9HUhMuwBpaCOuipw"
    });

    return octokit.request("/app");
  });

  it("invalid auth errors", () => {
    expect(() => {
      Octokit({ auth: {}, log: { warn() {} } });
    }).to.throw(Error);
  });

  it("auth = createActionAuth()", async () => {
    nock("https://api.github.com", {
      reqheaders: {
        authorization: `token githubtoken123`
      }
    })
      .get("/")
      .reply(200, {});

    const currentEnv = process.env;
    process.env = {
      GITHUB_ACTION: "1",
      GITHUB_TOKEN: "githubtoken123"
    };

    const octokit = new Octokit({
      authStrategy: createActionAuth
    });

    return octokit.request("/").then(() => {
      process.env = currentEnv;
    });
  });
});
