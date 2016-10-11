var Client = require("./../lib/index");

var gh = new Client({
  Promise: require('bluebird')
});

function getAllOrgRepos(orgName) {
  var repos = [];

  function pager(res) {
    repos = repos.concat(res);
    if (gh.hasNextPage(res)) {
      return gh.getNextPage(res)
        .then(pager);
    }
    return repos;
  }

  return gh.repos.getForOrg({ org: orgName })
    .then(pager);
}

getAllOrgRepos('organization')
  .then(function(orgRepos) {
    console.log(orgRepos);
  });