const { getInstance } = require("../util");

require("../mocha-node-setup");

if (!process.browser && parseInt(process.version.substr(1), 10) >= 10) {
  require("./paginate-issues-async-await.js");
}

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("paginate-issues", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("paginate using ayncIterator", () => {
    const options = {
      owner: "octokit-fixture-org",
      repo: "paginate-issues",
      per_page: 3,
      headers: {
        accept: "application/vnd.github.v3+json"
      }
    };

    const iterator = octokit.paginate
      .iterator(octokit.issues.listForRepo.endpoint.merge(options))
      [Symbol.asyncIterator]();

    return iterator
      .next()
      .then(result => {
        // page 1, results 1 - 3
        expect(result.value.data.length).to.equal(3);

        return iterator.next();
      })
      .then(result => {
        // page 2, results 4 - 6
        expect(result.value.data.length).to.equal(3);

        return iterator.next();
      })
      .then(result => {
        // page 3, results 7 - 9
        expect(result.value.data.length).to.equal(3);

        return iterator.next();
      })
      .then(result => {
        // page 4, results 10 - 12
        expect(result.value.data.length).to.equal(3);

        return iterator.next();
      })
      .then(result => {
        // page 5, results 13
        expect(result.value.data.length).to.equal(1);

        return iterator.next();
      })
      .then(result => {
        expect(result.done).to.equal(true);
      });
  });
});
