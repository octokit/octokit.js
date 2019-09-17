/*!
 * Tests are based on work by Nathan Rajlich:
 * https://github.com/TooTallNate/node-http-proxy-agent/blob/65307ac8fe4e6ce1a2685d21ec4affa4c2a0a30d/test/test.js
 *
 * Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net>
 * Released under the MIT license
 */
const Proxy = require("proxy");
const HttpProxyAgent = require("http-proxy-agent");

const { getInstance } = require("../../util");

require("../../mocha-node-setup");

describe("client proxy", function() {
  let proxy;
  let proxyUrl;

  // start HTTP proxy server
  before(function(done) {
    proxy = Proxy();
    proxy.listen(function() {
      proxyUrl = "http://localhost:" + proxy.address().port;
      done();
    });
  });

  // stop proxy HTTP server
  after(function(done) {
    proxy.once("close", () => done());
    proxy.close();
  });

  it("options.agent = new HttpProxyAgent(proxyUrl)", () => {
    let proxyReceivedRequest;

    proxy.once("request", function(request) {
      expect(request.headers.accept, "application/vnd.github.v3+json");
      proxyReceivedRequest = true;
    });

    return getInstance("get-organization", {
      auth: "token 0000000000000000000000000000000000000001",
      request: { agent: new HttpProxyAgent(proxyUrl) }
    })
      .then(octokit => {
        return octokit.orgs.get({ org: "octokit-fixture-org" });
      })

      .then(response => {
        expect(response.data.login).to.equal("octokit-fixture-org");
        expect(proxyReceivedRequest).to.equal(true);
      });
  });
});
