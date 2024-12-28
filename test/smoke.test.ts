import { describe, expect, it } from "vitest";
import { Octokit, App, OAuthApp, RequestError } from "../src/index.ts";

describe("Smoke tests", () => {
  it("Octokit is a function", () => {
    expect(Octokit).toBeInstanceOf(Function);
    expect(() => new Octokit()).not.toThrow();
  });

  it("Octokit can be used as a type", () => {
    let octokit: Octokit;
    octokit = new Octokit();
    expect(octokit.rest.repos.get).toBeInstanceOf(Function);
  });

  it("App is a function", () => {
    expect(App).toBeInstanceOf(Function);
    expect(
      () =>
        new App({
          appId: 123,
          privateKey: "private key here",
        }),
    ).not.toThrow();
  });

  it("App can be used as a type", () => {
    let app: App;
    app = new App({
      appId: 123,
      privateKey: "private key here",
    });

    expect(app.octokit.request).toBeInstanceOf(Function);
  });

  it("OAuthApp is a function", () => {
    expect(OAuthApp).toBeInstanceOf(Function);
    expect(
      () =>
        new OAuthApp({
          clientId: "",
          clientSecret: "",
        }),
    ).not.toThrow();
  });

  it("OAuthApp can be used as a type", () => {
    let app: OAuthApp;
    app = new OAuthApp({
      clientId: "",
      clientSecret: "",
    });

    expect(app.octokit.request).toBeInstanceOf(Function);
  });

  it("RequestError inherits from Error", () => {
    const error = new RequestError("test", 123, {
      request: {
        method: "GET",
        url: "https://api.github.com/",
        headers: {},
      },
    });

    expect(error).toBeInstanceOf(RequestError);
  });
});
