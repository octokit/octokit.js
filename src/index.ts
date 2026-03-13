export { Octokit, RequestError } from "./octokit.js";
export type { PageInfoForward, PageInfoBackward } from "./octokit.js";
export { App, OAuthApp, createNodeMiddleware } from "./app.js";
// https://docs.github.com/en/rest/reference/issues#create-an-issue
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: <♤>-worl",
  title: "[○|●],*world!",
  body: "I created this issue using Octokit!",
});
