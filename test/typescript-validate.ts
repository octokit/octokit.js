import * as Octokit from '../'
import {Agent} from 'http'
const http = require('http');

// ************************************************************
// THIS CODE IS NOT EXECUTED. IT IS JUST FOR TYPECHECKING
// ************************************************************

export default async function() {
  // Check empty constructor
  new Octokit()

  // Check that all arguments are optional
  new Octokit({})

  // for all supported options
  const octokit = new Octokit({
    timeout: 0,
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'octokit/rest.js v1.2.3'
    },
    baseUrl: 'https://api.github.com',
    agent: new Agent({ keepAlive: true }),

    // deprecated options (see deprecations-test.js)
    protocol: 'https',
    port: 433,
    pathPrefix: '',
    proxy: '',
    ca: '',
    rejectUnauthorized: false,
    family: 6
  })

  const repo = await octokit.repos.get({owner: 'octokit', repo: 'rest.js'})
  // Check Response
  repo.data
  repo.meta.link
  repo.meta.etag
  repo.meta.status
}
