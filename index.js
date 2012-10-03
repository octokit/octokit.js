"use strict";

var error = require("./error");
var Util = require("./util");

/** section: github
 * class Client
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 *
 *  [[Client]] can load any version of the [[github]] client API, with the
 *  requirement that a valid routes.json definition file is present in the
 *  `api/[VERSION]` directory and that the routes found in this file are
 *  implemented as well.
 *
 *  Upon instantiation of the [[Client]] class, the routes.json file is loaded
 *  from the API version specified in the configuration and, parsed and from it
 *  the routes for HTTP requests are extracted. For each HTTP endpoint to the
 *  HTTP server, a method is generated which accepts a Javascript Object
 *  with parameters and an optional callback to be invoked when the API request
 *  returns from the server or when the parameters could not be validated.
 *
 *  When an HTTP endpoint is processed and a method is generated as described
 *  above, [[Client]] also sets up parameter validation with the rules as
 *  defined in the routes.json. A full example that illustrates how this works
 *  is shown below:
 *
 *  ##### Example
 *
 *  First, we look at a listing of a sample routes.json routes definition file:
 *
 *      {
 *          "defines": {
 *              "constants": {
 *                  "name": "Github",
 *                  "description": "A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API.",
 *                  "protocol": "https",
 *                  "host": "api.github.com",
 *                  "port": 443,
 *                  "dateFormat": "YYYY-MM-DDTHH:MM:SSZ",
 *                  "requestFormat": "json"
 *              },
 *              "response-headers": [
 *                  "X-RateLimit-Limit",
 *                  "X-RateLimit-Remaining",
 *                  "Link"
 *              ],
 *              "params": {
 *                  "files": {
 *                      "type": "Json",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": "Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'"
 *                  },
 *                  "user": {
 *                      "type": "String",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": ""
 *                  },
 *                  "description": {
 *                      "type": "String",
 *                      "required": false,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": ""
 *                  },
 *                  "page": {
 *                      "type": "Number",
 *                      "required": false,
 *                      "validation": "^[0-9]+$",
 *                      "invalidmsg": "",
 *                      "description": "Page number of the results to fetch."
 *                  },
 *                  "per_page": {
 *                      "type": "Number",
 *                      "required": false,
 *                      "validation": "^[0-9]+$",
 *                      "invalidmsg": "",
 *                      "description": "A custom page size up to 100. Default is 30."
 *                  }
 *              }
 *          },
 *
 *          "gists": {
 *              "get-from-user": {
 *                  "url": ":user/gists",
 *                  "method": "GET",
 *                  "params": {
 *                      "$user": null,
 *                      "$page": null,
 *                      "$per_page": null
 *                  }
 *              },
 *
 *              "create": {
 *                  "url": "/gists",
 *                  "method": "POST",
 *                  "params": {
 *                      "$description": null,
 *                      "public": {
 *                          "type": "Boolean",
 *                          "required": true,
 *                          "validation": "",
 *                          "invalidmsg": "",
 *                          "description": ""
 *                      },
 *                      "$files": null
 *                  }
 *              }
 *          }
 *       }
 *
 *  You probably noticed that the definition is quite verbose and the decision
 *  for its design was made to be verbose whilst still allowing for basic variable
 *  definitions and substitions for request parameters.
 *
 *  There are two sections; 'defines' and 'gists' in this example.
 *
 *  The `defines` section contains a list of `constants` that will be used by the
 *  [[Client]] to make requests to the right URL that hosts the API.
 *  The `gists` section defines the endpoints for calls to the API server, for
 *  gists specifically in this example, but the other API sections are defined in
 *  the exact same way.
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *  there is one endpoint defined: .
 *  In this example, the endpoint `gists/get-from-user` will be exposed as a member
 *  on the [[Client]] object and may be invoked with
 *
 *      client.getFromUser({
 *          "user": "bob"
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *      // or to fetch a specfic page:
 *      client.getFromUser({
 *          "user": "bob",
 *          "page": 2,
 *          "per_page": 100
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *  All the parameters as specified in the Object that is passed to the function
 *  as first argument, will be validated according to the rules in the `params`
 *  block of the route definition.
 *  Thus, in the case of the `user` parameter, according to the definition in
 *  the `params` block, it's a variable that first needs to be looked up in the
 *  `params` block of the `defines` section (at the top of the JSON file). Params
 *  that start with a `$` sign will be substituted with the param with the same
 *  name from the `defines/params` section.
 *  There we see that it is a required parameter (needs to hold a value). In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 *
 *  Implementation Notes: the `method` is NOT case sensitive, whereas `url` is.
 *  The `url` parameter also supports denoting parameters inside it as follows:
 *
 *      "get-from-user": {
 *          "url": ":user/gists",
 *          "method": "GET"
 *          ...
 *      }
 **/
