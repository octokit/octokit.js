'use strict'

var fs = require('fs')

var HttpsProxyAgent = require('https-proxy-agent')
var mime = require('mime')
var netrc = require('netrc')
var toCamelCase = require('lodash/camelCase')

var error = require('./error')
var Url = require('url')
var Util = require('./util')
var Promise = require('./promise')

var ROUTES = require('./routes.json')
var DEFINITIONS = require('./definitions.json')

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
 *  Upon instantiation of the [[Client]] class, the routes.json file is loaded
 *  and parsed for the API HTTP endpoints. For each HTTP endpoint to the
 *  HTTP server, a method is generated which accepts a Javascript Object
 *  with parameters and an optional callback to be invoked when the API request
 *  returns from the server or when the parameters could not be validated.
 *
 *  When an HTTP endpoint is processed and a method is generated as described
 *  above, [[Client]] also sets up parameter validation with the rules as
 *  defined in the routes.json.
 *
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *
 *  For example, the endpoint `gists/get-from-user` will be exposed as a member
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
 *  `params` block of `definitions.json`. Params
 *  that start with a `$` sign will be substituted with the param with the same
 *  name from the `params` section of `definitions.json`.
 *  There we see that it is a required parameter (needs to hold a value). In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 *
 *  Implementation Notes: the `method` is NOT case sensitive, whereas `url` is.
 *  The `url` parameter also supports denoting parameters inside it as follows:
 *
 *      "get-from-user": {
 *          "url": "/users/:owner/gists",
 *          "method": "GET"
 *          ...
 *      }
 **/
var Client = module.exports = function (config) {
  if (!(this instanceof Client)) {
    return new Client(config)
  }

  config = config || {}
  config.headers = config.headers || {}
  this.config = config
  this.debug = config.debug
  this.Promise = config.Promise || config.promise || Promise

  var pathPrefix = ''
    // Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
  if (typeof config.pathPrefix === 'string') {
    pathPrefix = '/' + config.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    this.config.pathPrefix = pathPrefix
  }

    // store mapping of accept header to preview api endpoints
  var mediaHash = DEFINITIONS.acceptTree
  var mediaTypes = {}

  for (var accept in mediaHash) {
    for (var route in mediaHash[accept]) {
      mediaTypes[mediaHash[accept][route]] = accept
    }
  }

  this.acceptUrls = mediaTypes

  this.setupRoutes()
};

