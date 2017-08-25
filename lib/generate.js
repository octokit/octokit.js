#!/usr/bin/env node
/** section: github, internal
 * class ApiGenerator
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var fs = require("fs");
var Path = require("path");
var Url = require("url");
var Util = require("./util");
var npmPackageJSON = require("../package.json");

var TestSectionTpl = fs.readFileSync(__dirname + "/../templates/test_section.js.tpl", "utf8");
var TestHandlerTpl = fs.readFileSync(__dirname + "/../templates/test_handler.js.tpl", "utf8");

var main = module.exports = function() {
    // check routes path
    var routesPath = Path.join(__dirname, "routes.json");
    var routes = JSON.parse(fs.readFileSync(routesPath, "utf8"));
    if (!routes.defines) {
        Util.log("No routes defined.", "fatal");
        process.exit(1);
    }

    Util.log("Generating...");

    var defines = routes.defines;
    delete routes.defines;
    var sections = {};
    var testSections = {};
    var apidocs = "";

    function prepareApi(struct, baseType) {
        if (!baseType) {
            baseType = "";
        }

        Object.keys(struct).sort().forEach(function(routePart) {
            var block = struct[routePart];
            if (!block) {
                return;
            }
            var messageType = baseType + "/" + routePart;
            if (block.url && block.params) {
                // we ended up at an API definition part!
                var parts = messageType.split("/");
                var section = Util.toCamelCase(parts[1]);
                if (!block.method) {
                    throw new Error("No HTTP method specified for " + messageType +
                        "in section " + section);
                }

                // add the handler to the sections
                if (!sections[section]) {
                    sections[section] = [];
                }

                parts.splice(0, 2);
                var funcName = Util.toCamelCase(parts.join("-"));
                apidocs += createComment(section, funcName, block);

                // add test to the testSections
                if (!testSections[section]) {
                    testSections[section] = [];
                }
                testSections[section].push(TestHandlerTpl
                    .replace("<%name%>", block.method + " " + block.url + " (" + funcName + ")")
                    .replace("<%funcName%>", section + "." + funcName)
                    .replace("<%params%>", getParams(block.params, "            "))
                );
            }
            else {
                // recurse into this block next:
                prepareApi(block, messageType);
            }
        });
    }

    function createComment(section, funcName, block) {
        var method = block['method'].toLowerCase();
        var url = block['url'];
        var funcDisplayName = funcName;

        var apiVersion = npmPackageJSON['version'];

        var commentLines = [
            "/**",
            " * @api {" + method + "} " + url + " " + funcName,
            " * @apiVersion " + apiVersion,
            " * @apiName " + funcDisplayName,
            " * @apiDescription " + block['description'],
            " * @apiGroup " + section,
            " *"
        ];

        var paramsObj = block['params'];

        // sort params so Required come before Optional
        var paramKeys = Object.keys(paramsObj);
        paramKeys.sort(function(paramA, paramB) {
            var cleanParamA = paramA.replace(/^\$/, "");
            var cleanParamB = paramB.replace(/^\$/, "");

            var paramInfoA = paramsObj[paramA] || defines['params'][cleanParamA];
            var paramInfoB = paramsObj[paramB] || defines['params'][cleanParamB];

            var paramRequiredA = paramInfoA['required'];
            var paramRequiredB = paramInfoB['required'];

            if (paramRequiredA && !paramRequiredB) return -1;
            if (!paramRequiredA && paramRequiredB) return 1;
            return 0;
        });

        paramKeys.forEach(function(param) {
            var cleanParam = param.replace(/^\$/, "");
            var paramInfo = paramsObj[param] || defines['params'][cleanParam];

            var paramRequired = paramInfo['required'];
            var paramType = paramInfo['type'];
            var paramDescription = paramInfo['description'];
            var paramDefaultVal = paramInfo['default'];

            var paramLabel = cleanParam;

            // add default value if there is one
            if (typeof paramDefaultVal !== "undefined") {
                paramLabel += '=' + paramDefaultVal
            }

            // show param as either required or optional
            if (!paramRequired) {
                paramLabel = "[" + paramLabel + "]";
            }

            var allowedValues = '';
            if (paramInfo['enum']) {
                allowedValues = '=' + paramInfo['enum'].map(function(val) {
                  return val; //"\"" + val + "\"";
                }).join(',');
            }

            commentLines.push(" * @apiParam {" + paramType + allowedValues + "} " + paramLabel + "  " + paramDescription);
        });

        commentLines.push(" * @apiExample {js} ex:\ngithub." + section + "." + funcName + "({ ... });");

        return commentLines.join("\n") + "\n */\n\n";
    }

    function getParams(paramsStruct, indent) {
        var params = Object.keys(paramsStruct);
        if (!params.length) {
            return "{}";
        }
        var values = [];
        var paramName, def;
        for (var i = 0, l = params.length; i < l; ++i) {
            paramName = params[i];
            if (paramName.charAt(0) == "$") {
                paramName = paramName.substr(1);
                if (!defines.params[paramName]) {
                    Util.log("Invalid variable parameter name substitution; param '" +
                        paramName + "' not found in defines block", "fatal");
                    process.exit(1);
                } else {
                    def = defines.params[paramName];
                }
            } else {
                def = paramsStruct[paramName];
            }

            values.push(indent + "    " + paramName + ": \"" + def.type + "\"");
        }
        return "{\n" + values.join(",\n") + "\n" + indent + "}";
    }

    Util.log("Converting routes to functions");
    prepareApi(routes);

    // XXX: Doc generation is a little manual due to some customizations with
    //      JSON APIs so leave commented out and uncomment when generating new
    //      docs.
    // var apidocsPath = Path.join(__dirname, "/../doc", "apidoc.js");
    // fs.writeFileSync(apidocsPath, apidocs);

    Object.keys(sections).forEach(function(section) {
        Util.log("Writing test file for " + section);

        var def = testSections[section];
        var body = TestSectionTpl
            .replace("<%version%>", "3.0.0")
            .replace(/<%sectionName%>/g, section)
            .replace(/<%sectionAuthType%>/g, section == "installations" ? "integration" : "oauth")
            .replace("<%testBody%>", def.join("\n\n"));
        var path = Path.join(__dirname, "/../test", section + "Test.js");

        fs.writeFileSync(path, body, "utf8");
    });

    require('./generateFlowTypes.js');
    require('./generateTypeScriptTypes.js');
};

main();
