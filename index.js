/**
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */


"use strict";

var error = require("./error");
var Util = require("./util");

/** section: github
 * class Client
 * 
 *  [[Client]] can load any version of the [[github]] client API, with the
 *  requirement that a valid routes.json definition file is present in the
 *  `api/[VERSION]/client` directory and that the routes found in this file are
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
 *          "incoming": {
 *              "room": {
 *                  "addmember": {
 *                      "url": "/api/room/addmember",
 *                      "method": "POST",
 *                      "params": {
 *                          "roomid": {
 *                              "type": "String",
 *                              "required": true,
 *                              "validation": "^[0-9a-z]{1}[0-9a-z-_\\|\\/]{1,61}$",
 *                              "invalidmsg": "Room name invalid. Please only use letters, numbers, underscores (_), dashes (-), pipes (|), slashes (/) and more than one character",
 *                              "description": "Name of the chat room"
 *                          },
 *                          "uid": {
 *                              "type": "Number",
 *                              "required": true,
 *                              "validation": "^[0-9]+$",
 *                              "invalidmsg": "Invalid User ID encountered",
 *                              "description": "A uid is a numeric User ID, with which the user can be retrieved from the database"
 *                          },
 *                          "workspaceId": {
 *                              "type": "String",
 *                              "required": true,
 *                              "validation": "",
 *                              "invalidmessage": "workspaceId is a required field",
 *                              "description": "Identifier of the active workspace. Example: 'user/bob/node_chat'"
 *                          }
 *                      }
 *                  }
 *          },
 *          
 *          "outgoing": {
 *              "room": {
 *                  "addmessage": {
 *                      "url": "/api/room/addmessage",
 *                      "params": {
 *                          "roomid": {
 *                              "type": "String",
 *                              "required": true,
 *                              "validation": "^[0-9a-z]{1}[0-9a-z-_\\|\\/]{1,61}$",
 *                              "invalidmsg": "Room name invalid. Please only use letters, numbers, underscores (_), dashes (-), pipes (|), slashes (/) and more than one character",
 *                              "description": "Name of the chat room"
 *                          },
 *                          "from": {
 *                              "type": "Number",
 *                              "required": true,
 *                              "validation": "^[0-9]+$",
 *                              "invalidmsg": "Invalid User ID encountered",
 *                              "description": "from is numeric User ID, with which the user can be retrieved from the database"
 *                          },
 *                          "content": {
 *                              "type": "String",
 *                              "required": true,
 *                              "validation": "",
 *                              "invalidmsg": "No or empty message, which is not allowed",
 *                              "description": "Content of the message sent"
 *                          }
 *                      }
 *                  }
 *              }
 *          }
 *      }
 * 
 *  You probably noticed that the definition is quite verbose and the decision
 *  for its design was made to be verbose rather than allowing for variables and
 *  reuse, as is possible with Javascript, but not with JSON definitions.
 * 
 *  There are two sections; 'incoming' and 'outgoing'.
 *  NOTE: if it is deemed more practical or common sense, the terms 'incoming' and
 *  'outgoing' may be swapped. This is up for discussion.
 * 
 *  The `incoming` section defines the endpoints for calls to the [[CollabServer]]. 
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *  In this example, there is one endpoint defined: `incoming/room/addmember`.
 *  This endpoint will be exposed as a member on the [[Client]] object and may
 *  be invoked with 
 * 
 *      client["incoming/room/addmember"]({
 *          "roomid": "ry/node_chat",
 *          "uid": "1234",
 *          "workspaceId": "user/bob/node_chat"
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 * 
 *  The callback is optional. In the case of an error or when the `ret` argument
 *  holds a value, it will also be broadcasted to all the connected Socket.IO clients
 *  that are connected to the workspace called `user/bob/node_chat`.
 *  All the parameters as specified in the Object that is passed to the function 
 *  as first argument, will be validated according to the rules in the `params`
 *  block of the route definition.
 *  Thus, in the case of the `roomid` parameter, according to the definition in
 *  the `params` block, it is a required parameter (needs to hold a value) and its
 *  value validated with the RegExp `^[0-9a-z]{1}[0-9a-z-_\|\/]{1,61}$`. In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 * 
 *  Implementation Notes: the `method` is NOT case sensitive, whereas `url` is. 
 *  The `url` parameter also supports denoting parameters inside it as follows:
 * 
 *      "addmember": {
 *          "url": "/api/room/:roomid/addmember",
 *          "method": "POST",
 *          ...
 *      }
 *  
 *  The `outgoing` section defines the endpoints for events that come in through
 *  [Redis pubsub](http://redis.io/topics/pubsub).
 *  Each time that the [[CollabServer]] makes a change in the Redis database, this 
 *  may trigger an event to be published to a Redis pubsub channel. [[Client]]
 *  has subscribed to quite bunch of channels; room, workspace, project and user.
 *  Whenever a message comes in from one of these channels, [[Client]] first 
 *  checks if an endpoint is registered for that outgoing message.
 *  In this example, there is one endpoint defined: `outgoing/room/addmessage`.
 *  This is enpoint will be exposed as a member on the [[Client]] object and may
 *  be invoked with
 * 
 *      client["outgoing/room/addmessage"]({
 *          "roomid": "ry/node_chat",
 *          "from": "1234",
 *          "content": "my first message!"
 *      });
 * 
 *  This means that when a message from Redis pubsub channel `room/addmessage`
 *  arrives, this method is invoked with the JSON passed directly as first argument.
 *  Important to point out here is that this message is only broadcasted from the
 *  server when a message was added to a room object in the Redis database; everything
 *  is persisted in the database, which allows both the server and client
 *  to operate without keeping any state in memory.
 *  The endpoint handler in this example then, upon invocation, retrieves all the
 *  active workspaces that are connected with the room `ry/node_chat` and broadcasts
 *  the message as-is to all Socket.IO clients that are connected to each workspace.
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
                if (!value) {
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
            throw new Error("OAuth2 authentication requires both a token to be set");

        this.auth = options;
    };
    
    function getQuery(msg, def, format) {
        var query = format == "json" ? {} : [];
        if (!def || !def.params)
            return query;
        var url = def.url;
        Object.keys(def.params).forEach(function(paramName) {
            paramName = paramName.replace(/^[$]+/, "");
            if (!msg[paramName])
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
                
            if (isUrlParam)
                url = url.replace(":" + paramName, val);
            else {
                if (format == "json")
                    query[paramName] = val;
                else
                    query.push(paramName + "=" + val);
            }
        });
        def.url = url;
        return query;
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
        var query = getQuery(msg, block, format);

        var path = (!hasBody && query.length)
            ? block.url + "?" + query.join("&")
            : block.url;
        var protocol = this.constants.protocol || "http";
        var host = this.constants.host;
        var port = this.constants.port || (protocol == "https" ? 443 : 80);
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
        if (hasBody && query.length)
            req.write(query + "\n");
        req.end();
    };
}).call(Client.prototype);
