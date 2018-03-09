import * as Octokit from '../'

// ************************************************************
// THIS CODE IS NOT EXECUTED. IT IS JUST FOR TYPECHECKING
// ************************************************************

// Test the TypeScript definition.
export default async function() {
  // ************************************************************
  // THIS CODE IS NOT EXECUTED. IT IS JUST FOR TYPECHECKING
  // ************************************************************
  new Octokit() // Check empty constructor
  const octo = new Octokit({}) // Check that all arguments are optional
  const repo = await octo.repos.get({owner: 'octokit', repo: 'rest.js'})
  // Check Response
  repo.data
  repo.meta.link
  repo.meta.etag
  repo.meta.status
}
