import { getInstance, OctokitType } from "../util";

type IteratorResult = {
  value: {
    data: any[];
  };
  done?: boolean;
};

describe("api.github.com", () => {
  let octokit: OctokitType;

  beforeEach(() => {
    return getInstance("paginate-issues", {
      auth: "token 0000000000000000000000000000000000000001",
    }).then((instance) => {
      octokit = instance;
    });
  });

  it("paginate using ayncIterator", () => {
    const options = {
      owner: "octokit-fixture-org",
      repo: "paginate-issues",
      per_page: 3,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
    };

    const iterator = octokit.paginate
      // @ts-ignore TODO: *.endpoint.merge on endpoint methods should always return .url property
      .iterator(octokit.rest.issues.listForRepo.endpoint.merge(options))
      [Symbol.asyncIterator]();

    return iterator
      .next()
      .then((result: IteratorResult) => {
        // page 1, results 1 - 3
        expect(result.value.data.length).toEqual(3);

        return iterator.next();
      })
      .then((result: IteratorResult) => {
        // page 2, results 4 - 6
        expect(result.value.data.length).toEqual(3);

        return iterator.next();
      })
      .then((result: IteratorResult) => {
        // page 3, results 7 - 9
        expect(result.value.data.length).toEqual(3);

        return iterator.next();
      })
      .then((result: IteratorResult) => {
        // page 4, results 10 - 12
        expect(result.value.data.length).toEqual(3);

        return iterator.next();
      })
      .then((result: IteratorResult) => {
        // page 5, results 13
        expect(result.value.data.length).toEqual(1);

        return iterator.next();
      })
      .then((result: IteratorResult) => {
        expect(result.done).toEqual(true);
      });
  });
});
