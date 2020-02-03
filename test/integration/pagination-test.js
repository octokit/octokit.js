const nock = require("nock");

const { Octokit } = require("../../");

require("../mocha-node-setup");

describe("pagination", () => {
  it(".paginate()", () => {
    nock("https://pagination-test.com")
      .get("/organizations")
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        Link:
          '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .get("/organizations")
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }])
      .persist();

    const octokit = new Octokit({
      baseUrl: "https://pagination-test.com"
    });

    return Promise.all([
      octokit
        .paginate("GET /organizations", { per_page: 1 })
        .then(organizations => {
          expect(organizations).to.deep.equal([{ id: 1 }, { id: 2 }]);
        }),
      octokit
        .paginate("GET /organizations", { per_page: 1 }, response =>
          response.data.map(org => org.id)
        )
        .then(organizations => {
          expect(organizations).to.deep.equal([1, 2]);
        }),
      octokit
        .paginate(
          {
            method: "GET",
            url: "/organizations",
            per_page: 1
          },
          response => response.data.map(org => org.id)
        )
        .then(organizations => {
          expect(organizations).to.deep.equal([1, 2]);
        })
    ]);
  });

  it(".paginate() with map function returning undefined", () => {
    nock("https://pagination-test.com")
      .get("/organizations")
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        Link:
          '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .get("/organizations")
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }]);

    const octokit = new Octokit({
      baseUrl: "https://pagination-test.com"
    });

    return octokit
      .paginate("GET /organizations", { per_page: 1 }, response => undefined)
      .then(results => {
        expect(results).to.deep.equal([undefined, undefined]);
      });
  });

  it(".paginate() with early exit", () => {
    nock("https://pagination-test.com")
      .get("/organizations")
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        Link:
          '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .get("/organizations")
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }]);

    const octokit = new Octokit({
      baseUrl: "https://pagination-test.com"
    });

    return octokit
      .paginate("GET /organizations", { per_page: 1 }, (response, done) => {
        done();
        return response.data.map(org => org.id);
      })
      .then(organizations => {
        expect(organizations).to.deep.equal([1]);
      });
  });

  it(".paginate() with Link header pointing to different path", () => {
    nock("https://other-pagination-test.com")
      .get("/organizations")
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        Link:
          '<https://other-pagination-test.com/foobar?page=2&per_page=1>; rel="next"',
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .get("/foobar")
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }]);

    const octokit = new Octokit({
      baseUrl: "https://other-pagination-test.com"
    });

    return octokit
      .paginate("GET /organizations", { per_page: 1 })
      .then(organizations => {
        expect(organizations).to.deep.equal([{ id: 1 }, { id: 2 }]);
      });
  });

  it("autopagination", () => {
    nock("https://pagination-test.com")
      .get("/organizations")
      .query({ per_page: 1 })
      .reply(200, [{ id: 1 }], {
        Link:
          '<https://pagination-test.com/organizations?page=2&per_page=1>; rel="next"',
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .get("/organizations")
      .query({ page: 2, per_page: 1 })
      .reply(200, [{ id: 2 }], {
        "X-GitHub-Media-Type": "github.v3; format=json"
      })
      .persist();

    const octokit = new Octokit({
      baseUrl: "https://pagination-test.com"
    });

    octokit.hook.wrap("request", (request, options) => {
      if (!options.request.paginate) {
        return request(options);
      }

      delete options.request.paginate;
      return octokit.paginate(options);
    });

    return octokit
      .request("GET /organizations", {
        per_page: 1,
        request: { paginate: true }
      })
      .then(organizations => {
        expect(organizations).to.deep.equal([{ id: 1 }, { id: 2 }]);
      });
  });

  it(".paginate.iterator for end endpoints that don’t paginate", () => {
    nock("https://pagination-test.com")
      .get("/orgs/myorg")
      .reply(200, {
        foo: "bar"
      });

    const octokit = new Octokit({
      baseUrl: "https://pagination-test.com"
    });

    const iterator = octokit.paginate
      .iterator({
        method: "GET",
        url: "/orgs/:org",
        org: "myorg"
      })
      [Symbol.asyncIterator]();

    return iterator.next().then(result => {
      expect(result.value.data.foo).to.equal("bar");
    });
  });

  it(".paginate() with results namespace (search)", () => {
    nock("https://api.github.com")
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
            '<https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=1>; rel="prev", <https://api.github.com/search/issues?q=repo%3Aweb-platform-tests%2Fwpt+is%3Apr+is%3Aopen+updated%3A%3E2019-02-26&per_page=1&page=1>; rel="first"'
        }
      );

    const octokit = new Octokit();
    const options = octokit.search.issuesAndPullRequests.endpoint.merge({
      q: "repo:web-platform-tests/wpt is:pr is:open updated:>2019-02-26",
      per_page: 1,
      headers: {
        "accept-encoding": ""
      }
    });

    return octokit.paginate(options).then(results => {
      expect(results).to.deep.equal([{ id: "123" }, { id: "456" }]);
    });
  });

  it(".paginate() with results namespace (GET /installation/repositories)", () => {
    nock("https://api.github.com")
      .get("/installation/repositories")
      .query({
        per_page: 1
      })
      .reply(
        200,
        {
          total_count: 2,
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
            '<https://api.github.com/installation/repositories?per_page=1&page=1>; rel="prev", <https://api.github.com/installation/repositories?per_page=1&page=1>; rel="first"'
        }
      );

    const octokit = new Octokit();
    const options = octokit.apps.listRepos.endpoint.merge({
      per_page: 1
    });

    return octokit.paginate(options).then(results => {
      expect(results).to.deep.equal([{ id: "123" }, { id: "456" }]);
    });
  });

  it(".paginate() with results namespace (GET /user/installations)", () => {
    nock("https://api.github.com")
      .get("/user/installations")
      .query({
        per_page: 1
      })
      .reply(
        200,
        {
          total_count: 2,
          installations: [
            {
              id: "123"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/user/installations?per_page=1&page=2>; rel="next", <https://api.github.com/user/installations?per_page=1&page=2>; rel="last"'
        }
      )

      .get("/user/installations")
      .query({
        per_page: 1,
        page: 2
      })
      .reply(
        200,
        {
          total_count: 2,
          installations: [
            {
              id: "456"
            }
          ]
        },
        {
          Link:
            '<https://api.github.com/user/installations?per_page=1&page=1>; rel="prev", <https://api.github.com/user/installations?per_page=1&page=1>; rel="first"'
        }
      );

    const octokit = new Octokit();
    const options = octokit.apps.listInstallationsForAuthenticatedUser.endpoint.merge(
      {
        per_page: 1
      }
    );

    return octokit.paginate(options).then(results => {
      expect(results).to.deep.equal([{ id: "123" }, { id: "456" }]);
    });
  });

  it(".paginate() with results namespace (GET /installation/repositories, single page response)", () => {
    nock("https://api.github.com")
      .get("/installation/repositories")
      .query({
        per_page: 1
      })
      .reply(200, {
        total_count: 1,
        repositories: [
          {
            id: "123"
          }
        ]
      });

    const octokit = new Octokit();
    const options = octokit.apps.listRepos.endpoint.merge({
      per_page: 1
    });

    return octokit.paginate(options).then(results => {
      expect(results).to.deep.equal([{ id: "123" }]);
    });
  });

  it("does not paginate non-paginated response with total_count property", () => {
    nock("https://api.github.com")
      .get("/repos/octokit/rest.js/commits/abc4567/status")
      .reply(200, {
        state: "success",
        total_count: 2,
        statuses: [{ id: 1 }, { id: 2 }]
      });

    const octokit = new Octokit();
    const options = octokit.repos.getCombinedStatusForRef.endpoint.merge({
      owner: "octokit",
      repo: "rest.js",
      ref: "abc4567"
    });

    return octokit.paginate(options).then(result => {
      expect(result[0].state).to.equal("success");
    });
  });
});
