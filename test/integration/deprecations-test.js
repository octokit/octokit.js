const btoa = require("btoa-lite");
const nock = require("nock");

const DeprecatedOctokit = require("../../");
const { Octokit } = DeprecatedOctokit;

require("../mocha-node-setup");

const Mocktokit = Octokit.plugin(octokit => {
  octokit.hook.wrap("request", () => null);
});

describe("deprecations", () => {
  it('const Octokit = require("@octokit/rest")', () => {
    let warnCalledCount = 0;
    new DeprecatedOctokit({
      log: {
        warn: () => {
          warnCalledCount++;
        }
      }
    });

    expect(warnCalledCount).to.equal(1);
    expect(() => new DeprecatedOctokit()).to.not.throw();
    expect(typeof DeprecatedOctokit.plugin).to.equal("function");
  });
  it("octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)", () => {
    let warnCalledCount = 0;
    const octokit = new Mocktokit({
      log: {
        warn: deprecation => {
          warnCalledCount++;
        }
      }
    });

    return Promise.all([
      octokit.search.issues({ q: "foo" }),
      octokit.search.issues({ q: "foo" })
    ]).then(() => {
      expect(warnCalledCount).to.equal(1);
    });
  });

  it('"number" parameter has been renamed to "issue_number" (2019-04-10)', () => {
    nock("https://deprecation-host.com")
      .get("/repos/octocat/hello-world/issues/123")
      .twice()
      .reply(200, {});

    let warnCalledCount = 0;
    const octokit = new Octokit({
      baseUrl: "https://deprecation-host.com",
      log: {
        warn: deprecation => {
          warnCalledCount++;
        }
      }
    });

    return Promise.all([
      octokit.issues.get({
        owner: "octocat",
        repo: "hello-world",
        number: 123
      }),
      octokit.issues.get({ owner: "octocat", repo: "hello-world", number: 123 })
    ]).then(() => {
      // Ideally it would only log once, but it’s unclear on how to implement that
      // without adding significant complexity
      expect(warnCalledCount).to.equal(2);
    });
  });

  it("deprecated parameter: passing both new and deprecated parameter", () => {
    nock("https://deprecation-host.com")
      .get("/repos/octocat/hello-world/issues/456")
      .twice()
      .reply(200, {});

    let warnCalledCount = 0;
    const octokit = new Octokit({
      baseUrl: "https://deprecation-host.com",
      log: {
        warn: deprecation => {
          warnCalledCount++;
        }
      }
    });

    return octokit.issues
      .get({
        owner: "octocat",
        repo: "hello-world",
        number: 123,
        issue_number: 456
      })
      .then(() => {
        expect(warnCalledCount).to.equal(1);
      });
  });

  it("deprecated parameter: passing no options", () => {
    const octokit = new Octokit();

    return octokit.issues.get().catch(error => {
      expect(error.status).to.equal(400);
    });
  });

  it("octokit.issues.get.endpoint({owner, repo, number}) returns correct URL and logs deprecation", () => {
    let warnCalledCount = 0;
    const octokit = new Octokit({
      log: {
        warn() {
          warnCalledCount++;
        }
      }
    });

    const { url } = octokit.issues.get.endpoint({
      owner: "octocat",
      repo: "hello-world",
      number: 123
    });
    const options = octokit.issues.get.endpoint.merge({
      owner: "octocat",
      repo: "hello-world",
      number: 123
    });

    expect(url).to.equal(
      "https://api.github.com/repos/octocat/hello-world/issues/123"
    );
    expect(options.url).to.equal("/repos/:owner/:repo/issues/:issue_number");
    expect("number" in options).to.equal(false);
    expect(options.issue_number).to.equal(123);
    expect(warnCalledCount).to.equal(2);
  });

  it("octokit.paginate(octokit.pulls.listReviews.merge({owner, repo, number}))", () => {
    nock("https://deprecation-host.com")
      .get("/repos/octocat/hello-world/pulls/123/reviews")
      .query({
        per_page: 1
      })
      .reply(
        200,
        [
          {
            id: "123"
          }
        ],
        {
          Link:
            '<https://deprecation-host.com/repositories/1/pulls/123/reviews?per_page=1&page=2>; rel="next", <https://deprecation-host.com/repositories/1/pulls/123/reviews?per_page=1&page=2>; rel="last"'
        }
      )

      .get("/repositories/1/pulls/123/reviews")
      .query({
        per_page: 1,
        page: 2
      })
      .reply(
        200,
        {
          total_count: 2,
          repository_selection: "all",
          repositories: [
            {
              id: "456"
            }
          ]
        },
        {
          Link:
            '<https://deprecation-host.com/repositories/1/pulls/123/reviews?per_page=1&page=1>; rel="first", <https://deprecation-host.com/repositories/1/pulls/123/reviews?per_page=1&page=1>; rel="prev"'
        }
      );

    let warnCalledCount = 0;
    const octokit = new Octokit({
      baseUrl: "https://deprecation-host.com",
      log: {
        warn() {
          warnCalledCount++;
        }
      }
    });

    const options = octokit.pulls.listReviews.endpoint.merge({
      owner: "octocat",
      repo: "hello-world",
      number: 123,
      per_page: 1
    });

    return octokit.paginate(options).then(response => {
      expect(warnCalledCount).to.equal(1);
    });
  });

  it("octokit.authenticate(): basic", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    let warnCalledCount = 0;
    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {
          warnCalledCount++;
        }
      }
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password"
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password"
    });

    expect(warnCalledCount).to.equal(1);

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): basic with 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password",
      on2fa() {
        return 123456;
      }
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): basic with async 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password",
      on2fa() {
        return Promise.resolve(123456);
      }
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): basic with 2fa and invalid one-time-password", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/orgs/myorg")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password",
      on2fa() {
        return 123456;
      }
    });

    return octokit.orgs
      .get({ org: "myorg" })

      .then(() => {
        throw new Error("should not resolve");
      })

      .catch(error => {
        expect(error.message).to.match(/Invalid one-time password/i);
      });
  });

  it("octokit.authenticate(): basic without 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "basic",
      username: "username",
      password: "password"
    });

    return octokit.orgs
      .get({ org: "myorg" })
      .then(() => {
        throw new Error('should fail with "on2fa missing" error');
      })
      .catch(error => {
        expect(error.message).to.equal(
          "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication"
        );
        expect(error.status).to.equal(401);
        expect(!!error.headers).to.equal(true);
        expect(!!error.request).to.equal(true);
      });
  });

  it("octokit.authenticate(): token", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "token",
      token: "abc4567"
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): oauth token", () => {
    nock("https://authentication-test-host.com")
      .get("/orgs/myorg")
      .query({ access_token: "abc4567" })
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "oauth",
      token: "abc4567"
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): oauth token with query", () => {
    nock("https://authentication-test-host.com")
      .get("/orgs/myorg/repos")
      .query({ per_page: 1, access_token: "abc4567" })
      .reply(200, []);

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "oauth",
      token: "abc4567"
    });

    return octokit.repos.listForOrg({ org: "myorg", per_page: 1 });
  });

  it("octokit.authenticate(): oauth key & secret", () => {
    nock("https://authentication-test-host.com")
      .get("/orgs/myorg")
      .query({ client_id: "oauthkey", client_secret: "oauthsecret" })
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "oauth",
      key: "oauthkey",
      secret: "oauthsecret"
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): oauth key & secret with query", () => {
    nock("https://authentication-test-host.com")
      .get("/")
      .query({
        foo: "bar",
        client_id: "oauthkey",
        client_secret: "oauthsecret"
      })
      .reply(200, []);

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "oauth",
      key: "oauthkey",
      secret: "oauthsecret"
    });

    return octokit.request("/?foo=bar");
  });

  it("octokit.authenticate(): app", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Bearer abc4567"
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate({
      type: "app",
      token: "abc4567"
    });

    return octokit.orgs.get({ org: "myorg" });
  });

  it("octokit.authenticate(): without options", () => {
    const octokit = new Octokit({
      log: {
        warn: () => {}
      }
    });

    octokit.authenticate();
  });

  it("octokit.authenticate(): errors", () => {
    const octokit = new Octokit({
      log: {
        warn: () => {}
      }
    });

    expect(() => {
      octokit.authenticate({});
    }).to.throw(Error);

    expect(() => {
      octokit.authenticate({ type: "basic" });
    }).to.throw(Error);

    expect(() => {
      octokit.authenticate({ type: "oauth" });
    }).to.throw(Error);

    expect(() => {
      octokit.authenticate({ type: "token" });
    }).to.throw(Error);
  });

  it('octokit.authenticate() when "auth" option is set', () => {
    let warnCalledWith;
    const octokit = new Octokit({
      auth: "token secret123",
      log: {
        warn: message => {
          warnCalledWith = message;
        }
      }
    });

    octokit.authenticate({
      type: "token",
      token: "secret123"
    });

    expect(warnCalledWith).to.match(
      /octokit\.authenticate\(\) is deprecated and has no effect/
    );
  });

  it("new Octokit({ auth: { username, password, on2fa } })", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    let warnCalledCount = 0;

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password",
        on2fa() {}
      },
      log: {
        warn: () => {
          warnCalledCount++;
        }
      }
    });

    return octokit.orgs
      .get({ org: "myorg" })
      .then(() => {
        // deprecation is only logged once per process, I couldn't figure out how to reset the counter
        // expect(warnCalledCount).to.equal(1);

        return octokit.auth();
      })
      .then(authentication => {
        expect(authentication).to.deep.equal({
          type: "deprecated",
          message:
            'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
        });
      });
  });

  it("new Octokit({ auth: { clientId, clientSecret } })", () => {
    nock("https://authentication-test-host.com")
      .get("/orgs/myorg")
      .query({
        client_id: "123",
        client_secret: "secret123"
      })
      .reply(200, {});

    let warnCalledCount = 0;

    const { Octokit } = require("../../");
    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        clientId: "123",
        clientSecret: "secret123"
      },
      log: {
        warn: () => {
          warnCalledCount++;
        }
      }
    });

    return octokit.orgs.get({ org: "myorg" }).then(() => {
      // deprecation is only logged once per process, I couldn't figure out how to reset the counter
      // expect(warnCalledCount).to.equal(1);
    });
  });

  it("new Octokit({ auth () { /* ... */ } })", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "token secret123"
      }
    })
      .get("/orgs/myorg")
      .reply(200, {});

    let warnCalledCount = 0;

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth() {
        return "token secret123";
      },
      log: {
        warn: () => {
          warnCalledCount++;
        }
      }
    });

    return octokit.orgs.get({ org: "myorg" }).then(() => {
      // deprecation is only logged once per process, I couldn't figure out how to reset the counter
      // expect(warnCalledCount).to.equal(1);
    });
  });

  it("options.auth { username, password } ", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password"
      },
      log: {
        warn() {}
      }
    });

    return octokit.request("/");
  });

  it("options.auth { username, password, on2fa } with 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password",
        on2fa() {
          return 123456;
        }
      }
    });

    return octokit.request("/");
  });

  it("options.auth { username, password, on2fa } with async 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password",
        on2fa() {
          return Promise.resolve(123456);
        }
      }
    });

    return octokit.request("/");
  });

  it("options.auth { username, password, on2fa } with invalid one-time-password", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "123456"
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password",
        on2fa() {
          return 123456;
        }
      }
    });

    return octokit
      .request("/")

      .then(() => {
        throw new Error("should not resolve");
      })

      .catch(error => {
        expect(error.message).to.match(/Invalid one-time password/i);
      });
  });

  it("options.auth { username, password, on2fa } with expiring 2fa", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "1"
      }
    })
      .get("/")
      .reply(200, {});

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "1"
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
        "x-github-otp": "2"
      }
    })
      .get("/")
      .reply(200, {});

    let callCount = 0;
    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password",
        on2fa() {
          return ++callCount;
        }
      }
    });

    return octokit
      .request("/")
      .then(() => octokit.request("/"))
      .then(() => {
        expect(callCount).to.equal(2);
      });
  });

  it("options.auth is { username, password }", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
      }
    })
      .get("/")
      .reply(
        401,
        {},
        {
          "x-github-otp": "required; app"
        }
      );

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        username: "username",
        password: "password"
      }
    });

    return octokit
      .request("/")

      .then(() => {
        throw new Error('should fail with "on2fa missing" error');
      })

      .catch(error => {
        expect(error.message).to.equal(
          "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication"
        );
        expect(error.status).to.equal(401);
        expect(!!error.headers).to.equal(true);
        expect(!!error.request).to.equal(true);
      });
  });

  it("options.oauth is object with clientId & clientSecret", () => {
    nock("https://authentication-test-host.com")
      .get("/")
      .query({ client_id: "id123", client_secret: "secret456" })
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        clientId: "id123",
        clientSecret: "secret456"
      }
    });

    return octokit.request("/");
  });

  it('options.oauth is object with clientId & clientSecret with "?" in URL', () => {
    nock("https://authentication-test-host.com")
      .get("/")
      .query({ foo: "bar", client_id: "id123", client_secret: "secret456" })
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        clientId: "id123",
        clientSecret: "secret456"
      }
    });

    return octokit.request("/?foo=bar");
  });

  it("options.auth is function", () => {
    nock("https://authentication-test-host-auth-as-function.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host-auth-as-function.com",
      auth: () => "token abc4567"
    });

    return octokit.request("/");
  });

  it("options.auth is async function", () => {
    nock("https://authentication-test-host-as-async-function.com", {
      reqheaders: {
        authorization: "token abc4567"
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host-as-async-function.com",
      auth: () => Promise.resolve("token abc4567")
    });

    return octokit.request("/");
  });

  it("options.auth function (throws error)", () => {
    const octokit = new Octokit({
      auth() {
        throw new Error("test");
      }
    });

    return octokit
      .request("/")
      .then(() => {
        throw new Error("should not resolve");
      })
      .catch(error => {
        expect(error.message).to.equal("test");
      });
  });

  /**
   * There is a special case for OAuth applications, when `clientId` and `clientSecret` is passed as
   * Basic Authorization instead of query parameters. The only routes where that applies share the same
   * URL though: `/applications/:client_id/tokens/:access_token`. We identify this acception by looking
   * for this path.
   *
   *  1. [Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
   *  2. [Reset an authorization](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
   *  3. [Revoke an authorization for an application](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)
   */
  it("OAuth client & secret to check authorization", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "Basic aWQxMjM6c2VjcmV0NDU2"
      }
    })
      .get("/applications/id123/tokens/token123")
      .reply(200, {})
      .post("/applications/id123/tokens/token123")
      .reply(200, {})
      .delete("/applications/id123/tokens/token123")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: {
        clientId: "id123",
        clientSecret: "secret456"
      }
    });

    const options = {
      client_id: "id123",
      access_token: "token123"
    };

    return Promise.all([
      octokit.request(
        "GET /applications/:client_id/tokens/:access_token",
        options
      ),
      octokit.request(
        "POST /applications/:client_id/tokens/:access_token",
        options
      ),
      octokit.request(
        "DELETE /applications/:client_id/tokens/:access_token",
        options
      )
    ]);
  });

  it("options.auth=basic without prefix", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "basic Zm9vLWJhcjpzZWNyZXQ="
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: btoa("foo-bar:secret")
    });

    return octokit.request("/");
  });

  it("options.auth=() => token without prefix", () => {
    nock(
      "https://authentication-test-host-auth-as-function-token-without-prefix.com",
      {
        reqheaders: {
          authorization: "token abc4567"
        }
      }
    )
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl:
        "https://authentication-test-host-auth-as-function-token-without-prefix.com",
      auth: () => "abc4567"
    });

    return octokit.request("/");
  });

  it("options.auth=() => basic without prefix", () => {
    nock("https://authentication-test-host.com", {
      reqheaders: {
        authorization: "basic Zm9vLWJhcjpzZWNyZXQ="
      }
    })
      .get("/")
      .reply(200, {});

    const octokit = new Octokit({
      baseUrl: "https://authentication-test-host.com",
      auth: () => btoa("foo-bar:secret")
    });

    return octokit.request("/");
  });

  it("options.auth=() => bearer without prefix", () => {
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
      auth: () =>
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTM4MTkzMTIsImV4cCI6MTU1MzgxOTM3MiwiaXNzIjoxfQ.etiSZ4LFQZ8tiMGJVqKDoGn8hxMCgwL4iLvU5xBUqbAPr4pbk_jJZmMQjuxTlOnRxq4e7NouTizGCdfohRMb3R1mpLzGPzOH9_jqSA_BWYxolsRP_WDSjuNcw6nSxrPRueMVRBKFHrqcTOZJej0djRB5pI61hDZJ_-DGtiOIFexlK3iuVKaqBkvJS5-TbTekGuipJ652g06gXuz-l8i0nHiFJldcuIruwn28hTUrjgtPbjHdSBVn_QQLKc2Fhij8OrhcGqp_D_fvb_KovVmf1X6yWiwXV5VXqWARS-JGD9JTAr2495ZlLV_E4WPxdDpz1jl6XS9HUhMuwBpaCOuipw"
    });

    return octokit.request("/app");
  });

  // deprecated client options
  it("agent option", () => {
    let warnCalled = false;
    const octokit = new Octokit({
      agent: "agent",
      log: {
        warn: () => {
          warnCalled = true;
        }
      }
    });

    octokit.hook.wrap("request", (request, options) => {
      expect(options.request.agent).to.equal("agent");
      return "ok";
    });

    expect(warnCalled).to.equal(true);

    return octokit
      .request("/")

      .then(response => {
        expect(response).to.equal("ok");
      });
  });

  it("timeout option", () => {
    let warnCallCount = 0;
    const octokit = new Octokit({
      timeout: 123,
      log: {
        warn: () => {
          warnCallCount++;
        }
      }
    });
    Octokit({
      timeout: 456,
      log: {
        warn: () => {
          warnCallCount++;
        }
      }
    });

    octokit.hook.wrap("request", (request, options) => {
      expect(options.request.timeout).to.equal(123);
      return "ok";
    });

    expect(warnCallCount).to.equal(1);

    return octokit
      .request("/")

      .then(response => {
        expect(response).to.equal("ok");
      });
  });

  it('headers["User-Agent"] option', () => {
    let warnCalled = false;
    const octokit = new Octokit({
      headers: {
        "User-Agent": "blah"
      },
      log: {
        warn: () => {
          warnCalled = true;
        }
      }
    });

    octokit.hook.wrap("request", (request, options) => {
      expect(options.headers["user-agent"]).to.match(
        /^blah octokit\.js\/0\.0\.0-development /
      );
      return "ok";
    });

    expect(warnCalled).to.equal(true);

    return octokit
      .request("/")

      .then(response => {
        expect(response).to.equal("ok");
      });
  });

  it("headers.accept option", () => {
    const octokit = new Octokit({
      headers: {
        accept:
          "application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json"
      },
      log: {
        warn: () => {}
      }
    });

    octokit.hook.wrap("request", (request, options) => {
      expect(options.headers.accept).to.equal(
        "application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json"
      );
      return "ok";
    });

    return octokit
      .request("/")

      .then(response => {
        expect(response).to.equal("ok");
      });
  });

  it(".paginate() with results namespace", () => {
    nock("https://api.github.com")
      .get("/installation/repositories")
      .query({
        per_page: 1
      })
      .reply(
        200,
        {
          total_count: 2,
          repository_selection: "all",
          repositories: [
            {
              id: "123"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/installation/repositories?per_page=1&page=2>; rel="next", <https://api.github.com/installation/repositories?per_page=1&page=2>; rel="last"'
        }
      )

      .get("/installation/repositories")
      .query({
        per_page: 1,
        page: 2
      })
      .reply(
        200,
        {
          total_count: 2,
          repository_selection: "all",
          repositories: [
            {
              id: "456"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/installation/repositories?per_page=1&page=1>; rel="first", <https://api.github.com/installation/repositories?per_page=1&page=1>; rel="prev"'
        }
      )

      .get("/search/issues")
      .query({
        q: "repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26",
        per_page: 1
      })
      .reply(
        200,
        {
          total_count: 2,
          incomplete_results: false,
          items: [
            {
              id: "123"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=2>; rel="next", <https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=2>; rel="last"'
        }
      )

      .get("/search/issues")
      .query({
        q: "repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26",
        per_page: 1,
        page: 2
      })
      .reply(
        200,
        {
          total_count: 2,
          incomplete_results: false,
          items: [
            {
              id: "456"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=1>; rel="first", <https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=1>; rel="prev"'
        }
      );

    let warnCallCount = 0;
    const octokit = new Octokit({
      log: {
        warn: msg => {
          warnCallCount++;
        }
      }
    });
    const searchOptions = octokit.search.issuesAndPullRequests.endpoint.merge({
      q: "repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26",
      per_page: 1,
      headers: {
        "accept-encoding": ""
      }
    });
    const listReposOptions = octokit.apps.listRepos.endpoint.merge({
      per_page: 1
    });

    return octokit
      .paginate(listReposOptions, result => {
        expect(result.data.incomplete_results).to.equal(undefined);
        expect(result.data.repository_selection).to.equal("all");
        expect(result.data.total_count).to.equal(2);
        expect(result.data.repositories.length).to.equal(1);
        return result;
      })

      .then(() =>
        octokit.paginate(searchOptions, result => {
          expect(result.data.incomplete_results).to.equal(false);
          expect(result.data.total_count).to.equal(2);
          expect(result.data.items.length).to.equal(1);
          return result;
        })
      )

      .then(() => {
        expect(warnCallCount).to.equal(4);
      });
  });
});
