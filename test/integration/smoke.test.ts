import fetchMock from "fetch-mock";

import { Octokit } from "../../src";

describe("Smoke tests", () => {
  it("is a function", () => {
    expect(Octokit).toBeInstanceOf(Function);
    expect(() => new Octokit()).not.toThrow();
  });

  it("can be used as a type", () => {
    let octokit: Octokit;
    octokit = new Octokit();
  });

  it("userAgent option", () => {
    const mock = fetchMock
      .sandbox()
      .getOnce("https://api.github.com/", (url, { headers }) => {
        // @ts-ignore headers has wrong typing in fetch-mock 8.3.2
        expect(headers["user-agent"]).toMatch(/^my-app\/1.2.3 /);

        return { ok: true };
      });

    const octokit = new Octokit({
      userAgent: "my-app/1.2.3",
      request: {
        fetch: mock,
      },
    });
    return octokit.request("/");
  });

  it("@octokit/plugin-rest-endpoint-methods", () => {
    const mock = fetchMock
      .sandbox()
      .getOnce("path:/repos/octocat/hello-world", { ok: true });

    const octokit = new Octokit({
      request: {
        fetch: mock,
      },
    });

    expect(octokit.rest.repos.get).toBeInstanceOf(Function);
    return octokit.rest.repos.get({
      owner: "octocat",
      repo: "hello-world",
    });
  });

  it("@octokit/plugin-paginate-rest", () => {
    const octokit = new Octokit();
    expect(octokit.paginate).toBeInstanceOf(Function);
  });

  it("@octokit/plugin-request-log", () => {
    const mock = fetchMock
      .sandbox()
      .getOnce("path:/", { status: 200, body: {} })
      .getOnce("path:/", { status: 404, body: {} }, { overwriteRoutes: false });

    const consoleStub = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };

    const octokit = new Octokit({
      log: consoleStub,
      request: {
        fetch: mock,
      },
    });

    return octokit
      .request("/")
      .then(() => {
        expect(consoleStub.debug.mock.calls.length).toEqual(1);
        expect(consoleStub.info.mock.calls.length).toEqual(1);
        expect(consoleStub.warn.mock.calls.length).toEqual(0);
        expect(consoleStub.error.mock.calls.length).toEqual(0);

        return octokit.request("/");
      })
      .then(
        () => {
          throw new Error("should not resolve on 404");
        },
        () => {
          expect(consoleStub.debug.mock.calls.length).toEqual(2);
          expect(consoleStub.info.mock.calls.length).toEqual(2);
          expect(consoleStub.warn.mock.calls.length).toEqual(0);
          expect(consoleStub.error.mock.calls.length).toEqual(0);
        }
      );
  });
});
