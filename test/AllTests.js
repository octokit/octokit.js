var async_testing = require('../../vendor/node-async-testing/async_testing');


var suites = {
    GitHubApi: require("./TestGitHubApi").suite,
    Request: require("./TestRequest").suite,
    UserApi: require("./TestUserApi").suite
};

if (module === require.main) {
    async_testing.runSuites(suites);
}