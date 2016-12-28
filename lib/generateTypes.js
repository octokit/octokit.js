#!/usr/bin/env node
/** section: github, internal
 * class ApiGenerator
 *
 *    Copyright 2012 Cloud9 IDE, Inc.
 *
 *    This product includes software developed by
 *    Cloud9 IDE, Inc (http://c9.io).
 *
 *    Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var fs = require("fs");
var Path = require("path");
var Util = require("./util");
var Mustache = require("mustache");

var typeMap = {
    Json: "string",
    String: "string",
    Number: "number",
    Boolean: "boolean",
};

// XXX: maybe a better idea to update routes.json to include array value types.
function replaceArrayTypes(type, name) {
    switch (name) {
        case "scopes":
        case "add_scopes":
        case "remove_scopes":
        case "parents":
        case "assignees":
        case "body":
        case "repositories":
        case "repo_names":
        case "events":
        case "add_events":
        case "remove_events":
        case "contexts":
        case "required_contexts":
        case "maintainers":
        case "reviewers":
        case "comments":
            return "string[]";
        default:
            return type;
    }
}

function paramData(key, definition) {
    if (definition === null) {
        return {};
    }

    var typeName = typeMap[definition.type] || definition.type;
    var type = replaceArrayTypes(typeName, key);
    var enums = definition.enum ?
        definition.enum.map(JSON.stringify).join("|")
        : null;

    return {
        name: pascalcase(key),
        key: key,
        required: definition.required,
        type: enums ? enums : type,
    };
}

function capitalize(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1));
}

function camelcase(string) {
    return string.replace(/(?:-|_)([a-z])/g, function (_, character) {
        return capitalize(character);
    });
}

function pascalcase(string) {
    return capitalize(camelcase(string));
}

function isGlobalParam(name) {
    return name.charAt(0) === "$";
}

function isLocalParam(name) {
    return !isGlobalParam(name);
}

function entries(object) {
    return Object.keys(object).map(function (key) {
        return [key, object[key]];
    });
}

function combineParamData(params, entry) {
    return params.concat(paramData.apply(null, entry));
}

var main = module.exports = function(languageName, templateFile, outputFile) {
    var templatePath = Path.join(__dirname, "..", "templates", templateFile);
    var template = fs.readFileSync(templatePath, "utf8");

    // check routes path
    var routesPath = Path.join(__dirname, "routes.json");
    var routes = JSON.parse(fs.readFileSync(routesPath, "utf8"));
    if (!routes.defines) {
        Util.log("No routes defined.", "fatal");
        process.exit(1);
    }

    var defines = routes.defines;
    var requestHeaders = defines["request-headers"];
    delete routes.defines;

    Util.log("Generating " + languageName + " types...");

    var params = entries(defines.params).reduce(combineParamData, []);

    var namespaces = Object.keys(routes).reduce(function (namespaces, namespace) {
        var methods = entries(routes[namespace]).reduce(function (methods, entry) {
            var unionTypeNames = Object.keys(entry[1].params)
                .filter(isGlobalParam)
                .reduce(function (params, name) {
                    return params.concat(pascalcase(name.slice(1)));
                }, []);

            var ownParams = entries(entry[1].params)
                .filter(function (entry) { return isLocalParam(entry[0]); })
                .reduce(combineParamData, []);

            var hasParams = unionTypeNames.length > 0 || ownParams.length > 0;
            var paramTypeName = pascalcase(namespace + "-" + entry[0] + "Params");

            return methods.concat({
                method: camelcase(entry[0]),
                paramTypeName: hasParams && paramTypeName,
                unionTypeNames: unionTypeNames.length > 0 && unionTypeNames,
                ownParams: ownParams.length > 0 && { params: ownParams },
            });
        }, []);

        return namespaces.concat({
            namespace: camelcase(namespace),
            methods: methods,
        });
    }, []);

    var body = Mustache.render(template, {
        requestHeaders: requestHeaders.map(JSON.stringify),
        params: params,
        namespaces: namespaces,
    });

    Util.log("Writing " + languageName + " declarations file");

    fs.writeFileSync(Path.join(__dirname, outputFile), body, "utf8");
};
