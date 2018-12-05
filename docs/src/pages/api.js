import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>
      <h1>API</h1>
      <h1>Get an issue</h1>
      <p>The API returns a <a href='https://developer.github.com/v3/#http-redirects'><code>301 Moved Permanently</code> status</a> if the issue was <a href='https://help.github.com/articles/transferring-an-issue-to-another-repository/'>transferred</a> to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a <code>404 Not Found</code> status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a <code>410 Gone</code> status. To receive webhook events for transferred and deleted issues, subscribe to the <a href='https://developer.github.com/v3/activity/events/types/#issuesevent'><code>issues</code></a> webhook. <em>Note</em>*: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the <code>pull_request</code> key.</p>
      <p>Be aware that the <code>id</code> of a pull request returned from "Issues" endpoints will be an <em>issue id</em>. To find out the pull request id, use the "<a href='https://developer.github.com/v3/pulls/#list-pull-requests'>List pull requests</a>" endpoint.</p>
      <p><a href='https://developer.github.com/v3/issues/#get-a-single-issue'>REST API doc</a></p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='code'>owner</td>
            <td>
              string
            </td>
            <td />
          </tr>
          <tr>
            <td class='code'>repo</td>
            <td>
              string
            </td>
            <td />
          </tr>
          <tr>
            <td class='code'>number</td>
            <td>
              integer
            </td>
            <td />
          </tr>
        </tbody>
      </table>

      <h1>Create an issue</h1>
      <p>Any user with pull access to a repository can create an issue.</p>
      <p><a href='https://developer.github.com/v3/issues/#create-an-issue'>GitHub REST documentation</a></p>
      <pre><code>octokit.issues.create(options)</code></pre>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='code'>owner</td>
            <td>
              string
            </td>
            <td />
          </tr>
          <tr>
            <td class='code'>repo</td>
            <td>
              string
            </td>
            <td />
          </tr>
          <tr>
            <td class='code'>title</td>
            <td>
              string
            </td>
            <td>
              <p>The title of the issue.</p>

            </td>
          </tr>
          <tr>
            <td class='code'>body <span class='label label-optional'>optional</span></td>
            <td>
              string
            </td>
            <td>
              <p>The contents of the issue.</p>
            </td>
          </tr>
          <tr>
            <td class='code'>assignee <span class='label label-optional'>optional</span></td>
            <td>
              string
            </td>
            <td>
              <p>Login for the user that this issue should be assigned to. <em>NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. <strong>This field is deprecated.</strong></em></p>
            </td>
          </tr>
          <tr>
            <td class='code'>milestone <span class='label label-optional'>optional</span></td>
            <td>
              integer
            </td>
            <td>
              <p>The <code>number</code> of the milestone to associate this issue with. <em>NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise.</em></p>

            </td>
          </tr>
          <tr>
            <td class='code'>labels <span class='label label-optional'>optional</span></td>
            <td>
              string[]
            </td>
            <td>
              <p>Labels to associate with this issue. <em>NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.</em></p>

            </td>
          </tr>
          <tr>
            <td class='code'>assignees <span class='label label-optional'>optional</span></td>
            <td>
              string[]
            </td>
            <td>
              <p>Logins for Users to assign to this issue. <em>NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</em></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)
