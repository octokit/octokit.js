/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var http = require("http");
var sys = require("sys");
var querystring = require("querystring");
var crypto = require("crypto");

/**
 * Performs requests on GitHub API.
 */
var Request = exports.Request = function(options) {
    this.configure(options);
};

(function() {

    this.$defaults = {
        protocol    : 'https',
        url         : ':protocol://github.com/api/v2/:format/:path',
        path        : '/api/v2',
        hostname    : "github.com",
        format      : 'json',
        user_agent  : 'js-github-api (http://github.com/ornicar/php-github-api)',
        http_port   : 443,
        timeout     : 20,
        login_type  : "none",
        username    : null,
        password    : null,
        api_token   : null,
        oauth_access_token: null,
        proxy_host  : null,
        proxy_port  : null,
        debug       : false
    };

    this.configure = function(options)
    {
        options = options || {};
        this.$options = {};
        for (var key in this.$defaults) {
            this.$options[key] = options[key] !== undefined ? options[key] : this.$defaults[key];
        }

        return this;
    };

    /**
     * Change an option value.
     *
     * @param {String} name   The option name
     * @param {Object} value  The value
     *
     * @return {Request} The current object instance
     */
    this.setOption = function(name, value)
    {
        this.$options[name] = value;
        return this;
    };

    /**
    * Get an option value.
    *
    * @param  string $name The option name
    *
    * @return mixed  The option value
    */
    this.getOption = function(name, defaultValue)
    {
        defaultValue = defaultValue === undefined ? null : defaultValue;
        return this.$options[name] ? this.$options[name] : defaultValue;
    };

    /**
     * Send a GET request
     * @see send
     */
    this.get = function(apiPath, parameters, options, callback) {
        return this.send(apiPath, parameters, 'GET', options, callback);
    };

    /**
     * Send a DELETE request
     * @return mixed
     */
    this.delete = function(apiPath, parameters, options, callback) {
        return this.send(apiPath, parameters, 'DELETE', options, callback);
    };

    /**
     * Send a POST request
     * @see send
     */
    this.post = function(apiPath, parameters, options, callback) {
        return this.send(apiPath, parameters, 'POST', options, callback);
    };
  
    /**
     * Send a PUT request
     * @return mixed
     */
    this.put = function(apiPath, parameters, options, callback) {
        return this.send(apiPath, parameters, 'PUT', options, callback);
    };

    /**
     * Send a request to the server, receive a response,
     * decode the response and returns an associative array
     *
     * @param  {String}    apiPath        Request API path
     * @param  {Object}    parameters     Parameters
     * @param  {String}    httpMethod     HTTP method to use
     * @param  {Object}    options        reconfigure the request for this call only
     */
    this.send = function(apiPath, parameters, httpMethod, options, callback)
    {
        httpMethod = httpMethod || "GET";
        if(options)
        {
            var initialOptions = this.$options;
            this.configure(options);
        }

        var self = this;
        this.doSend(apiPath, parameters, httpMethod, function(err, response) {

            if (err) {
                callback && callback(err);
                return;
            }

            response = self.decodeResponse(response);
            if (initialOptions) {
                self.options = initialOptions;
            }

            callback && callback(null, response);
        });
    };

    /**
     * Send a request to the server, receive a response
     *
     * @param {String}   $apiPath       Request API path
     * @param {Object}    $parameters    Parameters
     * @param {String}   $httpMethod    HTTP method to use
     */
    this.doSend = function(apiPath, parameters, httpMethod, callback)
    {
        httpMethod = httpMethod.toUpperCase();
        var host = this.$options.proxy_host ? this.$options.proxy_host : this.$options.hostname;
        var port = this.$options.proxy_host ? this.$options.proxy_port || 3128 : this.$options.http_port || 443;

        var headers = {
            'Host':'github.com',
            "User-Agent": "NodeJS HTTP Client",
            "Content-Length": "0"
        };
        var getParams  = httpMethod == "GET" || httpMethod == "DELETE" ? parameters : {};
        var postParams = (httpMethod == "POST" || httpMethod == "PUT") ? parameters : {};

        switch(this.$options.login_type) {
            case "oauth":
                getParams.access_token = this.$options['oauth_access_token'];
                break;
                
            case "token":
                var auth = this.$options['username'] + "/token:" + this.$options['api_token'];
                var basic = new Buffer(auth, "ascii").toString("base64");
                headers.Authorization = "Basic " + basic;
                break;
                
            case "basic":
                var auth = this.$options['username'] + ":" + this.$options['password'];
                var basic = new Buffer(auth, "ascii").toString("base64");
                headers.Authorization = "Basic " + basic;
                break;
                
            default:
                // none
        }

        var getQuery = querystring.stringify(getParams);
        var postQuery = querystring.stringify(postParams);
        this.$debug("get: "+ getQuery + " post " + postQuery);
        
        var path = this.$options.path + "/" + this.$options.format + "/" + apiPath.replace(/\/*$/, "");
        if (getQuery)
            path += "?" + getQuery;

        if (postQuery)
            headers["Content-Length"] = postQuery.length;

        var getOptions = {
            host: host,
            post: port,
            path: path,
            method: httpMethod,
            headers: headers
        };
        
        this.$debug('send ' + httpMethod + ' request: ' + path);
        var request = require(this.$options.protocol).request(getOptions, function(response) {
            response.setEncoding('utf8');

            var body = [];
            response.addListener('data', function (chunk) {
                body.push(chunk);
            });
            response.addListener('end', function () {
                var msg;
                body = body.join("");

                if (response.statusCode >= 300) {
                    if (response.headers["content-type"].indexOf("application/json") === 0) {
                        msg = JSON.parse(body);
                    } else {
                        msg = body;    
                    }
                    callback({status: response.statusCode, msg: msg});
                    return;
                }
                callback(null, body);
            });
        });
        
        if (httpMethod == "POST" || httpMethod == "PUT")
            request.write(postQuery);
            
        request.end();
    };


    /**
     * Get a JSON response and transform to JSON
     */
    this.decodeResponse = function(response)
    {
        if(this.$options['format'] === "text") {
            return response;
        }
        else if(this.$options['format'] === "json")
        {
            return JSON.parse(response);
        }
    };

    this.$debug = function(msg) {
        if (this.$options.debug)
            console.log(msg);
    };

}).call(Request.prototype);
