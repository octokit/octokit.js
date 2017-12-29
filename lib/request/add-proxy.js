module.exports = addProxy

const getProxyForUrl = require('proxy-from-env').getProxyForUrl
const HttpsProxyAgent = require('https-proxy-agent')

function addProxy (state, requestOptions) {
  // proxy options will be removed: https://github.com/octokit/rest.js/issues/656
  var proxyUrl
  /* istanbul ignore if */
  if (state.proxy !== undefined) {
    proxyUrl = state.proxy
  } else {
    proxyUrl = getProxyForUrl(requestOptions.path)
  }

  // proxy options will be removed: https://github.com/octokit/rest.js/issues/656
  /* istanbul ignore if */
  if (proxyUrl) {
    requestOptions.agent = new HttpsProxyAgent(proxyUrl)
  }
}
