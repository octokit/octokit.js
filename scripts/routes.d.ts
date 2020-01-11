declare module "@octokit/routes" {
  interface Spec {
    'api.github.com': string,
    'ghe-2.16': string
    'ghe-2.17': string
    'ghe-2.18': string
    'ghe-2.19': string
  }

  let object: Spec

  export default object
}