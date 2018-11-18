import * as Octokit from '../index'
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
  repo.status
  repo.headers.link
  repo.headers.etag
  repo.headers.status

  const user = await octokit.users.getByUsername({username: 'octokit'})
  // Check Response
  user.data.login
  user.data.type

  const userIssues = await octokit.issues.listForAuthenticatedUser({state: 'open'})
  // Check Response
  userIssues.data[0].locked

  await octokit.issues.addLabels({
    owner: 'octokit',
    repo: 'rest.js',
    number: 10,
    labels: ['label'],
  });

  // Testing static methods introduced in v16
  octokit.hook.before('request', async (options) => {
    console.log('before hook', options.url);
  })
  octokit.hook.after('request', async (response, options) => {
    console.log(`${options.method} ${options.url}: ${response.status}`)
  })

  const findInCache = (etag: string) => ({ hello: 'world' })
  octokit.hook.error('request', async (error, options) => {
    if (error.status === 304) {
      return findInCache(error.headers.etag)
    }

    throw error
  })
  octokit.hook.wrap('request', async (request, options) => {
    // add logic before, after, catch errors or replace the request altogether
    return request(options)
  })
  Octokit.plugin((octokit, options) => {
    octokit.hook.wrap('request', async (request, options) => {
      const time = Date.now()
      const response = await request(options)
      console.log(`${options.method} ${options.url} – ${response.status} in ${Date.now() - time}ms`)
      return response
    })
  })
}
