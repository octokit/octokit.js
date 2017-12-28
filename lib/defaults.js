module.exports = {
  ca: undefined,
  family: undefined, // 4 for v4, 6 for v6
  headers: {},
  host: 'api.github.com',
  pathPrefix: '', // for GitHub Enterprise
  port: undefined,
  protocol: 'https',
  proxy: undefined,
  rejectUnauthorized: true,
  requestMedia: 'application/vnd.github.v3+json',
  timeout: 0
}
