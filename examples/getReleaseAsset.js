"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

var testRepo = {
    user: "aktau",
    repo: "github-release"
};

github.repos.getReleases({
    user: testRepo.user,
    repo: testRepo.repo
}, function(err, res) {
    var releases = res;
    if (releases.length == 0) {
        return;
    }
    var release = releases[0];
    var releaseId = release.id;
    console.log(release);
    
    github.repos.listAssets({
        user: testRepo.user,
        repo: testRepo.repo,
        id: releaseId
    }, function(err, res) {
        var assets = res;
        if (assets.length == 0) {
            return;
        }
        var asset = assets[0];
        var assetId = asset.id;
        console.log(asset);
        
        github.repos.getAsset({
            user: testRepo.user,
            repo: testRepo.repo,
            id: assetId,
            // headers: {
            //     "Accept": "application/octet-stream"
            // }
        }, function(err, res) {
            console.log(res);
        });
    });
});