(function () {
    /**
     *  Client#setupRoutes() -> null
     *
     *  Configures the routes as defined in routes.json.
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
  this.setupRoutes = function () {
    var self = this
    this.requestHeaders = DEFINITIONS['request-headers'].map(function (header) {
      return header.toLowerCase()
    })
    this.responseHeaders = DEFINITIONS['response-headers'].map(function (header) {
      return header.toLowerCase()
    })

    function parseParams (msg, paramsStruct) {
      var params = Object.keys(paramsStruct)
      var paramName, def, value, type
      for (var i = 0, l = params.length; i < l; ++i) {
        paramName = params[i]
        if (paramName.charAt(0) === '$') {
          paramName = paramName.substr(1)
          if (!DEFINITIONS.params[paramName]) {
            throw new error.BadRequest("Invalid variable parameter name substitution; param '" +
                            paramName + "' not found in definitions.json", 'fatal')
          } else {
            def = paramsStruct[paramName] = DEFINITIONS.params[paramName]
            delete paramsStruct['$' + paramName]
          }
        } else {
          def = paramsStruct[paramName]
        }

        value = msg[paramName]
        if (typeof value !== 'boolean' && !value) {
                    // we don't need validation for undefined parameter values
                    // that are not required.
          if (!def.required ||
                        (def['allow-empty'] && value === '') ||
                        (def['allow-null'] && value === null)) {
            continue
          }
          throw new error.BadRequest("Empty value for parameter '" +
                        paramName + "': " + value)
        }

                // validate the value and type of parameter:
        if (def.validation) {
          if (!new RegExp(def.validation).test(value)) {
            throw new error.BadRequest("Invalid value for parameter '" +
                            paramName + "': " + value)
          }
        }

        if (def.type) {
          type = def.type.toLowerCase()
          if (type === 'number') {
            value = parseInt(value, 10)
            if (isNaN(value)) {
              throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + ' is NaN')
            }
          } else if (type === 'float') {
            value = parseFloat(value)
            if (isNaN(value)) {
              throw new error.BadRequest("Invalid value for parameter '" +
                                paramName + "': " + msg[paramName] + ' is NaN')
            }
          } else if (type === 'json') {
            if (typeof value === 'string') {
              try {
                value = JSON.parse(value)
              } catch (ex) {
                throw new error.BadRequest("JSON parse error of value for parameter '" +
                                    paramName + "': " + value)
              }
            }
          } else if (type === 'date') {
            value = new Date(value)
          }
        }
        msg[paramName] = value
      }
    }

    function prepareApi (struct, baseType) {
      if (!baseType) {
        baseType = ''
      }
      Object.keys(struct).forEach(function (routePart) {
        var block = struct[routePart]
        if (!block) {
          return
        }
        var messageType = baseType + '/' + routePart
        if (block.url && block.params) {
                    // we ended up at an API definition part!
          var parts = messageType.split('/')
          var section = toCamelCase(parts[1].toLowerCase())
          parts.splice(0, 2)
          var funcName = toCamelCase(parts.join('-'))

          if (!self[section]) {
            self[section] = {}
                        // add a utility function 'getFooApi()', which returns the
                        // section to which functions are attached.
            self[toCamelCase('get-' + section + '-api')] = function () {
              return self[section]
            }
          }

          self[section][funcName] = function (msg, callback) {
            if (block.deprecated) {
              const caller = (new Error()).stack.split('\n')[2]
              console.warn('DEPRECATED: ' + block.deprecated)
              console.warn(caller)
            }

            try {
              parseParams(msg, block.params)
            } catch (ex) {
                            // when the message was sent to the client, we can
                            // reply with the error directly.
              self.sendError(ex, block, msg, callback)
              if (self.debug) {
                Util.log(ex.message, 'fatal')
              }

              if (self.Promise && typeof callback !== 'function') {
                return self.Promise.reject(ex)
              }

                            // on error, there's no need to continue.
              return
            }

            if (!callback) {
              if (self.Promise) {
                return new self.Promise(function (resolve, reject) {
                  var cb = function (err, obj) {
                    if (err) {
                      reject(err)
                    } else {
                      resolve(obj)
                    }
                  }
                  self.handler(msg, JSON.parse(JSON.stringify(block)), cb)
                })
              } else {
                throw new Error('neither a callback or global promise implementation was provided')
              }
            } else {
              self.handler(msg, JSON.parse(JSON.stringify(block)), callback)
            }
          }
        } else {
                    // recurse into this block next:
          prepareApi(block, messageType)
        }
      })
    }

    prepareApi(ROUTES)
  }

    /**
     *  Client#authenticate(options) -> null
     *      - options (Object): Object containing the authentication type and credentials
     *          - type (String): One of the following: `basic`, `oauth`, `token`, or `integration`
     *          - username (String): Github username
     *          - password (String): Password to your account
     *          - token (String): oauth/jwt token
     *
     *  Set an authentication method to have access to protected resources.
     *
     *  ##### Example
     *
     *      // basic
     *      github.authenticate({
     *          type: "basic",
     *          username: "mikedeboertest",
     *          password: "test1324"
     *      });
     *
     *      // oauth
     *      github.authenticate({
     *          type: "oauth",
     *          token: "e5a4a27487c26e571892846366de023349321a73"
     *      });
     *
     *      // oauth key/secret
     *      github.authenticate({
     *          type: "oauth",
     *          key: "clientID",
     *          secret: "clientSecret"
     *      });
     *
     *      // user token
     *      github.authenticate({
     *          type: "token",
     *          token: "userToken",
     *      });
     *
     *      // integration (jwt)
     *      github.authenticate({
     *          type: "integration",
     *          token: "jwt",
     *      });
     **/
  this.authenticate = function (options) {
    if (!options) {
      this.auth = false
      return
    }
    if (!options.type || 'basic|oauth|client|token|integration|netrc'.indexOf(options.type) === -1) {
      throw new Error("Invalid authentication type, must be 'basic', 'integration', 'oauth', 'client' or 'netrc'")
    }
    if (options.type === 'basic' && (!options.username || !options.password)) {
      throw new Error('Basic authentication requires both a username and password to be set')
    }
    if (options.type === 'oauth') {
      if (!options.token && !(options.key && options.secret)) {
        throw new Error('OAuth2 authentication requires a token or key & secret to be set')
      }
    }
    if ((options.type === 'token' || options.type === 'integration') && !options.token) {
      throw new Error('Token authentication requires a token to be set')
    }

    this.auth = options
  }

  function getPageLinks (link) {
    if (typeof link === 'object' && (link.link || link.meta.link)) {
      link = link.link || link.meta.link
    }

    var links = {}
    if (typeof link !== 'string') {
      return links
    }

        // link format:
        // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
    link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, function (m, uri, type) {
      links[type] = uri
    })
    return links
  }

    /**
     *  Client#hasNextPage(link) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *
     *  Check if a request result contains a link to the next page
     **/
  this.hasNextPage = function (link) {
    return getPageLinks(link).next
  }

    /**
     *  Client#hasPreviousPage(link) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *
     *  Check if a request result contains a link to the previous page
     **/
  this.hasPreviousPage = function (link) {
    return getPageLinks(link).prev
  }

    /**
     *  Client#hasLastPage(link) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *
     *  Check if a request result contains a link to the last page
     **/
  this.hasLastPage = function (link) {
    return getPageLinks(link).last
  }

    /**
     *  Client#hasFirstPage(link) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *
     *  Check if a request result contains a link to the first page
     **/
  this.hasFirstPage = function (link) {
    return getPageLinks(link).first
  }

  function getPage (link, which, headers, callback) {
    var self = this
    var url = getPageLinks(link)[which]
    if (!url) {
      var urlErr = new error.NotFound('No ' + which + ' page found')
      return self.Promise && !callback ? self.Promise.reject(urlErr) : callback(urlErr)
    }

    var parsedUrl = Url.parse(url, true)

    var msg = Object.create(parsedUrl.query)
    if (headers !== null) {
      msg.headers = headers
    }

    var block = {
      url: parsedUrl.pathname,
      method: 'GET',
      params: parsedUrl.query
    }

    if (!callback) {
      if (self.Promise) {
        return new self.Promise(function (resolve, reject) {
          var cb = function (err, obj) {
            if (err) {
              reject(err)
            } else {
              resolve(obj)
            }
          }
          self.handler(msg, JSON.parse(JSON.stringify(block)), cb)
        })
      } else {
        throw new Error('neither a callback or global promise implementation was provided')
      }
    } else {
      self.handler(msg, JSON.parse(JSON.stringify(block)), callback)
    }
  }

    /**
     *  Client#getNextPage(link, callback) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *      - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     *
     *  Get the next page, based on the contents of the `Link` header
     **/
  this.getNextPage = function (link, headers, callback) {
    if (typeof headers === 'function') {
      callback = headers
      headers = null
    }
    headers = applyAcceptHeader(link, headers)
    return getPage.call(this, link, 'next', headers, callback)
  }

    /**
     *  Client#getPreviousPage(link, callback) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *      - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     *
     *  Get the previous page, based on the contents of the `Link` header
     **/
  this.getPreviousPage = function (link, headers, callback) {
    if (typeof headers === 'function') {
      callback = headers
      headers = null
    }
    headers = applyAcceptHeader(link, headers)
    return getPage.call(this, link, 'prev', headers, callback)
  }

    /**
     *  Client#getLastPage(link, callback) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *      - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     *
     *  Get the last page, based on the contents of the `Link` header
     **/
  this.getLastPage = function (link, headers, callback) {
    if (typeof headers === 'function') {
      callback = headers
      headers = null
    }
    headers = applyAcceptHeader(link, headers)
    return getPage.call(this, link, 'last', headers, callback)
  }

    /**
     *  Client#getFirstPage(link, callback) -> null
     *      - link (mixed): response of a request or the contents of the Link header
     *      - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     *
     *  Get the first page, based on the contents of the `Link` header
     **/
  this.getFirstPage = function (link, headers, callback) {
    if (typeof headers === 'function') {
      callback = headers
      headers = null
    }
    headers = applyAcceptHeader(link, headers)
    return getPage.call(this, link, 'first', headers, callback)
  }

  function applyAcceptHeader (res, headers) {
    var previous = res.meta && res.meta['x-github-media-type']
    if (!previous || (headers && headers.accept)) {
      return headers
    }
    headers = headers || {}
    headers.accept = 'application/vnd.' + previous.replace('; format=', '+')
    return headers
  }

  function getRequestFormat (hasBody, block) {
    if (hasBody) {
      return block.requestFormat || DEFINITIONS.constants.requestFormat
    }
    return 'query'
  }

  function getQueryAndUrl (msg, def, format, config) {
    var url = def.url
    if (config.pathPrefix && url.indexOf(config.pathPrefix) !== 0) {
      url = config.pathPrefix + def.url
    }
    var ret = {}
    if (!def || !def.params) {
      ret.url = url
      return ret
    }

    Object.keys(def.params).forEach(function (paramName) {
      // do not send filePath as query argument
      if (paramName === 'filePath') {
        return
      }

      paramName = paramName.replace(/^[$]+/, '')
      if (!(paramName in msg)) {
        return
      }

      var isUrlParam = url.indexOf(':' + paramName) !== -1
      var valFormat = isUrlParam || format !== 'json' ? 'query' : format
      var val
      if (valFormat !== 'json') {
        if (typeof msg[paramName] === 'object') {
          try {
            msg[paramName] = JSON.stringify(msg[paramName])
            val = encodeURIComponent(msg[paramName])
          } catch (ex) {
            return Util.log('httpSend: Error while converting object to JSON: ' +
                            (ex.message || ex), 'error')
          }
        } else if (def.params[paramName] && def.params[paramName].combined) {
                    // Check if this is a combined (search) string.
          val = msg[paramName].split(/[\s\t\r\n]*\+[\s\t\r\n]*/)
                                        .map(function (part) {
                                          return encodeURIComponent(part)
                                        })
                                        .join('+')
        } else {
                    // the ref param is a path so we don't want to [fully] encode it but we do want to encode the # if there is one
                    // (see https://github.com/mikedeboer/node-github/issues/499#issuecomment-280093040)
          if (paramName === 'ref') {
            val = msg[paramName].replace(/#/g, '%23')
          } else {
            val = encodeURIComponent(msg[paramName])
          }
        }
      } else {
        val = msg[paramName]
      }

      if (isUrlParam) {
        url = url.replace(':' + paramName, val)
      } else {
        if (format === 'json' && def.params[paramName].sendValueAsBody) {
          ret.query = val
        } else if (format === 'json') {
          if (!ret.query) {
            ret.query = {}
          }
          ret.query[paramName] = val
        } else if (format !== 'raw') {
          if (!ret.query) {
            ret.query = []
          }
          ret.query.push(paramName + '=' + val)
        }
      }
    })
    ret.url = url
    return ret
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
  this.httpSend = function (msg, block, callback) {
    var self = this
    var method = block.method.toLowerCase()
    var hasFileBody = block.hasFileBody
    var hasBody = !hasFileBody && (typeof (msg.body) !== 'undefined' || 'head|get|delete'.indexOf(method) === -1)
    var format = getRequestFormat.call(this, hasBody, block)
    var protocol = this.config.protocol || DEFINITIONS.constants.protocol || 'http'
    var port = this.config.port || (protocol === 'https' ? 443 : 80)
    var host = block.host || this.config.host || DEFINITIONS.constants.host

        // Edge case for github enterprise uploadAsset:
        // 1) In public api, host changes to uploads.github.com. In enterprise, the host remains the same.
        // 2) In enterprise, the pathPrefix changes from: /api/v3 to /api/uploads.
    if ((this.config.host && this.config.host !== DEFINITIONS.constants.host) &&
            (block.host && block.host === 'uploads.github.com')) {  // enterprise uploadAsset
      host = this.config.host
      this.config.pathPrefix = '/api/uploads'
    }

    var obj = getQueryAndUrl(msg, block, format, self.config)
    var query = obj.query
    var url = this.config.url ? this.config.url + obj.url : obj.url
    var path = url
    if (!hasBody && query && query.length) {
      path += '?' + query.join('&')
    }

    var proxyUrl
    var agent
    if (this.config.proxy !== undefined) {
      proxyUrl = this.config.proxy
    } else {
      proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY
    }
    if (proxyUrl) {
      agent = new HttpsProxyAgent(proxyUrl)
    }

    var ca = this.config.ca

    var headers = {
      'host': host,
      'content-length': '0'
    }
    if (hasBody) {
      if (format === 'json') {
        query = JSON.stringify(query)
      } else if (format === 'raw') {
        query = msg.data
      } else {
        query = query.join('&')
      }
      headers['content-length'] = Buffer.byteLength(query || '', 'utf8')
      headers['content-type'] = format === 'json'
                ? 'application/json; charset=utf-8'
                : format === 'raw'
                    ? 'text/plain; charset=utf-8'
                    : 'application/x-www-form-urlencoded; charset=utf-8'
    }
    if (this.auth) {
      var basic
      switch (this.auth.type) {
        case 'oauth':
          if (this.auth.token) {
            path += (path.indexOf('?') === -1 ? '?' : '&') +
                            'access_token=' + encodeURIComponent(this.auth.token)
          } else {
            path += (path.indexOf('?') === -1 ? '?' : '&') +
                            'client_id=' + encodeURIComponent(this.auth.key) +
                            '&client_secret=' + encodeURIComponent(this.auth.secret)
          }
          break
        case 'token':
          headers['Authorization'] = 'token ' + this.auth.token
          break
        case 'integration':
          headers['Authorization'] = 'Bearer ' + this.auth.token
          headers['accept'] = 'application/vnd.github.machine-man-preview+json'
          break
        case 'basic':
          basic = Buffer.from(this.auth.username + ':' + this.auth.password, 'ascii').toString('base64')
          headers['Authorization'] = 'Basic ' + basic
          break
        case 'netrc':
          var auth = netrc()[host]
          if (!auth) {
            throw new Error("~/.netrc authentication type chosen but no credentials found for '" + host + "'")
          }
          basic = Buffer.from(auth.login + ':' + auth.password, 'ascii').toString('base64')
          headers['Authorization'] = 'Basic ' + basic
          break
        default:
          break
      }
    }

    function callCallback (err, result) {
      if (callback) {
        var cb = callback
        callback = undefined
        cb(err, result)
      }
    }

    function addCustomHeaders (customHeaders) {
      Object.keys(customHeaders).forEach(function (header) {
        var headerLC = header.toLowerCase()
        if (self.requestHeaders.indexOf(headerLC) === -1) {
          return
        }
        headers[headerLC] = customHeaders[header]
      })
    }
    addCustomHeaders(Object.assign(msg.headers || {}, this.config.headers))

    if (!headers['user-agent']) {
      headers['user-agent'] = 'NodeJS HTTP Client'
    }

    if (!('accept' in headers)) {
      headers['accept'] = this.acceptUrls[block.url] || this.config.requestMedia || DEFINITIONS.constants.requestMedia
    }

    var options = {
      host: host,
      port: port,
      path: path,
      method: method,
      headers: headers,
      ca: ca,
      family: this.config.family
    }

    if (agent) {
      options.agent = agent
    }

    if (this.config.rejectUnauthorized !== undefined) {
      options.rejectUnauthorized = this.config.rejectUnauthorized
    }

    if (this.debug) {
      console.log('REQUEST: ', options)
    }

    function httpSendRequest () {
      var reqModule
      // Verbosity for WebPack compliance
      if (self.config.followRedirects === false) {
        reqModule = protocol === 'http' ? require('http') : require('https')
      } else {
        reqModule = protocol === 'http' ? require('follow-redirects/http') : require('follow-redirects/https')
      }

      var req = reqModule.request(options, function (res) {
        if (self.debug) {
          console.log('STATUS: ' + res.statusCode)
          console.log('HEADERS: ' + JSON.stringify(res.headers))
        }
        res.setEncoding('utf8')
        var data = ''
        res.on('data', function (chunk) {
          data += chunk
        })
        res.on('error', function (err) {
          callCallback(err)
        })
        res.on('end', function () {
          if (res.statusCode >= 400 || res.statusCode < 10) {
            callCallback(new error.HttpError(data, res.statusCode, res.headers))
          } else {
            res.data = data
            callCallback(null, res)
          }
        })
      })

      var timeout = (block.timeout !== undefined) ? block.timeout : self.config.timeout
      if (timeout) {
        req.setTimeout(timeout)
      }

      req.on('error', function (e) {
        if (self.debug) {
          console.log('problem with request: ' + e.message)
        }
        callCallback(e.message)
      })

      req.on('timeout', function () {
        if (self.debug) {
          console.log('problem with request: timed out')
        }
        req.abort()
        callCallback(new error.GatewayTimeout())
      })

            // write data to request body
      if (hasBody && query && query.length) {
        if (self.debug) {
          console.log('REQUEST BODY: ' + query + '\n')
        }
        req.write(query + '\n')
      }

      if (block.hasFileBody) {
        var stream = fs.createReadStream(msg.filePath)
        stream.pipe(req)
      } else {
        req.end()
      }
    };

    if (hasFileBody) {
      fs.stat(msg.filePath, function (err, stat) {
        if (err) {
          callCallback(err)
        } else {
          headers['content-length'] = stat.size
          headers['content-type'] = mime.getType(msg.name)
          httpSendRequest()
        }
      })
    } else {
      httpSendRequest()
    }
  }

  this.sendError = function (err, block, msg, callback) {
    if (this.debug) {
      Util.log(err, block, msg, 'error')
    }
    if (typeof err === 'string') {
      err = new error.InternalServerError(err)
    }
    if (callback && typeof (callback) === 'function') {
      callback(err)
    }
  }

  this.handler = function (msg, block, callback) {
    var self = this
    this.httpSend(msg, block, function (err, res) {
      if (err) {
        return self.sendError(err, msg, null, callback)
      }

      var ret
      try {
        var data = res.data

        var contentType = res.headers['content-type']
        if (contentType && contentType.indexOf('application/json') !== -1) {
          data = res.data && JSON.parse(res.data)
        }
        ret = {data: data}
      } catch (ex) {
        if (callback) {
          callback(new error.InternalServerError(ex.message), res)
        }
        return
      }

      if (!ret) {
        ret = {}
      }
      ret.meta = {}
      self.responseHeaders.forEach(function (header) {
        if (res.headers[header]) {
          ret.meta[header] = res.headers[header]
        }
      })

      if (callback) {
        callback(null, ret)
      }
    })
  }
}).call(Client.prototype)