var Client = module.exports = function(config) {
    this.config = config;
    this.debug = Util.isTrue(config.debug);

    this.version = config.version;
    var cls = require("./api/v" + this.version);
    this[this.version] = new cls(this);

    this.setupRoutes();
};

(function() {
    /**
     *  Client#setupRoutes() -> null
     *
     *  Configures the routes as defined in a routes.json file of an API version
     *
     *  [[Client#setupRoutes]] is invoked by the constructor, takes the
     *  contents of the JSON document that contains the definitions of all the
     *  available API routes and iterates over them.
     *
     *  It first recurses through each definition block until it reaches an API
     *  endpoint. It knows that an endpoint is found when the `url` and `param`
     *  definitions are found as a direct member of a definition block.
     *  Then the availability of an implementation by the API is checked; if it's
     *  not present, this means that a portion of the API as defined in the routes.json
     *  file is not implemented properly, thus an exception is thrown.
     *  After this check, a method is attached to the [[Client]] instance
     *  and becomes available for use. Inside this method, the parameter validation
     *  and typecasting is done, according to the definition of the parameters in
     *  the `params` block, upon invocation.
     *
     *  This mechanism ensures that the handlers ALWAYS receive normalized data
     *  that is of the correct format and type. JSON parameters are parsed, Strings
     *  are trimmed, Numbers and Floats are casted and checked for NaN after that.
     *
     *  Note: Query escaping for usage with SQL products is something that can be
     *  implemented additionally by adding an additional parameter type.
     **/
    this.setupRoutes = function() {
        var self = this;
        var api = this[this.version];
        var routes = api.routes;
        var defines = routes.defines;
        this.constants = defines.constants;
        delete routes.defines;

        function trim(s) {
            if (typeof s != "string")
                return s;
            return s.replace(/^[\s\t\r\n]+/, "").replace(/[\s\t\r\n]+$/, "");
        }

        function parseParams(msg, paramsStruct) {
            var params = Object.keys(paramsStruct);
            var paramName, def, value, type;
            for (var i = 0, l = params.length; i < l; ++i) {
                paramName = params[i];
                if (paramName.charAt(0) == "$") {
                    paramName = paramName.substr(1);
                    if (!defines.params[paramName]) {
                        throw new error.BadRequest("Invalid variable parameter name substitution; param '" +
                            paramName + "' not found in defines block", "fatal");
                    }
                    else
                        def = defines.params[paramName];
                }
                else
                    def = paramsStruct[paramName];

                value = trim(msg[paramName]);
                if (typeof value != "boolean" && !value) {
                    // we don't need to validation for undefined parameter values
                    // that are not required.
                    if (!def.required)
                        continue;
                    throw new error.BadRequest("Empty value for parameter '" +
                        paramName + "': " + value);
                }

                // validate the value and type of parameter:
                if (def.validation) {
                    if (!new RegExp(def.validation).test(value)) {
                        throw new error.BadRequest("Invalid value for parameter '" +
                            paramName + "': " + value);
                    }
                }

                if (def.type) {
                    type = def.type.toLowerCase();
                    if (type == "number") {
                        value = parseInt(value, 10);
                        if (isNaN(value)) {
                            throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + " is NaN");
                        }
                    }
                    else if (type == "float") {
                        value = parseFloat(value);
                        if (isNaN(value)) {
                            throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + " is NaN");
                        }
                    }
                    else if (type == "json") {
                        if (typeof value == "string") {
                            try {
                                value = JSON.parse(value);
                            }
                            catch(ex) {
                                throw new error.BadRequest("JSON parse error of value for parameter '" +
                                    paramName + "': " + value);
                            }
                        }
                    }
                    else if (type == "date") {
                        value = new Date(value);
                    }
                }
                msg[paramName] = value;
            }
        }

        function prepareApi(struct, baseType) {
            if (!baseType)
                baseType = "";
            Object.keys(struct).forEach(function(routePart) {
                var block = struct[routePart];
                if (!block)
                    return;
                var messageType = baseType + "/" + routePart;
                if (block.url && block.params) {
                    // we ended up at an API definition part!
                    var endPoint = messageType.replace(/^[\/]+/g, "");
                    var parts = messageType.split("/");
                    var section = Util.toCamelCase(parts[1].toLowerCase());
                    parts.splice(0, 2);
                    var funcName = Util.toCamelCase(parts.join("-"));

                    if (!api[section]) {
                        throw new Error("Unsupported route section, not implemented in version " +
                            self.version + " for route '" + endPoint + "' and block: " +
                            JSON.stringify(block));
                    }

                    if (!api[section][funcName]) {
                        if (self.debug)
                            Util.log("Tried to call " + funcName);
                        throw new Error("Unsupported route, not implemented in version " +
                            self.version + " for route '" + endPoint + "' and block: " +
                            JSON.stringify(block));
                    }

                    if (!self[section]) {
                        self[section] = {};
                        // add a utility function 'getFooApi()', which returns the
                        // section to which functions are attached.
                        self[Util.toCamelCase("get-" + section + "-api")] = function() {
                            return self[section];
                        };
                    }

                    self[section][funcName] = function(msg, callback) {
                        try {
                            parseParams(msg, block.params);
                        }
                        catch (ex) {
                            // when the message was sent to the client, we can
                            // reply with the error directly.
                            api.sendError(ex, block, msg, callback);
                            if (self.debug)
                                Util.log(ex.message, "fatal");
                            // on error, there's no need to continue.
                            return;
                        }

                        api[section][funcName].call(api, msg, block, callback);
                    };
                }
                else {
                    // recurse into this block next:
                    prepareApi(block, messageType);
                }
            });
        }

        prepareApi(routes);
    };

    this.authenticate = function(options) {
        if (!options) {
            this.auth = false;
            return;
        }
        if (!options.type || "token|basic|oauth".indexOf(options.type) === -1)
            throw new Error("Invalid authentication type, must be 'token', 'basic' or 'oauth'");
        if (options.type == "token" && (!options.username || !options.token))
            throw new Error("Token based authentication requires both a username and token to be set");
        if (options.type == "basic" && (!options.username || !options.password))
            throw new Error("Basic authentication requires both a username and password to be set");
        if (options.type == "oauth" && !options.token)
            throw new Error("OAuth2 authentication requires a token to be set");

        this.auth = options;
    };

    function getQueryAndUrl(msg, def, format) {
        var ret = {
            url: def.url,
            query: format == "json" ? {} : []
        };
        if (!def || !def.params)
            return ret;
        var url = def.url;
        Object.keys(def.params).forEach(function(paramName) {
            paramName = paramName.replace(/^[$]+/, "");
            if (!(paramName in msg))
                return;

            var isUrlParam = url.indexOf(":" + paramName) !== -1;
            var valFormat = isUrlParam || format != "json" ? "query" : format;
            var val;
            if (valFormat != "json" && typeof msg[paramName] == "object") {
                try {
                    msg[paramName] = JSON.stringify(msg[paramName]);
                    val = encodeURIComponent(msg[paramName]);
                }
                catch (ex) {
                    return Util.log("httpSend: Error while converting object to JSON: "
                        + (ex.message || ex), "error");
                }
            }
            else
                val = valFormat == "json" ? msg[paramName] : encodeURIComponent(msg[paramName]);

            if (isUrlParam) {
                url = url.replace(":" + paramName, val);
            }
            else {
                if (format == "json")
                    ret.query[paramName] = val;
                else
                    ret.query.push(paramName + "=" + val);
            }
        });
        ret.url = url;
        return ret;
    }

    /**
     *  Client#httpSend(msg, block, callback) -> null
     *      - msg (Object): parameters to send as the request body
     *      - block (Object): parameter definition from the `routes.json` file that
     *          contains validation rules
     *      - callback (Function): function to be called when the request returns.
     *          If the the request returns with an error, the error is passed to
     *          the callback as its first argument (NodeJS-style).
     *
     *  Send an HTTP request to the server and pass the result to a callback.
     **/
    this.httpSend = function(msg, block, callback) {
        var method = block.method.toLowerCase();
        var hasBody = ("head|get|delete".indexOf(method) === -1);
        var format = hasBody && this.constants.requestFormat
            ? this.constants.requestFormat
            : "query";
        var obj = getQueryAndUrl(msg, block, format);
        var query = obj.query;
        var url = this.config.url ? this.config.url + obj.url : obj.url;

        var path = (!hasBody && query.length)
            ? url + "?" + query.join("&")
            : url;
        var protocol = this.config.protocol || this.constants.protocol || "http";
        var host = this.config.host || this.constants.host;
        var port = this.config.port || this.constants.port || (protocol == "https" ? 443 : 80);
        if (this.config.proxy) {
            host = this.config.proxy.host;
            port = this.config.proxy.port || 3128;
        }

        var headers = {
            "host": host,
            "user-agent": "NodeJS HTTP Client",
            "content-length": "0"
        };
        if (hasBody) {
            if (format == "json")
                query = JSON.stringify(query);
            else
                query = query.join("&");
            headers["content-length"] = query.length;
            headers["content-type"] = format == "json"
                ? "application/json"
                : "application/x-www-form-urlencoded";
        }
        if (this.auth) {
            var basic;
            switch (this.auth.type) {
                case "oauth":
                    path += (path.indexOf("?") === -1 ? "?" : "&") +
                        "access_token=" + encodeURIComponent(this.auth.token);
                    break;
                case "token":
                    basic = new Buffer(this.auth.username + "/token:" + this.auth.token, "ascii").toString("base64");
                    headers.authorization = "Basic " + basic;
                    break;
                case "basic":
                    basic = new Buffer(this.auth.username + ":" + this.auth.password, "ascii").toString("base64");
                    headers.authorization = "Basic " + basic;
                    break;
                default:
                    break;
            }
        }

        var options = {
            host: host,
            port: port,
            path: path,
            method: method,
            headers: headers
        };

        if (this.debug)
            console.log("REQUEST: ", options);

        var self = this;
        var req = require(protocol).request(options, function(res) {
            if (self.debug) {
                console.log("STATUS: " + res.statusCode);
                console.log("HEADERS: " + JSON.stringify(res.headers));
            }
            res.setEncoding("utf8");
            var data = "";
            res.on("data", function(chunk) {
                data += chunk;
            });
            res.on("end", function() {
                if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
                    callback(new error.HttpError(data, res.statusCode));
                }
                else {
                    res.data = data;
                    callback(null, res);
                }
            });
        });

        req.on("error", function(e) {
            if (self.debug)
                console.log("problem with request: " + e.message);
            callback(e.message);
        });

        // write data to request body
        if (hasBody && query.length) {
            if (self.debug)
                console.log("REQUEST BODY: " + query + "\n");
            req.write(query + "\n");
        }
        req.end();
    };
}).call(Client.prototype);
