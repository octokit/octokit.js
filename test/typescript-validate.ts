import * as Octokit from '../'

// This code is NOT executed.

// Test the TypeScript definition.
export default async function() {
  new Octokit() // Check empty constructor
  const octo = new Octokit({}) // Check that all arguments are optional
  const repo = await octo.repos.get({owner: 'octokit', repo: 'rest.js'})
  // Check Response
  repo.data
  repo.meta.link
  repo.meta.etag
  repo.meta.status
}
