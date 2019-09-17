const nock = require("nock");

const Octokit = require("../../");

require("../mocha-node-setup");

describe("normalize responses .git.getRef() / .git.listRefs()", () => {
  let octokit;

  beforeEach(() => {
    octokit = new Octokit({
      baseUrl: "https://normalize-ref-responses-test.com"
    });
  });

  it(".git.getRef() returns single object", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(200, { ok: true });

    return octokit.git
      .getRef({ owner: "owner", repo: "repo", ref: "ref/foo" })
      .then(response => {
        expect(response.data).to.deep.equal({ ok: true });
      });
  });

  it(".git.getRef() returns array", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(200, [1, 2]);

    return octokit.git
      .getRef({ owner: "owner", repo: "repo", ref: "ref/foo" })
      .then(response => {
        expect.fail("should fail with 404");
      })
      .catch(error => {
        expect(error.status).to.equal(404);
      });
  });

  it(".git.getRef() returns 404", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(404, {});

    return octokit.git
      .getRef({ owner: "owner", repo: "repo", ref: "ref/foo" })
      .then(response => {
        expect.fail("should fail with 404");
      })
      .catch(error => {
        expect(error.status).to.equal(404);
      });
  });

  it(".git.listRefs() returns single object", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(200, { ok: true });

    return octokit.git
      .listRefs({ owner: "owner", repo: "repo", namespace: "ref/foo" })
      .then(response => {
        expect(response.data).to.deep.equal([{ ok: true }]);
      });
  });

  it(".git.listRefs() returns array", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(200, [1, 2]);

    return octokit.git
      .listRefs({ owner: "owner", repo: "repo", namespace: "ref/foo" })
      .then(response => {
        expect(response.data).to.deep.equal([1, 2]);
      });
  });

  it(".git.listRefs() returns 404", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(404, {});

    return octokit.git
      .listRefs({ owner: "owner", repo: "repo", namespace: "ref/foo" })
      .then(response => {
        expect(response.data).to.deep.equal([]);
        expect(response.status).to.equal(200);
      });
  });

  it(".git.listRefs() returns 500", () => {
    nock("https://normalize-ref-responses-test.com")
      .get("/repos/owner/repo/git/refs/ref/foo")
      .reply(500, {});

    return octokit.git
      .listRefs({ owner: "owner", repo: "repo", namespace: "ref/foo" })
      .catch(error => {
        expect(error.status).to.equal(500);
      });
  });
});
