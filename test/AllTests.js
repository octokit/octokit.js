var async_testing = require('../../vendor/node-async-testing/async_testing');


var suites = {
    ObjectApi: require("./ObjectApiTest").suite,
    IssueApi: require("./IssueApiTest").suite,
    CommitApi: require("./CommitApiTest").suite,
    RepoApi: require("./RepoApiTest").suite,
    UserApi: require("./UserApiTest").suite,
    GitHubApi: require("./GitHubApiTest").suite,
    Request: require("./RequestTest").suite,
    Authentification: require("./AuthentificationTest").suite
};

if (module === require.main) {
    async_testing.runSuites(suites);
}