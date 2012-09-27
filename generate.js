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

var Fs = require("fs");
var Path = require("path");

var Util = require("./util");

var IndexTpl = Fs.readFileSync(__dirname + "/templates/index.js.tpl", "utf8");
var SectionTpl = Fs.readFileSync(__dirname + "/templates/section.js.tpl", "utf8");
var HandlerTpl = Fs.readFileSync(__dirname + "/templates/handler.js.tpl", "utf8");
var AfterRequestTpl = Fs.readFileSync(__dirname + "/templates/after_request.js.tpl", "utf8");
var TestSectionTpl = Fs.readFileSync(__dirname + "/templates/test_section.js.tpl", "utf8");
var TestHandlerTpl = Fs.readFileSync(__dirname + "/templates/test_handler.js.tpl", "utf8");

var main = module.exports = function(versions) {
    Util.log("Generating for versions", versions);

    versions.forEach(function(version) {
        var dir = __dirname + "/api/" + version;
        var routes = JSON.parse(Fs.readFileSync(dir + "/routes.json", "utf8"));
        var defines = routes.defines;
        delete routes.defines;
        var headers = defines["response-headers"];
        // cast header names to lowercase.
        if (headers && headers.length)
            headers = headers.map(function(header) { return header.toLowerCase(); });
        var sections = {};
        var testSections = {};

        function createComment(paramsStruct, section, funcName, indent) {
            var params = Object.keys(paramsStruct);
            var comment = [
                indent + "/** section: github",
                indent + " *  " + section + "#" + funcName + "(msg, callback) -> null",
                indent + " *      - msg (Object): Object that contains the parameters and their values to be sent to the server.",
                indent + " *      - callback (Function): function to call when the request is finished " +
                    "with an error as first argument and result data as second argument.",
                indent + " * ",
                indent + " *  ##### Params on the `msg` object:",
                indent + " * "
            ];
            if (!params.length)
                comment.push(indent + " *  No params, simply pass an empty Object literal `{}`");
            var paramName, def, line;
            for (var i = 0, l = params.length; i < l; ++i) {
                paramName = params[i];
                if (paramName.charAt(0) == "$") {
                    paramName = paramName.substr(1);
                    if (!defines.params[paramName]) {
                        Util.log("Invalid variable parameter name substitution; param '" +
                            paramName + "' not found in defines block", "fatal");
                        process.exit(1);
                    }
                    else
                        def = defines.params[paramName];
                }
                else
                    def = paramsStruct[paramName];

                line = indent + " *  - " + paramName + " (" + (def.type || "mixed") + "): " +
                    (def.required ? "Required. " : "Optional. ");
                if (def.description)
                    line += def.description + " ";
                if (def.validation)
                    line += "Validation rule: ` " + def.validation + " `.";

                comment.push(line);
            }

            return comment.join("\n") + "\n" + indent + " **/";
        }

        function getParams(paramsStruct, indent) {
            var params = Object.keys(paramsStruct);
            if (!params.length)
                return "{}";
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
                    }
                    else
                        def = defines.params[paramName];
                }
                else
                    def = paramsStruct[paramName];

                values.push(indent + "    " + paramName + ": \"" + def.type + "\"");
            }
            return "{\n" + values.join(",\n") + "\n" + indent + "}";
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
                    var parts = messageType.split("/");
                    var section = Util.toCamelCase(parts[1].toLowerCase());
                    if (!block.method) {
                        throw new Error("No HTTP method specified for " + messageType +
                            "in section " + section);
                    }

                    parts.splice(0, 2);
                    var funcName = Util.toCamelCase(parts.join("-"));
                    var comment = createComment(block.params, section, funcName, "    ");

                    // add the handler to the sections
                    if (!sections[section])
                        sections[section] = [];

                    var afterRequest = "";
                    if (headers && headers.length) {
                        afterRequest = AfterRequestTpl.replace("<%headers%>", "\"" +
                            headers.join("\", \"") + "\"");
                    }
                    sections[section].push(HandlerTpl
                        .replace("<%funcName%>", funcName)
                        .replace("<%comment%>", comment)
                        .replace("<%afterRequest%>", afterRequest)
                    );

                    // add test to the testSections
                    if (!testSections[section])
                        testSections[section] = [];
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

        Util.log("Converting routes to functions");
        prepareApi(routes);

        Util.log("Writing files to version dir");
        var sectionNames = Object.keys(sections);

        Util.log("Writing index.js file for version " + version);
        Fs.writeFileSync(dir + "/index.js",
            IndexTpl
                .replace("<%name%>", defines.constants.name)
                .replace("<%description%>", defines.constants.description)
                .replace("<%scripts%>", "\"" + sectionNames.join("\", \"") + "\""),
            "utf8");

        Object.keys(sections).forEach(function(section) {
            var def = sections[section];
            Util.log("Writing '" + section + ".js' file for version " + version);
            Fs.writeFileSync(dir + "/" + section + ".js", SectionTpl
                .replace(/<%sectionName%>/g, section)
                .replace("<%sectionBody%>", def.join("\n")),
                "utf8"
            );

            def = testSections[section];
            // test if previous tests already contained implementations by checking
            // if the difference in character count between the current test file 
            // and the newly generated one is more than twenty characters.
            var body = TestSectionTpl
                .replace("<%version%>", version.replace("v", ""))
                .replace("<%testBody%>", def.join(",\n\n"));
            var path = dir + "/" + section + "Test.js";
            if (Path.existsSync(path) && Math.abs(Fs.readFileSync(path, "utf8").length - body.length) >= 20) {
                Util.log("Moving old test file to '" + path + ".bak' to preserve tests " +
                    "that were already implemented. \nPlease be sure te check this file " +
                    "and move all implemented tests back into the newly generated test!", "error");
                Fs.renameSync(path, path + ".bak");
            }
            
            Util.log("Writing test file for " + section + ", version " + version);
            Fs.writeFileSync(path, body, "utf8");
        });
    });
};

if (!module.parent) {
    Util.log("Starting up...");
    var availVersions = Fs.readdirSync(__dirname + "/api");
    if (!availVersions.length) {
        Util.log("No versions available to generate.", "fatal");
        process.exit(1);
    }
    var versions = [];
    var arg, val;
    for (var i = 0, l = process.argv.length; i < l; i += 2) {
        arg = process.argv[i];
        val = process.argv[i + 1];
        if ((arg == "-v" || arg == "--version") && val) {
            if (val.charAt(0) !== "v")
                val = "v" + val;
            if (availVersions.indexOf(val) !== -1) {
                versions.push(val);
            }
            else {
                Util.log("Version '" + val + "' is not available", "fatal");
                process.exit(1);
            }
        }
    }
    if (!versions.length) {
        Util.log("No versions specified via the command line, generating for all available versions.");
        versions = availVersions;
    }

    main(versions);
}
