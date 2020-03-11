const lolex = require("lolex");
const nock = require("nock");
const { createActionAuth, createAppAuth } = require("@octokit/auth");

const { Octokit } = require("../..");

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

  it("action auth strategy", async () => {
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

  it("app auth strategy", async () => {
    const APP_ID = 1;
    const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1c7+9z5Pad7OejecsQ0bu3aozN3tihPmljnnudb9G3HECdnH
lWu2/a1gB9JW5TBQ+AVpum9Okx7KfqkfBKL9mcHgSL0yWMdjMfNOqNtrQqKlN4kE
p6RD++7sGbzbfZ9arwrlD/HSDAWGdGGJTSOBM6pHehyLmSC3DJoR/CTu0vTGTWXQ
rO64Z8tyXQPtVPb/YXrcUhbBp8i72b9Xky0fD6PkEebOy0Ip58XVAn2UPNlNOSPS
ye+Qjtius0Md4Nie4+X8kwVI2Qjk3dSm0sw/720KJkdVDmrayeljtKBx6AtNQsSX
gzQbeMmiqFFkwrG1+zx6E7H7jqIQ9B6bvWKXGwIDAQABAoIBAD8kBBPL6PPhAqUB
K1r1/gycfDkUCQRP4DbZHt+458JlFHm8QL6VstKzkrp8mYDRhffY0WJnYJL98tr4
4tohsDbqFGwmw2mIaHjl24LuWXyyP4xpAGDpl9IcusjXBxLQLp2m4AKXbWpzb0OL
Ulrfc1ZooPck2uz7xlMIZOtLlOPjLz2DuejVe24JcwwHzrQWKOfA11R/9e50DVse
hnSH/w46Q763y4I0E3BIoUMsolEKzh2ydAAyzkgabGQBUuamZotNfvJoDXeCi1LD
8yNCWyTlYpJZJDDXooBU5EAsCvhN1sSRoaXWrlMSDB7r/E+aQyKua4KONqvmoJuC
21vSKeECgYEA7yW6wBkVoNhgXnk8XSZv3W+Q0xtdVpidJeNGBWnczlZrummt4xw3
xs6zV+rGUDy59yDkKwBKjMMa42Mni7T9Fx8+EKUuhVK3PVQyajoyQqFwT1GORJNz
c/eYQ6VYOCSC8OyZmsBM2p+0D4FF2/abwSPMmy0NgyFLCUFVc3OECpkCgYEA5OAm
I3wt5s+clg18qS7BKR2DuOFWrzNVcHYXhjx8vOSWV033Oy3yvdUBAhu9A1LUqpwy
Ma+unIgxmvmUMQEdyHQMcgBsVs10dR/g2xGjMLcwj6kn+xr3JVIZnbRT50YuPhf+
ns1ScdhP6upo9I0/sRsIuN96Gb65JJx94gQ4k9MCgYBO5V6gA2aMQvZAFLUicgzT
u/vGea+oYv7tQfaW0J8E/6PYwwaX93Y7Q3QNXCoCzJX5fsNnoFf36mIThGHGiHY6
y5bZPPWFDI3hUMa1Hu/35XS85kYOP6sGJjf4kTLyirEcNKJUWH7CXY+00cwvTkOC
S4Iz64Aas8AilIhRZ1m3eQKBgQCUW1s9azQRxgeZGFrzC3R340LL530aCeta/6FW
CQVOJ9nv84DLYohTVqvVowdNDTb+9Epw/JDxtDJ7Y0YU0cVtdxPOHcocJgdUGHrX
ZcJjRIt8w8g/s4X6MhKasBYm9s3owALzCuJjGzUKcDHiO2DKu1xXAb0SzRcTzUCn
7daCswKBgQDOYPZ2JGmhibqKjjLFm0qzpcQ6RPvPK1/7g0NInmjPMebP0K6eSPx0
9/49J6WTD++EajN7FhktUSYxukdWaCocAQJTDNYP0K88G4rtC2IYy5JFn9SWz5oh
x//0u+zd/R/QRUzLOw4N72/Hu+UG6MNt5iDZFCtapRaKt6OvSBwy8w==
-----END RSA PRIVATE KEY-----`;
    // see https://runkit.com/gr2m/reproducable-jwt
    const BEARER =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOi0zMCwiZXhwIjo1NzAsImlzcyI6MX0.q3foRa78U3WegM5PrWLEh5N0bH1SD62OqW66ZYzArp95JBNiCbo8KAlGtiRENCIfBZT9ibDUWy82cI4g3F09mdTq3bD1xLavIfmTksIQCz5EymTWR5v6gL14LSmQdWY9lSqkgUG0XCFljWUglEP39H4yeHbFgdjvAYg3ifDS12z9oQz2ACdSpvxPiTuCC804HkPVw8Qoy0OSXvCkFU70l7VXCVUxnuhHnk8-oCGcKUspmeP6UdDnXk-Aus-eGwDfJbU2WritxxaXw6B4a3flTPojkYLSkPBr6Pi0H2-mBsW_Nvs0aLPVLKobQd4gqTkosX3967DoAG8luUMhrnxe8Q";

    nock("https://api.github.com", {
      reqheaders: {
        authorization: `bearer ${BEARER}`
      }
    })
      .post("/app/installations/123/access_tokens")
      .reply(201, {
        token: "secret123",
        expires_at: "1970-01-01T01:00:00.000Z",
        permissions: {
          metadata: "read"
        },
        repository_selection: "all"
      });

    nock("https://api.github.com", {
      reqheaders: {
        authorization: `token secret123`
      }
    })
      .get("/")
      .reply(200, {});

    const clock = lolex.install({
      now: 0,
      toFake: ["Date"]
    });

    const octokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        id: APP_ID,
        privateKey: PRIVATE_KEY,
        installationId: 123
      }
    });

    return octokit.request("/").then(() => {
      clock.uninstall();
    });
  });
});
