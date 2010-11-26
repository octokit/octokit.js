var http = require("http");
var Url = require("url");
var querystring = require("querystring");

var GitHubApi = require("../lib/github").GitHubApi;
var OAuth2 = require("../vendor/node-oauth/lib/oauth2").OAuth2;

var github = new GitHubApi(true);
var user = github.getUserApi();

var clientId = "3e5a546357431172f24d";
var secret = "da60ce7426edfbd3d5253b096a2728e81d3bc9c5";
var oauth = new OAuth2(clientId, secret, 'https://github.com/', 'login/oauth/authorize', 'login/oauth/access_token');

// for demo purposes use one global access token
// in production this has to be stored in a user session
var accessToken = "";

http.createServer(function(req, res) {
    var url = Url.parse(req.url);
    var path = url.pathname;
    var query = querystring.parse(url.query);
    
    if (path == "/" || path.match(/^\/user\/?$/)) {
        
        // redirect to github if there is no access token        
        if (!accessToken) {
            res.writeHead(303, {
                Location: oauth.getAuthorizeUrl({ 
                  redirect_uri: 'http://localhost:7878/github-callback' 
                })
            });
            res.end();
            return;
        }
                
        // use github API            
        user.show("fjakobstest", function(err, user) {
		    res.writeHead(200);
		    res.end(JSON.stringify(user))
        });
        return;
    } 
    // URL called by github after authenticating
    else if (path.match(/^\/github-callback\/?$/)) {
        // upgrade the code to an access token
        oauth.getOAuthAccessToken(query.code, {}, function (err, access_token, refresh_token) {
	        accessToken = access_token;
	        
	        // authenticate github API
	        github.authenticateOAuth(accessToken);
	          
	        //redirect back
	        res.writeHead(303, {
	            Location: "/"
	        });
	        res.end();
        })
        return;
    }
        
    res.writeHead(404);
    res.end("404 - Not found");   
}).listen(7878);

console.log("listening at http://localhost:7878");