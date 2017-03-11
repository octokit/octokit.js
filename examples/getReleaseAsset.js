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
    owner: "aktau",
    repo: "github-release"
};

github.repos.getReleases({
    owner: testRepo.owner,
    repo: testRepo.repo
}, function(err, res) {
    var releases = res.data;
    if (releases.length == 0) {
        return;
    }
    var release = releases[0];
    var releaseId = release.id;
    console.log(release);
    
    github.repos.getAssets({
        owner: testRepo.owner,
        repo: testRepo.repo,
        id: releaseId
    }, function(err, res) {
        var assets = res.data;
        if (assets.length == 0) {
            return;
        }
        var asset = assets[0];
        var assetId = asset.id;
        console.log(asset);
        
        github.repos.getAsset({
            owner: testRepo.owner,
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
