require("../support/paths");

var http = require("http");
var Url = require("url");
var querystring = require("querystring");

var GitHubApi = require("github").GitHubApi;
var OAuth2 = require("oauth2").OAuth2;

var github = new GitHubApi(true);
var user = github.getUserApi();
var repo = github.getRepoApi();

var clientId = "e8c434a1c92e9de7ff8d";
var secret = "1d0fcbb060e1dd86a0aa3d12265419c9bb19a333";
var oauth = new OAuth2(clientId, secret, 'https://github.com/', 'login/oauth/authorize', 'login/oauth/access_token');

// for demo purposes use one global access token
// in production this has to be stored in a user session
var accessToken = "";

http.createServer(function(req, res) {
    var url = Url.parse(req.url);
    var path = url.pathname;
    var query = querystring.parse(url.query);
    
    if (path == "/" || path.match(/^\/user\/?$/)) {
        
        // redirect to github if there is no access token        
        if (!accessToken) {
            res.writeHead(303, {
                Location: oauth.getAuthorizeUrl({ 
                  redirect_uri: 'http://localhost:7878/github-callback',
                  scope: "user,repo,gist"
                })
            });
            res.end();
            return;
        }
                
        // use github API            
        user.show(function(err, user) {
            if (err) {
                res.writeHead(err.status);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(JSON.stringify(user));
        });
        return;
    } 
    // URL called by github after authenticating
    else if (path.match(/^\/github-callback\/?$/)) {
        // upgrade the code to an access token
        oauth.getOAuthAccessToken(query.code, {}, function (err, access_token, refresh_token) {
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end(err + "");
                return;
            }
            
            accessToken = access_token;
            
            // authenticate github API
            github.authenticateOAuth(accessToken);
              
            //redirect back
            res.writeHead(303, {
                Location: "/"
            });
            res.end();
        });
        return;
    }
        
    res.writeHead(404);
    res.end("404 - Not found");   
}).listen(7878);

console.log("listening at http://localhost:7878");