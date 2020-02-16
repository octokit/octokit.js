function createEndpointsSource(version, branch) {
  return {
    resolve: `gatsby-source-git`,
    options: {
      // endpoint method sourceInstanceNames follow this specific
      // naming convention so they may be queried later
      name: version + `-endpoints`,
      remote: `https://github.com/octokit/plugin-rest-endpoint-methods.js.git`,
      branch,
      patterns: `docs/**`
    }
  };
}

module.exports = ({ currentVersion, versions }) => ({
  plugins: [
    // source remote endpoints data for the current version
    createEndpointsSource(currentVersion, 'master'),
    // map over the version config object and add git sources
    // for their docs from this repo and generated endpoint method docs
    ...versions.flatMap(({ name, branch, endpoints }) => [
      {
        resolve: `gatsby-source-git`,
        options: {
          name,
          remote: `https://github.com/octokit/rest.js.git`,
          branch,
          patterns: `docs/src/pages/api/**`
        }
      },
      createEndpointsSource(name, endpoints)
    ])
  ]
});
