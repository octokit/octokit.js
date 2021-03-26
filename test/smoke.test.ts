import { Octokit } from "../src";

describe("Smoke tests", () => {
  it("is a function", () => {
    expect(Octokit).toBeInstanceOf(Function);
    expect(() => new Octokit()).not.toThrow();
  });

  it("can be used as a type", () => {
    let octokit: Octokit;
    octokit = new Octokit();
    expect(octokit.rest.repos.get).toBeInstanceOf(Function);
  });
});
