define({ "api": [
  {
    "type": "GET",
    "url": "/notifications/threads/:id/subscription",
    "title": "checkNotificationThreadSubscription",
    "name": "checkNotificationThreadSubscription",
    "description": "<p>Check to see if the current user is subscribed to a thread.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.checkNotificationThreadSubscription({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.checkNotificationThreadSubscription({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.checkNotificationThreadSubscription({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/starred/:owner/:repo",
    "title": "checkStarringRepo",
    "name": "checkStarringRepo",
    "description": "<p>Check if you are starring a repository</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.checkStarringRepo({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.checkStarringRepo({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.checkStarringRepo({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/notifications/threads/:id/subscription",
    "title": "deleteNotificationThreadSubscription",
    "name": "deleteNotificationThreadSubscription",
    "description": "<p>Delete a notification thread subscription.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.deleteNotificationThreadSubscription({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.deleteNotificationThreadSubscription({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.deleteNotificationThreadSubscription({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p>List public events</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEvents({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEvents({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEvents({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/events",
    "title": "getEventsForOrg",
    "name": "getEventsForOrg",
    "description": "<p>List public events for an organization</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForOrg({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForOrg({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForOrg({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p>List repository events</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForRepo({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForRepo({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForRepo({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events",
    "title": "getEventsForRepoIssues",
    "name": "getEventsForRepoIssues",
    "description": "<p>List issue events for a repository</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/networks/:owner/:repo/events",
    "title": "getEventsForRepoNetwork",
    "name": "getEventsForRepoNetwork",
    "description": "<p>List public events for a network of repositories</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events",
    "title": "getEventsForUser",
    "name": "getEventsForUser",
    "description": "<p>List events performed by a user</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/orgs/:org",
    "title": "getEventsForUserOrg",
    "name": "getEventsForUserOrg",
    "description": "<p>List events for a user's organization</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUserOrg({username, org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUserOrg({username, org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUserOrg({username, org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/public",
    "title": "getEventsForUserPublic",
    "name": "getEventsForUserPublic",
    "description": "<p>List public events performed by a user</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUserPublic({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUserPublic({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUserPublic({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events",
    "title": "getEventsReceived",
    "name": "getEventsReceived",
    "description": "<p>List events that a user has received</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsReceived({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsReceived({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsReceived({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events/public",
    "title": "getEventsReceivedPublic",
    "name": "getEventsReceivedPublic",
    "description": "<p>List public events that a user has received</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsReceivedPublic({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsReceivedPublic({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsReceivedPublic({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/feeds",
    "title": "getFeeds",
    "name": "getFeeds",
    "description": "<p>Get all feeds available for the authenticated user.</p>",
    "group": "Activity",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getFeeds({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getFeeds({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getFeeds({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/notifications/threads/:id",
    "title": "getNotificationThread",
    "name": "getNotificationThread",
    "description": "<p>View a single notification thread.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotificationThread({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotificationThread({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotificationThread({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/notifications",
    "title": "getNotifications",
    "name": "getNotifications",
    "description": "<p>Get all notifications for the current user, grouped by repository.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "all",
            "defaultValue": "false",
            "description": "<p>If true, show notifications marked as read. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "participating",
            "defaultValue": "false",
            "description": "<p>If true, only shows notifications in which the user is directly participating or mentioned. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "before",
            "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotifications({all, participating, since, before})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotifications({all, participating, since, before}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotifications({all, participating, since, before}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/notifications",
    "title": "getNotificationsForUser",
    "name": "getNotificationsForUser",
    "description": "<p>Get all notifications for the given user.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "all",
            "defaultValue": "false",
            "description": "<p>If true, show notifications marked as read. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "participating",
            "defaultValue": "false",
            "description": "<p>If true, only shows notifications in which the user is directly participating or mentioned. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "before",
            "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscription",
    "title": "getRepoSubscription",
    "name": "getRepoSubscription",
    "description": "<p>Get a Repository Subscription.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getRepoSubscription({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getRepoSubscription({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getRepoSubscription({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stargazers",
    "title": "getStargazersForRepo",
    "name": "getStargazersForRepo",
    "description": "<p>List Stargazers</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStargazersForRepo({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStargazersForRepo({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStargazersForRepo({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/starred",
    "title": "getStarredRepos",
    "name": "getStarredRepos",
    "description": "<p>List repositories being starred by the authenticated user</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStarredRepos({sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStarredRepos({sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStarredRepos({sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/starred",
    "title": "getStarredReposForUser",
    "name": "getStarredReposForUser",
    "description": "<p>List repositories being starred by a user</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/subscriptions",
    "title": "getWatchedRepos",
    "name": "getWatchedRepos",
    "description": "<p>List repositories being watched by the authenticated user.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchedRepos({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchedRepos({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchedRepos({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/subscriptions",
    "title": "getWatchedReposForUser",
    "name": "getWatchedReposForUser",
    "description": "<p>List repositories being watched by a user.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchedReposForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchedReposForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchedReposForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscribers",
    "title": "getWatchersForRepo",
    "name": "getWatchersForRepo",
    "description": "<p>Get watchers for repository.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchersForRepo({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchersForRepo({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchersForRepo({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PATCH",
    "url": "/notifications/threads/:id",
    "title": "markNotificationThreadAsRead",
    "name": "markNotificationThreadAsRead",
    "description": "<p>Mark a notification thread as read.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationThreadAsRead({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationThreadAsRead({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationThreadAsRead({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/notifications",
    "title": "markNotificationsAsRead",
    "name": "markNotificationsAsRead",
    "description": "<p>Mark notifications as read for authenticated user.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_read_at",
            "defaultValue": "Time.now",
            "description": "<p>Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationsAsRead({last_read_at})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationsAsRead({last_read_at}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationsAsRead({last_read_at}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/notifications",
    "title": "markNotificationsAsReadForRepo",
    "name": "markNotificationsAsReadForRepo",
    "description": "<p>Mark notifications in a repo as read.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_read_at",
            "defaultValue": "Time.now",
            "description": "<p>Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/notifications/threads/:id/subscription",
    "title": "setNotificationThreadSubscription",
    "name": "setNotificationThreadSubscription",
    "description": "<p>This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "subscribed",
            "description": "<p>Determines if notifications should be received from this thread</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "ignored",
            "description": "<p>Determines if all notifications should be blocked from this thread</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/subscription",
    "title": "setRepoSubscription",
    "name": "setRepoSubscription",
    "description": "<p>Set a Repository Subscription</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "subscribed",
            "description": "<p>Determines if notifications should be received from this repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "ignored",
            "description": "<p>Determines if all notifications should be blocked from this repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/user/starred/:owner/:repo",
    "title": "starRepo",
    "name": "starRepo",
    "description": "<p>Star a repository</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.starRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.starRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.starRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/user/starred/:owner/:repo",
    "title": "unstarRepo",
    "name": "unstarRepo",
    "description": "<p>Unstar a repository</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.unstarRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.unstarRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.unstarRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/subscription",
    "title": "unwatchRepo",
    "name": "unwatchRepo",
    "description": "<p>Unwatch a repository.</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.unwatchRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.unwatchRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.unwatchRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.addRepoToInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.addRepoToInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/accounts/:id",
    "title": "checkMarketplaceListingAccount",
    "name": "checkMarketplaceListingAccount",
    "description": "<p>Check if a GitHub account is associated with any Marketplace listing. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.checkMarketplaceListingAccount({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.checkMarketplaceListingAccount({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.checkMarketplaceListingAccount({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/accounts/:id",
    "title": "checkMarketplaceListingStubbedAccount",
    "name": "checkMarketplaceListingStubbedAccount",
    "description": "<p>Check if a stubbed GitHub account is associated with any Marketplace listing. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.checkMarketplaceListingStubbedAccount({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.checkMarketplaceListingStubbedAccount({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.checkMarketplaceListingStubbedAccount({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "POST",
    "url": "/installations/:installation_id/access_tokens",
    "title": "createInstallationToken",
    "name": "createInstallationToken",
    "description": "<p>Create a new installation token. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "user_id",
            "description": "<p>The id of the user for whom the app is acting on behalf of.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.createInstallationToken({installation_id, user_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.createInstallationToken({installation_id, user_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.createInstallationToken({installation_id, user_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app",
    "title": "get",
    "name": "get",
    "description": "<p>Get the authenticated GitHub App. (In preview period. See README.)</p>",
    "group": "Apps",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.get({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.get({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.get({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/apps/:app_slug",
    "title": "getForSlug",
    "name": "getForSlug",
    "description": "<p>Get a single GitHub App. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_slug",
            "description": "<p>The URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., https://github.com/settings/apps/:app_slug).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getForSlug({app_slug})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getForSlug({app_slug}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getForSlug({app_slug}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app/installations/:installation_id",
    "title": "getInstallation",
    "name": "getInstallation",
    "description": "<p>Get a single installation. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallation({installation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallation({installation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallation({installation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/installation/repositories",
    "title": "getInstallationRepositories",
    "name": "getInstallationRepositories",
    "description": "<p>List repositories that are accessible to the authenticated installation. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "user_id",
            "description": "<p>The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallationRepositories({user_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallationRepositories({user_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallationRepositories({user_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List the app's installations. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallations({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallations({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallations({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans/:id/accounts",
    "title": "getMarketplaceListingPlanAccounts",
    "name": "getMarketplaceListingPlanAccounts",
    "description": "<p>List all GitHub accounts (user or organization) on a specific plan. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans",
    "title": "getMarketplaceListingPlans",
    "name": "getMarketplaceListingPlans",
    "description": "<p>List all plans for your Marketplace listing. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingPlans({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingPlans({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingPlans({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans/:id/accounts",
    "title": "getMarketplaceListingStubbedPlanAccounts",
    "name": "getMarketplaceListingStubbedPlanAccounts",
    "description": "<p>List all GitHub accounts (user or organization) on a specific stubbed plan. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans",
    "title": "getMarketplaceListingStubbedPlans",
    "name": "getMarketplaceListingStubbedPlans",
    "description": "<p>List all stubbed plans for your Marketplace listing. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingStubbedPlans({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingStubbedPlans({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingStubbedPlans({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "DELETE",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.removeRepoFromInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "check",
    "name": "check",
    "description": "<p>Check an authorization</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>OAuth token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.check({access_token, client_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.check({access_token, client_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.check({access_token, client_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/authorizations",
    "title": "create",
    "name": "create",
    "description": "<p>Create a new authorization.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/authorizations/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete an authorization.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/grants/:id",
    "title": "deleteGrant",
    "name": "deleteGrant",
    "description": "<p>Delete a grant.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.deleteGrant({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.deleteGrant({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.deleteGrant({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations/:id",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single authorization.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.get({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.get({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.get({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List your authorizations.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getAll({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getAll({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getAll({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants/:id",
    "title": "getGrant",
    "name": "getGrant",
    "description": "<p>Get a single grant.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getGrant({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getGrant({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getGrant({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants",
    "title": "getGrants",
    "name": "getGrants",
    "description": "<p>List your grants.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getGrants({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getGrants({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getGrants({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id",
    "title": "getOrCreateAuthorizationForApp",
    "name": "getOrCreateAuthorizationForApp",
    "description": "<p>Get or create an authorization for a specific app.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id/:fingerprint",
    "title": "getOrCreateAuthorizationForAppAndFingerprint",
    "name": "getOrCreateAuthorizationForAppAndFingerprint",
    "description": "<p>Get or create an authorization for a specific app and fingerprint.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "reset",
    "name": "reset",
    "description": "<p>Reset an authorization</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>OAuth token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.reset({access_token, client_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.reset({access_token, client_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.reset({access_token, client_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "revoke",
    "name": "revoke",
    "description": "<p>Revoke an authorization for an application</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>OAuth token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.revoke({access_token, client_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.revoke({access_token, client_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.revoke({access_token, client_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/grants/:access_token",
    "title": "revokeGrant",
    "name": "revokeGrant",
    "description": "<p>Revoke a grant for an application</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>OAuth token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.revokeGrant({access_token, client_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.revokeGrant({access_token, client_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.revokeGrant({access_token, client_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PATCH",
    "url": "/authorizations/:id",
    "title": "update",
    "name": "update",
    "description": "<p>Update an existing authorization.</p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "add_scopes",
            "description": "<p>A list of scopes to add to this authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "remove_scopes",
            "description": "<p>A list of scopes to remove from this authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/admin/organizations",
    "title": "createOrg",
    "name": "createOrg",
    "description": "<p>Create an organization</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>The organization's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "admin",
            "description": "<p>The login of the user who will manage this organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "profile_name",
            "description": "<p>The organization's display name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.createOrg({login, admin, profile_name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.createOrg({login, admin, profile_name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.createOrg({login, admin, profile_name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre_receive_environments",
    "title": "createPreReceiveEnvironment",
    "name": "createPreReceiveEnvironment",
    "description": "<p>Create a pre-receive environment. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The new pre-receive environment's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>URL from which to download a tarball of this environment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.createPreReceiveEnvironment({name, image_url})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.createPreReceiveEnvironment({name, image_url}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.createPreReceiveEnvironment({name, image_url}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre-receive-hooks",
    "title": "createPreReceiveHook",
    "name": "createPreReceiveHook",
    "description": "<p>Create a pre-receive hook. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the hook.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "script",
            "description": "<p>The script that the hook runs.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "script_repository",
            "description": "<p>The GitHub repository where the script is kept.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "environment",
            "description": "<p>The pre-receive environment where the script is executed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "enforcement",
            "defaultValue": "disabled",
            "description": "<p>The state of enforcement for this hook. default: disabled</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_downstream_configuration",
            "defaultValue": "false",
            "description": "<p>Whether enforcement can be overridden at the org or repo level. default: false</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "DELETE",
    "url": "/admin/pre_receive_environments/:id",
    "title": "deletePreReceiveEnvironment",
    "name": "deletePreReceiveEnvironment",
    "description": "<p>Delete a pre-receive environment. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.deletePreReceiveEnvironment({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.deletePreReceiveEnvironment({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.deletePreReceiveEnvironment({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "DELETE",
    "url": "/admin/pre_receive_hooks/:id",
    "title": "deletePreReceiveHook",
    "name": "deletePreReceiveHook",
    "description": "<p>Delete a pre-receive hook. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.deletePreReceiveHook({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.deletePreReceiveHook({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.deletePreReceiveHook({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/pre_receive_environments/:id",
    "title": "editPreReceiveEnvironment",
    "name": "editPreReceiveEnvironment",
    "description": "<p>Create a pre-receive environment. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>This pre-receive environment's new name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>URL from which to download a tarball of this environment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.editPreReceiveEnvironment({id, name, image_url})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.editPreReceiveEnvironment({id, name, image_url}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.editPreReceiveEnvironment({id, name, image_url}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/pre_receive_hooks/:id",
    "title": "editPreReceiveHook",
    "name": "editPreReceiveHook",
    "description": "<p>Edit a pre-receive hook. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "hook",
            "description": "<p>JSON object that contains pre-receive hook info.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.editPreReceiveHook({id, hook})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.editPreReceiveHook({id, hook}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.editPreReceiveHook({id, hook}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/enterprise/settings/license",
    "title": "getLicense",
    "name": "getLicense",
    "description": "<p>Get license information</p>",
    "group": "Enterprise",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getLicense({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getLicense({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getLicense({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-environments/:id",
    "title": "getPreReceiveEnvironment",
    "name": "getPreReceiveEnvironment",
    "description": "<p>Get a single pre-receive environment. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getPreReceiveEnvironment({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getPreReceiveEnvironment({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getPreReceiveEnvironment({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-environments/:id/downloads/latest",
    "title": "getPreReceiveEnvironmentDownloadStatus",
    "name": "getPreReceiveEnvironmentDownloadStatus",
    "description": "<p>Get a pre-receive environment's download status. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre_receive_environments",
    "title": "getPreReceiveEnvironments",
    "name": "getPreReceiveEnvironments",
    "description": "<p>List pre-receive environments. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getPreReceiveEnvironments({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getPreReceiveEnvironments({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getPreReceiveEnvironments({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-hooks/:id",
    "title": "getPreReceiveHook",
    "name": "getPreReceiveHook",
    "description": "<p>Get a single pre-receive hook. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getPreReceiveHook({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getPreReceiveHook({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getPreReceiveHook({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-hooks",
    "title": "getPreReceiveHooks",
    "name": "getPreReceiveHooks",
    "description": "<p>List pre-receive hooks. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.getPreReceiveHooks({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.getPreReceiveHooks({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.getPreReceiveHooks({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/staff/indexing_jobs",
    "title": "queueIndexingJob",
    "name": "queueIndexingJob",
    "description": "<p>Queue an indexing job</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target",
            "description": "<p>A string representing the item to index.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.queueIndexingJob({target})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.queueIndexingJob({target}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.queueIndexingJob({target}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/enterprise/stats/:type",
    "title": "stats",
    "name": "stats",
    "description": "<p>Get statistics.</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "issues",
              "hooks",
              "milestones",
              "orgs",
              "comments",
              "pages",
              "users",
              "gists",
              "pulls",
              "repos",
              "all"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.stats({type})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.stats({type}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.stats({type}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/ldap/teams/:team_id/sync",
    "title": "syncLdapForTeam",
    "name": "syncLdapForTeam",
    "description": "<p>Sync LDAP mapping for a team.</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.syncLdapForTeam({team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.syncLdapForTeam({team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.syncLdapForTeam({team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/ldap/users/:username/sync",
    "title": "syncLdapForUser",
    "name": "syncLdapForUser",
    "description": "<p>Sync LDAP mapping for a user.</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.syncLdapForUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.syncLdapForUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.syncLdapForUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre_receive_environments/:id/downloads",
    "title": "triggerPreReceiveEnvironmentDownload",
    "name": "triggerPreReceiveEnvironmentDownload",
    "description": "<p>Trigger a pre-receive environment download. (In preview period. See README.)</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.triggerPreReceiveEnvironmentDownload({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.triggerPreReceiveEnvironmentDownload({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.triggerPreReceiveEnvironmentDownload({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/ldap/teams/:team_id/mapping",
    "title": "updateLdapForTeam",
    "name": "updateLdapForTeam",
    "description": "<p>Update LDAP mapping for a team.</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ldap_dn",
            "description": "<p>LDAP DN for user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.updateLdapForTeam({team_id, ldap_dn})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.updateLdapForTeam({team_id, ldap_dn}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.updateLdapForTeam({team_id, ldap_dn}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/ldap/users/:username/mapping",
    "title": "updateLdapForUser",
    "name": "updateLdapForUser",
    "description": "<p>Update LDAP mapping for a user.</p>",
    "group": "Enterprise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ldap_dn",
            "description": "<p>LDAP DN for user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.enterprise.updateLdapForUser({username, ldap_dn})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.enterprise.updateLdapForUser({username, ldap_dn}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.enterprise.updateLdapForUser({username, ldap_dn}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Enterprise"
  },
  {
    "type": "GET",
    "url": "/gists/:id/star",
    "title": "checkStar",
    "name": "checkStar",
    "description": "<p>Check if a gist is starred</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.checkStar({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.checkStar({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.checkStar({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists",
    "title": "create",
    "name": "create",
    "description": "<p>Create a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "files",
            "description": "<p>Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "public",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.create({files, public, description})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.create({files, public, description}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.create({files, public, description}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists/:gist_id/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": "<p>Id (SHA1 hash) of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.createComment({gist_id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.createComment({gist_id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.createComment({gist_id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:gist_id/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": "<p>Id (SHA1 hash) of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.deleteComment({gist_id, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.deleteComment({gist_id, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.deleteComment({gist_id, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:id",
    "title": "edit",
    "name": "edit",
    "description": "<p>Edit a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "files",
            "description": "<p>Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content",
            "description": "<p>Updated file contents.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "filename",
            "description": "<p>New name for this file.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.edit({id, files, description, content, filename})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.edit({id, files, description, content, filename}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.edit({id, files, description, content, filename}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:gist_id/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": "<p>Id (SHA1 hash) of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.editComment({gist_id, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.editComment({gist_id, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.editComment({gist_id, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists/:id/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p>Fork a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.fork({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.fork({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.fork({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.get({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.get({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.get({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List the authenticated user's gists or if called anonymously, this will return all public gists</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getAll({since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getAll({since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getAll({since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": "<p>Id (SHA1 hash) of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getComment({gist_id, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getComment({gist_id, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getComment({gist_id, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": "<p>Id (SHA1 hash) of the gist.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getComments({gist_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getComments({gist_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getComments({gist_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List gist commits</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getCommits({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getCommits({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getCommits({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/users/:username/gists",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List a user's gists</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getForUser({username, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getForUser({username, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getForUser({username, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p>List gist forks</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getForks({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getForks({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getForks({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/public",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>List all public gists</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getPublic({since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getPublic({since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getPublic({since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/:sha",
    "title": "getRevision",
    "name": "getRevision",
    "description": "<p>Get a specific revision of a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getRevision({id, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getRevision({id, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getRevision({id, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/starred",
    "title": "getStarred",
    "name": "getStarred",
    "description": "<p>List the authenticated user's starred gists</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getStarred({since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getStarred({since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getStarred({since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PUT",
    "url": "/gists/:id/star",
    "title": "star",
    "name": "star",
    "description": "<p>Star a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.star({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.star({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.star({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id/star",
    "title": "unstar",
    "name": "unstar",
    "description": "<p>Unstar a gist</p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.unstar({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.unstar({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.unstar({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/blobs",
    "title": "createBlob",
    "name": "createBlob",
    "description": "<p>Create a Blob</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "encoding",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createBlob({owner, repo, content, encoding})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createBlob({owner, repo, content, encoding}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createBlob({owner, repo, content, encoding}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/commits",
    "title": "createCommit",
    "name": "createCommit",
    "description": "<p>Create a Commit</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>String of the commit message</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tree",
            "description": "<p>String of the SHA of the tree object this commit points to</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "parents",
            "description": "<p>Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "committer",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/refs",
    "title": "createReference",
    "name": "createReference",
    "description": "<p>Create a Reference</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected. NOTE: After creating the reference, on calling (get|update|delete)Reference, drop the leading 'refs/' when providing the 'ref' param.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createReference({owner, repo, ref, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createReference({owner, repo, ref, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createReference({owner, repo, ref, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/tags",
    "title": "createTag",
    "name": "createTag",
    "description": "<p>Create a Tag Object</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>String of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>String of the tag message</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "object",
            "description": "<p>String of the SHA of the git object this is tagging</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "tagger",
            "description": "<p>JSON object that contains the following keys: <code>name</code> - String of the name of the author of the tag, <code>email</code> - String of the email of the author of the tag, <code>date</code> - Timestamp of when this object was tagged</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/trees",
    "title": "createTree",
    "name": "createTree",
    "description": "<p>Create a Tree</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "tree",
            "description": "<p>Array of Hash objects (of path, mode, type and sha) specifying a tree structure</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base_tree",
            "description": "<p>String of the SHA1 of the tree you want to update with new data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createTree({owner, repo, tree, base_tree})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createTree({owner, repo, tree, base_tree}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createTree({owner, repo, tree, base_tree}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "deleteReference",
    "name": "deleteReference",
    "description": "<p>Delete a Reference</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.deleteReference({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.deleteReference({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.deleteReference({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/blobs/:sha",
    "title": "getBlob",
    "name": "getBlob",
    "description": "<p>Get a Blob</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getBlob({owner, repo, sha, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getBlob({owner, repo, sha, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getBlob({owner, repo, sha, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Get a Commit</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getCommit({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getCommit({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getCommit({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:sha",
    "title": "getCommitSignatureVerification",
    "name": "getCommitSignatureVerification",
    "description": "<p>Get a Commit Signature Verification. (In preview period. See README.)</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getCommitSignatureVerification({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getCommitSignatureVerification({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getCommitSignatureVerification({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "getReference",
    "name": "getReference",
    "description": "<p>Get a Reference</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getReference({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getReference({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getReference({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs",
    "title": "getReferences",
    "name": "getReferences",
    "description": "<p>Get all References</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getReferences({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getReferences({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getReferences({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:sha",
    "title": "getTag",
    "name": "getTag",
    "description": "<p>Get a Tag</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTag({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTag({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTag({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:sha",
    "title": "getTagSignatureVerification",
    "name": "getTagSignatureVerification",
    "description": "<p>Get a Tag Signature Verification. (In preview period. See README.)</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTagSignatureVerification({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTagSignatureVerification({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTagSignatureVerification({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs/tags",
    "title": "getTags",
    "name": "getTags",
    "description": "<p>Get all tag References</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTags({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTags({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTags({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/trees/:sha",
    "title": "getTree",
    "name": "getTree",
    "description": "<p>Get a Tree</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "recursive",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTree({owner, repo, sha, recursive})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTree({owner, repo, sha, recursive}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTree({owner, repo, sha, recursive}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "updateReference",
    "name": "updateReference",
    "description": "<p>Update a Reference</p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "force",
            "defaultValue": "false",
            "description": "<p>Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.updateReference({owner, repo, ref, sha, force})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.updateReference({owner, repo, ref, sha, force}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.updateReference({owner, repo, ref, sha, force}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "PUT",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "Integrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.integrations.addRepoToInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.integrations.addRepoToInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.integrations.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Integrations"
  },
  {
    "type": "POST",
    "url": "/installations/:installation_id/access_tokens",
    "title": "createInstallationToken",
    "name": "createInstallationToken",
    "description": "<p>Create a new installation token. (In preview period. See README.)</p>",
    "group": "Integrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "user_id",
            "description": "<p>The id of the user for whom the app is acting on behalf of.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.integrations.createInstallationToken({installation_id, user_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.integrations.createInstallationToken({installation_id, user_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.integrations.createInstallationToken({installation_id, user_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Integrations"
  },
  {
    "type": "GET",
    "url": "/installation/repositories",
    "title": "getInstallationRepositories",
    "name": "getInstallationRepositories",
    "description": "<p>List repositories that are accessible to the authenticated installation. (In preview period. See README.)</p>",
    "group": "Integrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "user_id",
            "description": "<p>The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.integrations.getInstallationRepositories({user_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.integrations.getInstallationRepositories({user_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.integrations.getInstallationRepositories({user_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Integrations"
  },
  {
    "type": "GET",
    "url": "/app/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List the app's installations. (In preview period. See README.)</p>",
    "group": "Integrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.integrations.getInstallations({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.integrations.getInstallations({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.integrations.getInstallations({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Integrations"
  },
  {
    "type": "DELETE",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "Integrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.integrations.removeRepoFromInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.integrations.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.integrations.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Integrations"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "addAssigneesToIssue",
    "name": "addAssigneesToIssue",
    "description": "<p>Add assignees to an issue.</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "assignees",
            "description": "<p>Logins for the users that should be added to the issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.addAssigneesToIssue({owner, repo, number, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "addLabels",
    "name": "addLabels",
    "description": "<p>Add labels to an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "labels",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.addLabels({owner, repo, number, labels})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.addLabels({owner, repo, number, labels}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.addLabels({owner, repo, number, labels}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees/:assignee",
    "title": "checkAssignee",
    "name": "checkAssignee",
    "description": "<p>Check assignee</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>Login for the user that this issue should be assigned to.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.checkAssignee({owner, repo, assignee})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.checkAssignee({owner, repo, assignee}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.checkAssignee({owner, repo, assignee}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues",
    "title": "create",
    "name": "create",
    "description": "<p>Create an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>Login for the user that this issue should be assigned to.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "milestone",
            "description": "<p>Milestone to associate this issue with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "labels",
            "description": "<p>Array of strings - Labels to associate with this issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createComment({owner, repo, number, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createComment({owner, repo, number, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createComment({owner, repo, number, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/labels",
    "title": "createLabel",
    "name": "createLabel",
    "description": "<p>Create a label</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "color",
            "description": "<p>6 character hex code, without a leading #.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createLabel({owner, repo, name, color})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createLabel({owner, repo, name, color}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createLabel({owner, repo, name, color}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/milestones",
    "title": "createMilestone",
    "name": "createMilestone",
    "description": "<p>Create a milestone</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "due_on",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createMilestone({owner, repo, title, state, description, due_on})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createMilestone({owner, repo, title, state, description, due_on}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createMilestone({owner, repo, title, state, description, due_on}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "deleteLabel",
    "name": "deleteLabel",
    "description": "<p>Delete a label</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteLabel({owner, repo, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteLabel({owner, repo, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteLabel({owner, repo, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "deleteMilestone",
    "name": "deleteMilestone",
    "description": "<p>Delete a milestone</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteMilestone({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteMilestone({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteMilestone({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "edit",
    "name": "edit",
    "description": "<p>Edit an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>Login for the user that this issue should be assigned to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>open or closed</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "milestone",
            "description": "<p>Milestone to associate this issue with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "labels",
            "description": "<p>Array of strings - Labels to associate with this issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.editComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.editComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.editComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.get({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.get({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.get({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/issues",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "assigned",
              "created",
              "mentioned",
              "subscribed"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "assigned",
            "description": "<p>Which sort of issue to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>State of the issues to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>String list of comma separated label names. Example: bug,ui,@high</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees",
    "title": "getAssignees",
    "name": "getAssignees",
    "description": "<p>List assignees</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getAssignees({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getAssignees({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getAssignees({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getComments({owner, repo, number, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getComments({owner, repo, number, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getComments({owner, repo, number, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>List comments in a repository</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events/:id",
    "title": "getEvent",
    "name": "getEvent",
    "description": "<p>Get a single event</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEvent({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEvent({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEvent({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:issue_number/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p>List events for an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "issue_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEvents({owner, repo, issue_number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEvents({owner, repo, issue_number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEvents({owner, repo, issue_number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p>List events for a repository</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEventsForRepo({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEventsForRepo({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEventsForRepo({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:issue_number/timeline",
    "title": "getEventsTimeline",
    "name": "getEventsTimeline",
    "description": "<p>List events for an issue. (In preview period. See README.)</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "issue_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/issues",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p>List all issues for a given organization for the authenticated user</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "assigned",
              "created",
              "mentioned",
              "subscribed"
            ],
            "optional": true,
            "field": "filter",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>open, closed, or all</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>String list of comma separated Label names. Example: bug,ui,@high</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues",
    "title": "getForRepo",
    "name": "getForRepo",
    "description": "<p>List issues for a repository</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "milestone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>open, closed, or all</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>String User login, <code>none</code> for Issues with no assigned User. <code>*</code> for Issues with any assigned User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "creator",
            "description": "<p>The user that created the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>String list of comma separated Label names. Example: bug,ui,@high</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mentioned",
            "description": "<p>String User login.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/user/issues",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List all issues across owned and member repositories for the authenticated user</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "assigned",
              "created",
              "mentioned",
              "subscribed"
            ],
            "optional": true,
            "field": "filter",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>open, closed, or all</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>String list of comma separated Label names. Example: bug,ui,@high</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "getIssueLabels",
    "name": "getIssueLabels",
    "description": "<p>List labels on an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getIssueLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getIssueLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getIssueLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "getLabel",
    "name": "getLabel",
    "description": "<p>Get a single label</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getLabel({owner, repo, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getLabel({owner, repo, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getLabel({owner, repo, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels",
    "title": "getLabels",
    "name": "getLabels",
    "description": "<p>List all labels for this repository</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getLabels({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getLabels({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getLabels({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "getMilestone",
    "name": "getMilestone",
    "description": "<p>Get a single milestone</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestone({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestone({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestone({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number/labels",
    "title": "getMilestoneLabels",
    "name": "getMilestoneLabels",
    "description": "<p>Get labels for every issue in a milestone</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestoneLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestoneLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestoneLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones",
    "title": "getMilestones",
    "name": "getMilestones",
    "description": "<p>List milestones for a repository</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "due_on",
              "completeness"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "due_on",
            "description": "<p>due_on, completeness, default: due_on</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "asc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "lock",
    "name": "lock",
    "description": "<p>Users with push access can lock an issue's conversation.</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.lock({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.lock({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.lock({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "removeAllLabels",
    "name": "removeAllLabels",
    "description": "<p>Remove all labels from an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeAllLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeAllLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeAllLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "removeAssigneesFromIssue",
    "name": "removeAssigneesFromIssue",
    "description": "<p>Remove assignees from an issue.</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeAssigneesFromIssue({owner, repo, number, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeAssigneesFromIssue({owner, repo, number, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeAssigneesFromIssue({owner, repo, number, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels/:name",
    "title": "removeLabel",
    "name": "removeLabel",
    "description": "<p>Remove a label from an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeLabel({owner, repo, number, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeLabel({owner, repo, number, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeLabel({owner, repo, number, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "replaceAllLabels",
    "name": "replaceAllLabels",
    "description": "<p>Replace all labels for an issue</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "labels",
            "description": "<p>Sending an empty array ([]) will remove all Labels from the Issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.replaceAllLabels({owner, repo, number, labels})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.replaceAllLabels({owner, repo, number, labels}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.replaceAllLabels({owner, repo, number, labels}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "unlock",
    "name": "unlock",
    "description": "<p>Users with push access can unlock an issue's conversation.</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.unlock({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.unlock({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.unlock({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/labels/:oldname",
    "title": "updateLabel",
    "name": "updateLabel",
    "description": "<p>Update a label</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldname",
            "description": "<p>The old name of the label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The new name of the label.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "color",
            "description": "<p>6 character hex code, without a leading #.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.updateLabel({owner, repo, oldname, name, color})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.updateLabel({owner, repo, oldname, name, color}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.updateLabel({owner, repo, oldname, name, color}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "updateMilestone",
    "name": "updateMilestone",
    "description": "<p>Update a milestone</p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "due_on",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/import",
    "title": "cancelImport",
    "name": "cancelImport",
    "description": "<p>Cancel an import. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.cancelImport({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.cancelImport({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.cancelImport({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "deleteMigrationArchive",
    "name": "deleteMigrationArchive",
    "description": "<p>Delete a migration archive. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.deleteMigrationArchive({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.deleteMigrationArchive({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.deleteMigrationArchive({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import/authors",
    "title": "getImportCommitAuthors",
    "name": "getImportCommitAuthors",
    "description": "<p>Get import commit authors. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getImportCommitAuthors({owner, repo, since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getImportCommitAuthors({owner, repo, since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getImportCommitAuthors({owner, repo, since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import",
    "title": "getImportProgress",
    "name": "getImportProgress",
    "description": "<p>Get import progress. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getImportProgress({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getImportProgress({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getImportProgress({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/:owner/:name/import/large_files",
    "title": "getLargeImportFiles",
    "name": "getLargeImportFiles",
    "description": "<p>List files larger than 100MB found during the import. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getLargeImportFiles({owner, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getLargeImportFiles({owner, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getLargeImportFiles({owner, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "getMigrationArchiveLink",
    "name": "getMigrationArchiveLink",
    "description": "<p>Get the URL to a migration archive. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrationArchiveLink({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrationArchiveLink({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrationArchiveLink({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id",
    "title": "getMigrationStatus",
    "name": "getMigrationStatus",
    "description": "<p>Get the status of a migration. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrationStatus({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrationStatus({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrationStatus({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations",
    "title": "getMigrations",
    "name": "getMigrations",
    "description": "<p>Get a list of migrations. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrations({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrations({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrations({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import/authors/:author_id",
    "title": "mapImportCommitAuthor",
    "name": "mapImportCommitAuthor",
    "description": "<p>Map a commit author. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author_id",
            "description": "<p>The commit author id.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The new Git author email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The new Git author name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/:owner/:name/import/lfs",
    "title": "setImportLfsPreference",
    "name": "setImportLfsPreference",
    "description": "<p>Set import LFS preference. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "use_lfs",
            "description": "<p>Can be one of <code>opt_in</code> (large files will be stored using Git LFS) or <code>opt_out</code> (large files will be removed during the import).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.setImportLfsPreference({owner, name, use_lfs})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.setImportLfsPreference({owner, name, use_lfs}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.setImportLfsPreference({owner, name, use_lfs}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/import",
    "title": "startImport",
    "name": "startImport",
    "description": "<p>Start an import. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vcs_url",
            "description": "<p>The URL of the originating repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "subversion",
              "git",
              "mercurial",
              "tfvc"
            ],
            "optional": true,
            "field": "vcs",
            "description": "<p>The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_username",
            "description": "<p>If authentication is required, the username to provide to vcs_url.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_password",
            "description": "<p>If authentication is required, the password to provide to vcs_url.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tfvc_project",
            "description": "<p>For a tfvc import, the name of the project that is being imported.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/migrations",
    "title": "startMigration",
    "name": "startMigration",
    "description": "<p>Start a migration. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "repositories",
            "description": "<p>A list of arrays indicating which repositories should be migrated.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "lock_repositories",
            "defaultValue": "false",
            "description": "<p>Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "exclude_attachments",
            "defaultValue": "false",
            "description": "<p>Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/repos/:repo_name/lock",
    "title": "unlockRepoLockedForMigration",
    "name": "unlockRepoLockedForMigration",
    "description": "<p>Unlock a repository that was locked for migration. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import",
    "title": "updateImport",
    "name": "updateImport",
    "description": "<p>Update existing import. (In preview period. See README.)</p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_username",
            "description": "<p>The username to provide to the originating repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_password",
            "description": "<p>The password to provide to the originating repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct/:key",
    "title": "getCodeOfConduct",
    "name": "getCodeOfConduct",
    "description": "<p>Get an code of conduct. (In preview period. See README.)</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>Ex: contributor_covenant</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getCodeOfConduct({key})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getCodeOfConduct({key}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getCodeOfConduct({key}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct",
    "title": "getCodesOfConduct",
    "name": "getCodesOfConduct",
    "description": "<p>List all codes of conduct. (In preview period. See README.)</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getCodesOfConduct({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getCodesOfConduct({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getCodesOfConduct({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/emojis",
    "title": "getEmojis",
    "name": "getEmojis",
    "description": "<p>Lists all the emojis available to use on GitHub.</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getEmojis({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getEmojis({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getEmojis({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates/:name",
    "title": "getGitignoreTemplate",
    "name": "getGitignoreTemplate",
    "description": "<p>Get a single gitignore template</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the .gitignore template to get e.g. 'C'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getGitignoreTemplate({name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getGitignoreTemplate({name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getGitignoreTemplate({name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates",
    "title": "getGitignoreTemplates",
    "name": "getGitignoreTemplates",
    "description": "<p>Lists available gitignore templates</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getGitignoreTemplates({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getGitignoreTemplates({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getGitignoreTemplates({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/licenses/:license",
    "title": "getLicense",
    "name": "getLicense",
    "description": "<p>Get an individual license. (In preview period. See README.)</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "license",
            "description": "<p>Ex: /licenses/mit</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getLicense({license})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getLicense({license}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getLicense({license}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/licenses",
    "title": "getLicenses",
    "name": "getLicenses",
    "description": "<p>List all licenses. (In preview period. See README.)</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getLicenses({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getLicenses({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getLicenses({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/meta",
    "title": "getMeta",
    "name": "getMeta",
    "description": "<p>This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getMeta({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getMeta({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getMeta({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/rate_limit",
    "title": "getRateLimit",
    "name": "getRateLimit",
    "description": "<p>Get your current rate limit status</p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRateLimit({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRateLimit({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRateLimit({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/community/code_of_conduct",
    "title": "getRepoCodeOfConduct",
    "name": "getRepoCodeOfConduct",
    "description": "<p>Get the contents of a repository's code of conduct. (In preview period. See README.)</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRepoCodeOfConduct({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRepoCodeOfConduct({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRepoCodeOfConduct({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/license",
    "title": "getRepoLicense",
    "name": "getRepoLicense",
    "description": "<p>Get the contents of a repository's license. (In preview period. See README.)</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRepoLicense({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRepoLicense({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRepoLicense({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "POST",
    "url": "/markdown",
    "title": "renderMarkdown",
    "name": "renderMarkdown",
    "description": "<p>Render an arbitrary Markdown document</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The Markdown text to render</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "markdown",
              "gfm"
            ],
            "optional": true,
            "field": "mode",
            "defaultValue": "markdown",
            "description": "<p>The rendering mode, <code>markdown</code> to render a document as plain Markdown, just like README files are rendered. <code>gfm</code> to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "context",
            "description": "<p>The repository context. Only taken into account when rendering as <code>gfm</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.renderMarkdown({text, mode, context})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.renderMarkdown({text, mode, context}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.renderMarkdown({text, mode, context}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "POST",
    "url": "/markdown/raw",
    "title": "renderMarkdownRaw",
    "name": "renderMarkdownRaw",
    "description": "<p>Render a Markdown document in raw mode</p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>Raw data to send as the body of the request</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.renderMarkdownRaw({data})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.renderMarkdownRaw({data}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.renderMarkdownRaw({data}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/memberships/:username",
    "title": "addOrgMembership",
    "name": "addOrgMembership",
    "description": "<p>Add or update organization membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "admin",
              "member"
            ],
            "optional": false,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>The role to give the user in the organization.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addOrgMembership({org, username, role})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addOrgMembership({org, username, role}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addOrgMembership({org, username, role}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/memberships/:username",
    "title": "addTeamMembership",
    "name": "addTeamMembership",
    "description": "<p>Add team membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "member",
              "maintainer"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>The role that this user should have in the team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addTeamMembership({id, username, role})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addTeamMembership({id, username, role}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addTeamMembership({id, username, role}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/repos/:org/:repo",
    "title": "addTeamRepo",
    "name": "addTeamRepo",
    "description": "<p>Add team repository</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "description": "<p><code>pull</code> - team members can pull, but not push or administer this repository, <code>push</code> - team members can pull and push, but not administer this repository, <code>admin</code> - team members can pull, push and administer this repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addTeamRepo({id, org, repo, permission})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addTeamRepo({id, org, repo, permission}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addTeamRepo({id, org, repo, permission}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p>Block a user. (In preview period. See README.)</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.blockUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.blockUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.blockUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>Check whether you've blocked a user. (In preview period. See README.)</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkBlockedUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkBlockedUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkBlockedUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members/:username",
    "title": "checkMembership",
    "name": "checkMembership",
    "description": "<p>Check membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members/:username",
    "title": "checkPublicMembership",
    "name": "checkPublicMembership",
    "description": "<p>Check public membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkPublicMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkPublicMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkPublicMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "checkTeamRepo",
    "name": "checkTeamRepo",
    "description": "<p>Check if a team manages a repository</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkTeamRepo({id, owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkTeamRepo({id, owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkTeamRepo({id, owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/public_members/:username",
    "title": "concealMembership",
    "name": "concealMembership",
    "description": "<p>Conceal a user's membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.concealMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.concealMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.concealMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "convertMemberToOutsideCollaborator",
    "name": "convertMemberToOutsideCollaborator",
    "description": "<p>Convert member to outside collaborator.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.convertMemberToOutsideCollaborator({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.convertMemberToOutsideCollaborator({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.convertMemberToOutsideCollaborator({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Create a hook</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Must be passed as &quot;web&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[\"push\"",
            "description": "<p>Determines what events the hook is triggered for. Default: [&quot;push&quot;].</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Determines whether the hook is actually triggered on pushes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.createHook({org, name, config, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.createHook({org, name, config, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.createHook({org, name, config, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/teams",
    "title": "createTeam",
    "name": "createTeam",
    "description": "<p>Create team</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "maintainers",
            "description": "<p>The logins of organization members to add as maintainers of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "repo_names",
            "description": "<p>The full name (e.g., &quot;organization-name/repository-name&quot;) of repositories to add the team to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "secret",
              "closed"
            ],
            "optional": true,
            "field": "privacy",
            "defaultValue": "secret",
            "description": "<p>The level of privacy this team should have.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p>Delete a hook</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id",
    "title": "deleteTeam",
    "name": "deleteTeam",
    "description": "<p>Delete team</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteTeam({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteTeam({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteTeam({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "deleteTeamRepo",
    "name": "deleteTeamRepo",
    "description": "<p>Remove team repository</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteTeamRepo({id, owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteTeamRepo({id, owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteTeamRepo({id, owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p>Edit a hook</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[\"push\"",
            "description": "<p>Determines what events the hook is triggered for. Default: [&quot;push&quot;].</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Determines whether the hook is actually triggered on pushes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.editHook({org, id, config, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.editHook({org, id, config, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.editHook({org, id, config, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/teams/:id",
    "title": "editTeam",
    "name": "editTeam",
    "description": "<p>Edit team</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "secret",
              "closed"
            ],
            "optional": true,
            "field": "privacy",
            "defaultValue": "secret",
            "description": "<p>The level of privacy this team should have.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.editTeam({id, name, description, privacy, parent_team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.editTeam({id, name, description, privacy, parent_team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.editTeam({id, name, description, privacy, parent_team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org",
    "title": "get",
    "name": "get",
    "description": "<p>Get an organization</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.get({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.get({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.get({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/organizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List all organizations</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last Organization that you've seen.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getAll({since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getAll({since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getAll({since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List blocked users. (In preview period. See README.)</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getBlockedUsers({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getBlockedUsers({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getBlockedUsers({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/teams",
    "title": "getChildTeams",
    "name": "getChildTeams",
    "description": "<p>List child teams</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getChildTeams({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getChildTeams({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getChildTeams({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/users/:username/orgs",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List public organization memberships for the specified user.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p>Get single hook</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p>List hooks</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getHooks({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getHooks({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getHooks({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members",
    "title": "getMembers",
    "name": "getMembers",
    "description": "<p>Members list</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "2fa_disabled"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "all",
            "description": "<p>Filter members returned in the list.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "admin",
              "member"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "all",
            "description": "<p>Filter members returned by their role.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getMembers({org, filter, role, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getMembers({org, filter, role, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getMembers({org, filter, role, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/memberships/:username",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p>Get organization membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getOrgMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getOrgMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getOrgMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/outside_collaborators",
    "title": "getOutsideCollaborators",
    "name": "getOutsideCollaborators",
    "description": "<p>List all users who are outside collaborators of an organization.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "2fa_disabled"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "all",
            "description": "<p>Filter the list of outside collaborators.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getOutsideCollaborators({org, filter, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getOutsideCollaborators({org, filter, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getOutsideCollaborators({org, filter, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/invitations",
    "title": "getPendingOrgInvites",
    "name": "getPendingOrgInvites",
    "description": "<p>List pending organization invites.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPendingOrgInvites({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPendingOrgInvites({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPendingOrgInvites({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/invitations",
    "title": "getPendingTeamInvites",
    "name": "getPendingTeamInvites",
    "description": "<p>List pending team invitations.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPendingTeamInvites({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPendingTeamInvites({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPendingTeamInvites({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members",
    "title": "getPublicMembers",
    "name": "getPublicMembers",
    "description": "<p>Public members list</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPublicMembers({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPublicMembers({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPublicMembers({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id",
    "title": "getTeam",
    "name": "getTeam",
    "description": "<p>Get team</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeam({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeam({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeam({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/members",
    "title": "getTeamMembers",
    "name": "getTeamMembers",
    "description": "<p>List team members</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "member",
              "maintainer",
              "all"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "all",
            "description": "<p>Filters members returned by their role in the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamMembers({id, role, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamMembers({id, role, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamMembers({id, role, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/memberships/:username",
    "title": "getTeamMembership",
    "name": "getTeamMembership",
    "description": "<p>Get team membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamMembership({id, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamMembership({id, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamMembership({id, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos",
    "title": "getTeamRepos",
    "name": "getTeamRepos",
    "description": "<p>Get team repos</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamRepos({id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamRepos({id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamRepos({id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>List teams</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeams({org, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeams({org, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeams({org, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>Ping a hook</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.pingHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.pingHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.pingHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/public_members/:username",
    "title": "publicizeMembership",
    "name": "publicizeMembership",
    "description": "<p>Publicize a user's membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.publicizeMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.publicizeMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.publicizeMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/members/:username",
    "title": "removeMember",
    "name": "removeMember",
    "description": "<p>Remove a member</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeMember({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeMember({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeMember({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/memberships/:username",
    "title": "removeOrgMembership",
    "name": "removeOrgMembership",
    "description": "<p>Remove organization membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeOrgMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeOrgMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeOrgMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "removeOutsideCollaborator",
    "name": "removeOutsideCollaborator",
    "description": "<p>Remove outside collaborator.</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeOutsideCollaborator({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeOutsideCollaborator({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeOutsideCollaborator({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/memberships/:username",
    "title": "removeTeamMembership",
    "name": "removeTeamMembership",
    "description": "<p>Remove team membership</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeTeamMembership({id, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeTeamMembership({id, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeTeamMembership({id, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p>Unblock a user. (In preview period. See README.)</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.unblockUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.unblockUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.unblockUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org",
    "title": "update",
    "name": "update",
    "description": "<p>Edit an organization</p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "billing_email",
            "description": "<p>Billing email address. This address is not publicized.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>The company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The publicly visible email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>The location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The shorthand name of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "read",
              "write",
              "admin",
              "none"
            ],
            "optional": true,
            "field": "default_repository_permission",
            "defaultValue": "read",
            "description": "<p>Default permission level members have for organization repositories.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "members_can_create_repositories",
            "defaultValue": "true",
            "description": "<p>Toggles ability of non-admin organization members to create repositories.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/projects",
    "title": "createOrgProject",
    "name": "createOrgProject",
    "description": "<p>Create an organization project. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createOrgProject({org, name, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createOrgProject({org, name, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createOrgProject({org, name, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:column_id/cards",
    "title": "createProjectCard",
    "name": "createProjectCard",
    "description": "<p>Create a project card. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>The note of the card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content_id",
            "description": "<p>The id of the Issue or Pull Request to associate with this card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content_type",
            "description": "<p>The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createProjectCard({column_id, note, content_id, content_type})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createProjectCard({column_id, note, content_id, content_type}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createProjectCard({column_id, note, content_id, content_type}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/:project_id/columns",
    "title": "createProjectColumn",
    "name": "createProjectColumn",
    "description": "<p>Create a project column. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createProjectColumn({project_id, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createProjectColumn({project_id, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createProjectColumn({project_id, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/projects",
    "title": "createRepoProject",
    "name": "createRepoProject",
    "description": "<p>Create a repository project. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createRepoProject({owner, repo, name, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createRepoProject({owner, repo, name, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createRepoProject({owner, repo, name, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/:id",
    "title": "deleteProject",
    "name": "deleteProject",
    "description": "<p>Delete a project. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProject({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProject({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProject({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/cards/:id",
    "title": "deleteProjectCard",
    "name": "deleteProjectCard",
    "description": "<p>Delete a project card. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProjectCard({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProjectCard({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProjectCard({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/:id",
    "title": "deleteProjectColumn",
    "name": "deleteProjectColumn",
    "description": "<p>Delete a project column. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProjectColumn({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProjectColumn({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProjectColumn({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/projects",
    "title": "getOrgProjects",
    "name": "getOrgProjects",
    "description": "<p>List organization projects. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getOrgProjects({org, state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getOrgProjects({org, state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getOrgProjects({org, state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/:id",
    "title": "getProject",
    "name": "getProject",
    "description": "<p>Get a project. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProject({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProject({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProject({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/cards/:id",
    "title": "getProjectCard",
    "name": "getProjectCard",
    "description": "<p>Get project card. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectCard({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectCard({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectCard({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:column_id/cards",
    "title": "getProjectCards",
    "name": "getProjectCards",
    "description": "<p>List project cards. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectCards({column_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectCards({column_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectCards({column_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:id",
    "title": "getProjectColumn",
    "name": "getProjectColumn",
    "description": "<p>Get a project column. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectColumn({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectColumn({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectColumn({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/:project_id/columns",
    "title": "getProjectColumns",
    "name": "getProjectColumns",
    "description": "<p>List project columns. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectColumns({project_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectColumns({project_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectColumns({project_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/projects",
    "title": "getRepoProjects",
    "name": "getRepoProjects",
    "description": "<p>List repository projects. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getRepoProjects({owner, repo, state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getRepoProjects({owner, repo, state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getRepoProjects({owner, repo, state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/cards/:id/moves",
    "title": "moveProjectCard",
    "name": "moveProjectCard",
    "description": "<p>Move a project card. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Can be one of top, bottom, or after:<card-id>, where <card-id> is the id value of a card in the same project.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "column_id",
            "description": "<p>The id value of a column in the same project.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.moveProjectCard({id, position, column_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.moveProjectCard({id, position, column_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.moveProjectCard({id, position, column_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:id/moves",
    "title": "moveProjectColumn",
    "name": "moveProjectColumn",
    "description": "<p>Move a project column. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.moveProjectColumn({id, position})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.moveProjectColumn({id, position}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.moveProjectColumn({id, position}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/:id",
    "title": "updateProject",
    "name": "updateProject",
    "description": "<p>Update a project. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProject({id, name, body, state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProject({id, name, body, state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProject({id, name, body, state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/cards/:id",
    "title": "updateProjectCard",
    "name": "updateProjectCard",
    "description": "<p>Update a project card. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>The note of the card.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProjectCard({id, note})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProjectCard({id, note}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProjectCard({id, note}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/:id",
    "title": "updateProjectColumn",
    "name": "updateProjectColumn",
    "description": "<p>Update a project column. (In preview period. See README.)</p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProjectColumn({id, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProjectColumn({id, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProjectColumn({id, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "checkMerged",
    "name": "checkMerged",
    "description": "<p>Get if a pull request has been merged</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.checkMerged({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.checkMerged({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.checkMerged({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "create",
    "name": "create",
    "description": "<p>Create a pull request</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The branch (or git ref) where your changes are implemented.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "maintainer_can_modify",
            "description": "<p>Indicates whether maintainers can modify the pull request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.create({owner, repo, head, base, title, body, maintainer_can_modify})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.create({owner, repo, head, base, title, body, maintainer_can_modify}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.create({owner, repo, head, base, title, body, maintainer_can_modify}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commit_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "position",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createCommentReply",
    "name": "createCommentReply",
    "description": "<p>Reply to existing pull request comment</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "in_reply_to",
            "description": "<p>The comment id to reply to.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "createFromIssue",
    "name": "createFromIssue",
    "description": "<p>Create a pull request from an existing issue</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "issue",
            "description": "<p>The issue number in this repository to turn into a Pull Request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The branch (or git ref) where your changes are implemented.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createFromIssue({owner, repo, issue, head, base})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createFromIssue({owner, repo, issue, head, base}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createFromIssue({owner, repo, issue, head, base}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "createReview",
    "name": "createReview",
    "description": "<p>Create a pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_id",
            "description": "<p>Sha of the commit to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body text of the pull request review.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "APPROVE",
              "REQUEST_CHANGES",
              "COMMENT",
              "PENDING"
            ],
            "optional": true,
            "field": "event",
            "defaultValue": "PENDING",
            "description": "<p>The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "comments",
            "description": "<p>An array of draft review comment objects. Draft review comments must include a <code>path</code>, <code>position</code>, and <code>body</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "createReviewRequest",
    "name": "createReviewRequest",
    "description": "<p>Create a review request. (In preview period. See README.)</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user logins that will be requested.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team slugs that will be requested.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deleteComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deleteComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deleteComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "deletePendingReview",
    "name": "deletePendingReview",
    "description": "<p>Delete a pending pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deletePendingReview({owner, repo, number, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deletePendingReview({owner, repo, number, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deletePendingReview({owner, repo, number, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "deleteReviewRequest",
    "name": "deleteReviewRequest",
    "description": "<p>Delete a review request. (In preview period. See README.)</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user logins that will be requested.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team slugs that will be requested.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals",
    "title": "dismissReview",
    "name": "dismissReview",
    "description": "<p>Dismiss a pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The message for the pull request review dismissal.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.editComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.editComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.editComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single pull request</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.get({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.get({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.get({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List pull requests</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "head",
            "description": "<p>Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base",
            "description": "<p>Filter pulls by base branch name. Example: gh-pages.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "popularity",
              "long-running"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Possible values are: <code>created</code>, <code>updated</code>, <code>popularity</code>, <code>long-running</code>, Default: <code>created</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on a pull request</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getComments({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getComments({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getComments({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>List comments in a repository</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Possible values are: <code>created</code>, <code>updated</code>, Default: <code>created</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List commits on a pull request</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getCommits({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getCommits({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getCommits({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/files",
    "title": "getFiles",
    "name": "getFiles",
    "description": "<p>List pull requests files</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getFiles({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getFiles({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getFiles({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "getReview",
    "name": "getReview",
    "description": "<p>Get a single pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReview({owner, repo, number, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReview({owner, repo, number, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReview({owner, repo, number, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/comments",
    "title": "getReviewComments",
    "name": "getReviewComments",
    "description": "<p>Get comments for a pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "getReviewRequests",
    "name": "getReviewRequests",
    "description": "<p>List review requests. (In preview period. See README.)</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "getReviews",
    "name": "getReviews",
    "description": "<p>List reviews on a pull request.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviews({owner, repo, number, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviews({owner, repo, number, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviews({owner, repo, number, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "merge",
    "name": "merge",
    "description": "<p>Merge a pull request (Merge Button)</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_title",
            "description": "<p>Title for the automatic commit message. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_message",
            "description": "<p>Extra detail to append to automatic commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "description": "<p>SHA that pull request head must match to allow merge</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "merge",
              "squash",
              "rebase"
            ],
            "optional": true,
            "field": "merge_method",
            "defaultValue": "merge",
            "description": "<p>Merge method to use. Possible values are <code>merge</code>, <code>squash</code>, or <code>rebase</code>. (In preview period. See README.)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/events",
    "title": "submitReview",
    "name": "submitReview",
    "description": "<p>Submit a pull request review.</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body text of the pull request review.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "APPROVE",
              "REQUEST_CHANGES",
              "COMMENT",
              "PENDING"
            ],
            "optional": true,
            "field": "event",
            "defaultValue": "PENDING",
            "description": "<p>The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.submitReview({owner, repo, number, id, body, event})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.submitReview({owner, repo, number, id, body, event}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.submitReview({owner, repo, number, id, body, event}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "update",
    "name": "update",
    "description": "<p>Update a pull request</p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>open or closed</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base",
            "description": "<p>The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "maintainer_can_modify",
            "defaultValue": "true",
            "description": "<p>Indicates whether maintainers can modify the pull request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "createForCommitComment",
    "name": "createForCommitComment",
    "description": "<p>Create reaction for a commit comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The reaction type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForCommitComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForCommitComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForCommitComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "createForIssue",
    "name": "createForIssue",
    "description": "<p>Create reaction for an issue. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The reaction type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForIssue({owner, repo, number, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForIssue({owner, repo, number, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForIssue({owner, repo, number, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "createForIssueComment",
    "name": "createForIssueComment",
    "description": "<p>Create reaction for an issue comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The reaction type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForIssueComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForIssueComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForIssueComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "createForPullRequestReviewComment",
    "name": "createForPullRequestReviewComment",
    "description": "<p>Create reaction for a pull request review comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The reaction type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "DELETE",
    "url": "/reactions/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a reaction. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "getForCommitComment",
    "name": "getForCommitComment",
    "description": "<p>List reactions for a commit comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Indicates which type of reaction to return.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForCommitComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForCommitComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForCommitComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "getForIssue",
    "name": "getForIssue",
    "description": "<p>List reactions for an issue. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Indicates which type of reaction to return.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForIssue({owner, repo, number, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForIssue({owner, repo, number, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForIssue({owner, repo, number, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "getForIssueComment",
    "name": "getForIssueComment",
    "description": "<p>List reactions for an issue comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Indicates which type of reaction to return.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForIssueComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForIssueComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForIssueComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "getForPullRequestReviewComment",
    "name": "getForPullRequestReviewComment",
    "description": "<p>List reactions for a pull request review comment. (In preview period. See README.)</p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Indicates which type of reaction to return.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "addCollaborator",
    "name": "addCollaborator",
    "description": "<p>Add user as a collaborator</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "defaultValue": "push",
            "description": "<p><code>pull</code> - can pull, but not push to or administer this repository, <code>push</code> - can pull and push, but not administer this repository, <code>admin</code> - can pull, push and administer this repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addCollaborator({owner, repo, username, permission})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addCollaborator({owner, repo, username, permission}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addCollaborator({owner, repo, username, permission}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/keys",
    "title": "addDeployKey",
    "name": "addDeployKey",
    "description": "<p>Add a new deploy key.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "read_only",
            "description": "<p>If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addDeployKey({owner, repo, title, key, read_only})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addDeployKey({owner, repo, title, key, read_only}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addDeployKey({owner, repo, title, key, read_only}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "addProtectedBranchAdminEnforcement",
    "name": "addProtectedBranchAdminEnforcement",
    "description": "<p>Add admin enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "addProtectedBranchRequiredStatusChecksContexts",
    "name": "addProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Add required status checks contexts of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "addProtectedBranchTeamRestrictions",
    "name": "addProtectedBranchTeamRestrictions",
    "description": "<p>Add team restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "addProtectedBranchUserRestrictions",
    "name": "addProtectedBranchUserRestrictions",
    "description": "<p>Add user restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "checkCollaborator",
    "name": "checkCollaborator",
    "description": "<p>Check if user is a collaborator.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.checkCollaborator({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.checkCollaborator({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.checkCollaborator({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/compare/:base...:head",
    "title": "compareCommits",
    "name": "compareCommits",
    "description": "<p>Compare two commits.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The branch (or git ref) where your changes are implemented.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.compareCommits({owner, repo, base, head})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.compareCommits({owner, repo, base, head}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.compareCommits({owner, repo, base, head}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/user/repos",
    "title": "create",
    "name": "create",
    "description": "<p>Create a new repository for the authenticated user.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>True to enable issues for this repository, false to disable them. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>True to enable projects for this repository, false to disable them. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>True to enable the wiki for this repository, false to disable it. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_init",
            "defaultValue": "false",
            "description": "<p>True to create an initial commit with empty README. Default is false</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gitignore_template",
            "description": "<p>Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "license_template",
            "description": "<p>Desired LICENSE template to apply. Use the name of the template without the extension. For example, &quot;mit&quot; or &quot;mozilla&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "team_id",
            "description": "<p>The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/commits/:sha/comments",
    "title": "createCommitComment",
    "name": "createCommitComment",
    "description": "<p>Create a commit comment.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "path",
            "description": "<p>Relative path of the file to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "position",
            "description": "<p>Line index in the diff to comment on.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createCommitComment({owner, repo, sha, body, path, position})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createCommitComment({owner, repo, sha, body, path, position}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createCommitComment({owner, repo, sha, body, path, position}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments",
    "title": "createDeployment",
    "name": "createDeployment",
    "description": "<p>Create a deployment. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>The ref to deploy. This can be a branch, tag, or sha.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "task",
            "defaultValue": "deploy",
            "description": "<p>The named task to execute. e.g. deploy or deploy:migrations. Default: deploy</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_merge",
            "defaultValue": "true",
            "description": "<p>Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "production_environment",
            "description": "<p>Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is <code>production</code> and false otherwise. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "payload",
            "description": "<p>Optional JSON payload with extra information about the deployment. Default: &quot;&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment",
            "defaultValue": "none",
            "description": "<p>The name of the environment that was deployed to. e.g. staging or production. Default: none.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Optional short description. Default: &quot;&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "transient_environment",
            "defaultValue": "false",
            "description": "<p>Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "required_contexts",
            "description": "<p>Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "createDeploymentStatus",
    "name": "createDeploymentStatus",
    "description": "<p>Create a deployment status. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>The state of the status. Can be one of pending, success, error, or failure.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_url",
            "description": "<p>The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: &quot;&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "log_url",
            "description": "<p>Functionally equivalent to target_url. Default: &quot;&quot;. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the status. Default: &quot;&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment_url",
            "description": "<p>URL for accessing the deployment environment. Default: &quot;&quot;. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_inactive",
            "defaultValue": "true",
            "description": "<p>When true the new <code>inactive</code> status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "createFile",
    "name": "createFile",
    "description": "<p>Create a new file in the given repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The new file content, Base64 encoded.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "description": "<p>The branch name. If not provided, uses the repository’s default branch (usually master).</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "committer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "author",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/repos",
    "title": "createForOrg",
    "name": "createForOrg",
    "description": "<p>Create a new repository for an organization.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>True to enable issues for this repository, false to disable them. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>True to enable projects for this repository, false to disable them. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "team_id",
            "description": "<p>The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_init",
            "defaultValue": "false",
            "description": "<p>True to create an initial commit with empty README. Default is false</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gitignore_template",
            "description": "<p>Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "license_template",
            "description": "<p>Desired LICENSE template to apply. Use the name of the template without the extension. For example, &quot;mit&quot; or &quot;mozilla&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>True to enable the wiki for this repository, false to disable it. Default is true.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Create a hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "config",
            "description": "<p>A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as <code>1</code> for true, and <code>0</code> for false. Any JSON true/false values will be converted automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[\"push\"",
            "description": "<p>Determines what events the hook is triggered for. Default: <code>['push']</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Determines whether the hook is actually triggered on pushes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createHook({owner, repo, name, config, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createHook({owner, repo, name, config, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createHook({owner, repo, name, config, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/releases",
    "title": "createRelease",
    "name": "createRelease",
    "description": "<p>Create a release.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_name",
            "description": "<p>String of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_commitish",
            "description": "<p>Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "draft",
            "defaultValue": "false",
            "description": "<p>true to create a draft (unpublished) release, false to create a published one. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "prerelease",
            "defaultValue": "false",
            "description": "<p>true to identify the release as a prerelease. false to identify the release as a full release. Default: false</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/statuses/:sha",
    "title": "createStatus",
    "name": "createStatus",
    "description": "<p>Create a status.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pending",
              "success",
              "error",
              "failure"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>State of the status - can be one of pending, success, error, or failure.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_url",
            "description": "<p>Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Short description of the status.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "context",
            "description": "<p>A string label to differentiate this status from the status of other systems.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.delete({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.delete({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.delete({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "deleteAsset",
    "name": "deleteAsset",
    "description": "<p>Delete a release asset.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteAsset({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteAsset({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteAsset({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "deleteCommitComment",
    "name": "deleteCommitComment",
    "description": "<p>Delete a commit comment.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteCommitComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteCommitComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteCommitComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "deleteDeployKey",
    "name": "deleteDeployKey",
    "description": "<p>Remove a deploy key.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteDeployKey({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteDeployKey({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteDeployKey({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "deleteDownload",
    "name": "deleteDownload",
    "description": "<p>Delete a download.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteDownload({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteDownload({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteDownload({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "deleteFile",
    "name": "deleteFile",
    "description": "<p>Delete a file.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The blob SHA of the file being removed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "description": "<p>The branch name. If not provided, uses the repository’s default branch (usually master).</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "committer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "author",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p>Deleate a hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "deleteInvite",
    "name": "deleteInvite",
    "description": "<p>Delete a repository invitation.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteInvite({owner, repo, invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteInvite({owner, repo, invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteInvite({owner, repo, invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "deleteRelease",
    "name": "deleteRelease",
    "description": "<p>Delete a release</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteRelease({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteRelease({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteRelease({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo",
    "title": "edit",
    "name": "edit",
    "description": "<p>Update a repo.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>True to enable projects for this repository, false to disable them. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>True to enable the wiki for this repository, false to disable it. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "default_branch",
            "description": "<p>Updates the default branch for this repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>True to enable issues for this repository, false to disable them. Default is true.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "editAsset",
    "name": "editAsset",
    "description": "<p>Edit a release asset.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>An alternate short description of the asset. Used in place of the filename.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editAsset({owner, repo, id, name, label})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editAsset({owner, repo, id, name, label}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editAsset({owner, repo, id, name, label}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p>Edit a hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "config",
            "description": "<p>A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as <code>1</code> for true, and <code>0</code> for false. Any JSON true/false values will be converted automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[\"push\"",
            "description": "<p>Determines what events the hook is triggered for. This replaces the entire array of events. Default: <code>['push']</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "add_events",
            "description": "<p>Determines a list of events to be added to the list of events that the Hook triggers for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "remove_events",
            "description": "<p>Determines a list of events to be removed from the list of events that the Hook triggers for.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Determines whether the hook is actually triggered on pushes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "editRelease",
    "name": "editRelease",
    "description": "<p>Edit a release.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_name",
            "description": "<p>String of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_commitish",
            "description": "<p>Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "draft",
            "defaultValue": "false",
            "description": "<p>true to create a draft (unpublished) release, false to create a published one. Default: false</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "prerelease",
            "defaultValue": "false",
            "description": "<p>true to identify the release as a prerelease. false to identify the release as a full release. Default: false</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p>Create a fork.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "organization",
            "description": "<p>Optional parameter to specify the organization name if forking into an organization.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.fork({owner, repo, organization})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.fork({owner, repo, organization}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.fork({owner, repo, organization}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo",
    "title": "get",
    "name": "get",
    "description": "<p>Get a repo for a user.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.get({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.get({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.get({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/user/repos",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List your repositories</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "public",
              "private"
            ],
            "optional": true,
            "field": "visibility",
            "defaultValue": "all",
            "description": "<p>Can be one of <code>all</code>, <code>public</code>, or <code>private</code>. Default: <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "affiliation",
            "defaultValue": "owner,collaborator,organization_member",
            "description": "<p>Comma-separated list of values. Can include: <code>owner</code>, <code>collaborator</code>, <code>organization_member</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "owner",
              "public",
              "private",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "all",
            "description": "<p>Possible values: <code>all</code>, <code>owner</code>, <code>public</code>, <code>private</code>, <code>member</code>. Default: <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "pushed",
              "full_name"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "full_name",
            "description": "<p>Possible values: <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments",
    "title": "getAllCommitComments",
    "name": "getAllCommitComments",
    "description": "<p>List commit comments for a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAllCommitComments({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAllCommitComments({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAllCommitComments({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/:archive_format/:ref",
    "title": "getArchiveLink",
    "name": "getArchiveLink",
    "description": "<p>Get archive link.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "tarball",
              "zipball"
            ],
            "optional": false,
            "field": "archive_format",
            "defaultValue": "tarball",
            "description": "<p>Either tarball or zipball, Deafult: tarball.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "description": "<p>A valid Git reference. Default: the repository’s default branch (usually master).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getArchiveLink({owner, repo, archive_format, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getArchiveLink({owner, repo, archive_format, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getArchiveLink({owner, repo, archive_format, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "getAsset",
    "name": "getAsset",
    "description": "<p>Get a single release asset.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAsset({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAsset({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAsset({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id/assets",
    "title": "getAssets",
    "name": "getAssets",
    "description": "<p>List assets for a release.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAssets({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAssets({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAssets({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch",
    "title": "getBranch",
    "name": "getBranch",
    "description": "<p>Get branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranch({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranch({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranch({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "getBranchProtection",
    "name": "getBranchProtection",
    "description": "<p>Get branch protection.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranchProtection({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranchProtection({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranchProtection({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches",
    "title": "getBranches",
    "name": "getBranches",
    "description": "<p>List branches.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "protected",
            "description": "<p>Set to true to only return protected branches</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranches({owner, repo, protected, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranches({owner, repo, protected, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranches({owner, repo, protected, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repositories/:id",
    "title": "getById",
    "name": "getById",
    "description": "<p>Get a single repo by id.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Numerical ID of the repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getById({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getById({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getById({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/clones",
    "title": "getClones",
    "name": "getClones",
    "description": "<p>Get the total number of clones and breakdown per day or week for the last 14 days.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getClones({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getClones({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getClones({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators",
    "title": "getCollaborators",
    "name": "getCollaborators",
    "description": "<p>List collaborators</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "outside",
              "all",
              "direct"
            ],
            "optional": true,
            "field": "affiliation",
            "defaultValue": "all",
            "description": "<p>Filter collaborators returned by their affiliation.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/status",
    "title": "getCombinedStatusForRef",
    "name": "getCombinedStatusForRef",
    "description": "<p>Get the combined status for a specific ref.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Get a single commit.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommit({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommit({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommit({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "getCommitComment",
    "name": "getCommitComment",
    "description": "<p>Get a single commit comment.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommitComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommitComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommitComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/comments",
    "title": "getCommitComments",
    "name": "getCommitComments",
    "description": "<p>List comments for a single commit.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommitComments({owner, repo, ref, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommitComments({owner, repo, ref, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommitComments({owner, repo, ref, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List commits on a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "description": "<p>Sha or branch to start listing commits from.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "path",
            "description": "<p>Only commits containing this file path will be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "author",
            "description": "<p>GitHub login or email address by which to filter by commit author.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "since",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "until",
            "description": "<p>Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:name/community/profile",
    "title": "getCommunityProfileMetrics",
    "name": "getCommunityProfileMetrics",
    "description": "<p>Retrieve community profile metrics.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommunityProfileMetrics({owner, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommunityProfileMetrics({owner, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommunityProfileMetrics({owner, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "getContent",
    "name": "getContent",
    "description": "<p>Get the contents of a file or directory in a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "description": "<p>The String name of the Commit/Branch/Tag. Defaults to master.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getContent({owner, repo, path, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getContent({owner, repo, path, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getContent({owner, repo, path, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contributors",
    "title": "getContributors",
    "name": "getContributors",
    "description": "<p>Get contributors for the specified repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "anon",
            "description": "<p>Set to 1 or true to include anonymous contributors in results.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getContributors({owner, repo, anon, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getContributors({owner, repo, anon, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getContributors({owner, repo, anon, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "getDeployKey",
    "name": "getDeployKey",
    "description": "<p>Get a deploy key.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployKey({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployKey({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployKey({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys",
    "title": "getDeployKeys",
    "name": "getDeployKeys",
    "description": "<p>List deploy keys.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployKeys({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployKeys({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployKeys({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:deployment_id",
    "title": "getDeployment",
    "name": "getDeployment",
    "description": "<p>Get a single Deployment. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deployment_id",
            "description": "<p>The deployment id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployment({owner, repo, deployment_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployment({owner, repo, deployment_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployment({owner, repo, deployment_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses/:status_id",
    "title": "getDeploymentStatus",
    "name": "getDeploymentStatus",
    "description": "<p>List deployment statuses. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The Deployment ID to list the statuses from.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status_id",
            "description": "<p>The Deployment Status ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeploymentStatus({owner, repo, id, status_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeploymentStatus({owner, repo, id, status_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeploymentStatus({owner, repo, id, status_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "getDeploymentStatuses",
    "name": "getDeploymentStatuses",
    "description": "<p>List deployment statuses. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeploymentStatuses({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeploymentStatuses({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeploymentStatuses({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments",
    "title": "getDeployments",
    "name": "getDeployments",
    "description": "<p>List deployments.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "defaultValue": "none",
            "description": "<p>The short or long sha that was recorded at creation time. Default: none.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "defaultValue": "none",
            "description": "<p>The name of the ref. This can be a branch, tag, or sha. Default: none.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "task",
            "defaultValue": "none",
            "description": "<p>The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment",
            "defaultValue": "none",
            "description": "<p>The name of the environment that was deployed to. e.g. staging or production. Default: none.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "getDownload",
    "name": "getDownload",
    "description": "<p>Get a single download.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDownload({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDownload({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDownload({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads",
    "title": "getDownloads",
    "name": "getDownloads",
    "description": "<p>List downloads for a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDownloads({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDownloads({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDownloads({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/repos",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p>List repositories for the specified org.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "public",
              "private",
              "forks",
              "sources",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "all",
            "description": "<p>Possible values: <code>all</code>, <code>public</code>, <code>private</code>, <code>forks</code>, <code>sources</code>, <code>member</code>. Default: <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForOrg({org, type, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForOrg({org, type, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForOrg({org, type, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/users/:username/repos",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List public repositories for the specified user.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "owner",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "owner",
            "description": "<p>Possible values: <code>all</code>, <code>owner</code>, <code>member</code>. Default: <code>owner</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "pushed",
              "full_name"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "full_name",
            "description": "<p>Possible values: <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForUser({username, type, sort, direction, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForUser({username, type, sort, direction, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForUser({username, type, sort, direction, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p>List forks.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "newest",
              "oldest",
              "stargazers"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "newest",
            "description": "<p>Possible values: <code>newest</code>, <code>oldest</code>, <code>stargazers</code>, default: <code>newest</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForks({owner, repo, sort, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForks({owner, repo, sort, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForks({owner, repo, sort, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p>Get single hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p>List hooks.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getHooks({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getHooks({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getHooks({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/invitations",
    "title": "getInvites",
    "name": "getInvites",
    "description": "<p>List invitations for a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getInvites({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getInvites({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getInvites({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/languages",
    "title": "getLanguages",
    "name": "getLanguages",
    "description": "<p>Get languages for the specified repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLanguages({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLanguages({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLanguages({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/latest",
    "title": "getLatestPagesBuild",
    "name": "getLatestPagesBuild",
    "description": "<p>Get latest Pages build. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLatestPagesBuild({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLatestPagesBuild({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLatestPagesBuild({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/latest",
    "title": "getLatestRelease",
    "name": "getLatestRelease",
    "description": "<p>Get the latest release.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLatestRelease({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLatestRelease({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLatestRelease({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages",
    "title": "getPages",
    "name": "getPages",
    "description": "<p>Get information about a Pages site. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPages({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPages({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPages({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/:id",
    "title": "getPagesBuild",
    "name": "getPagesBuild",
    "description": "<p>Get a specific Pages build. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPagesBuild({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPagesBuild({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPagesBuild({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "getPagesBuilds",
    "name": "getPagesBuilds",
    "description": "<p>List Pages builds. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPagesBuilds({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPagesBuilds({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPagesBuilds({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/paths",
    "title": "getPaths",
    "name": "getPaths",
    "description": "<p>Get the top 10 popular contents over the last 14 days.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPaths({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPaths({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPaths({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "getProtectedBranchAdminEnforcement",
    "name": "getProtectedBranchAdminEnforcement",
    "description": "<p>Get admin enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "getProtectedBranchPullRequestReviewEnforcement",
    "name": "getProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Get pull request review enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "getProtectedBranchRequiredStatusChecks",
    "name": "getProtectedBranchRequiredStatusChecks",
    "description": "<p>Get required status checks of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "getProtectedBranchRequiredStatusChecksContexts",
    "name": "getProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>List required status checks contexts of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "getProtectedBranchRestrictions",
    "name": "getProtectedBranchRestrictions",
    "description": "<p>Get restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "getProtectedBranchTeamRestrictions",
    "name": "getProtectedBranchTeamRestrictions",
    "description": "<p>List team restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "getProtectedBranchUserRestrictions",
    "name": "getProtectedBranchUserRestrictions",
    "description": "<p>List user restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repositories",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>List all public repositories</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last Repository that you've seen.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPublic({since, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPublic({since, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPublic({since, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/readme",
    "title": "getReadme",
    "name": "getReadme",
    "description": "<p>Get the README for the given repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "description": "<p>The name of the commit/branch/tag. Default: the repository’s default branch (usually master)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReadme({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReadme({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReadme({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/referrers",
    "title": "getReferrers",
    "name": "getReferrers",
    "description": "<p>Get the top 10 referrers over the last 14 days.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReferrers({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReferrers({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReferrers({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "getRelease",
    "name": "getRelease",
    "description": "<p>Get a single release.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getRelease({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getRelease({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getRelease({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/tags/:tag",
    "title": "getReleaseByTag",
    "name": "getReleaseByTag",
    "description": "<p>Get a release by tag name.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>String of the tag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReleaseByTag({owner, repo, tag})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReleaseByTag({owner, repo, tag}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReleaseByTag({owner, repo, tag}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases",
    "title": "getReleases",
    "name": "getReleases",
    "description": "<p>List releases for a repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReleases({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReleases({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReleases({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref",
    "title": "getShaOfCommitRef",
    "name": "getShaOfCommitRef",
    "description": "<p>Get the SHA-1 of a commit reference.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getShaOfCommitRef({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getShaOfCommitRef({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getShaOfCommitRef({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/code_frequency",
    "title": "getStatsCodeFrequency",
    "name": "getStatsCodeFrequency",
    "description": "<p>Get the number of additions and deletions per week.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsCodeFrequency({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsCodeFrequency({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsCodeFrequency({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/commit_activity",
    "title": "getStatsCommitActivity",
    "name": "getStatsCommitActivity",
    "description": "<p>Get the last year of commit activity data.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsCommitActivity({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsCommitActivity({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsCommitActivity({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/contributors",
    "title": "getStatsContributors",
    "name": "getStatsContributors",
    "description": "<p>Get contributors list with additions, deletions, and commit counts.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsContributors({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsContributors({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsContributors({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/participation",
    "title": "getStatsParticipation",
    "name": "getStatsParticipation",
    "description": "<p>Get the weekly commit count for the repository owner and everyone else.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsParticipation({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsParticipation({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsParticipation({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/punch_card",
    "title": "getStatsPunchCard",
    "name": "getStatsPunchCard",
    "description": "<p>Get the number of commits per hour in each day.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsPunchCard({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsPunchCard({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsPunchCard({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/statuses",
    "title": "getStatuses",
    "name": "getStatuses",
    "description": "<p>List statuses for a specfic ref.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatuses({owner, repo, ref, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatuses({owner, repo, ref, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatuses({owner, repo, ref, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/tags",
    "title": "getTags",
    "name": "getTags",
    "description": "<p>Get tags for the specified repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTags({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTags({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTags({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>Get teams for the specified repository.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTeams({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTeams({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTeams({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/topics",
    "title": "getTopics",
    "name": "getTopics",
    "description": "<p>List all topics for a repository. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTopics({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTopics({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTopics({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/views",
    "title": "getViews",
    "name": "getViews",
    "description": "<p>Get the total number of views and breakdown per day or week for the last 14 days.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getViews({owner, repo, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getViews({owner, repo, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getViews({owner, repo, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/merges",
    "title": "merge",
    "name": "merge",
    "description": "<p>Perform a merge.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The branch (or git ref) where your changes are implemented.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_message",
            "description": "<p>Commit message to use for the merge commit. If omitted, a default message will be used.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.merge({owner, repo, base, head, commit_message})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.merge({owner, repo, base, head, commit_message}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.merge({owner, repo, base, head, commit_message}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>Ping a hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.pingHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.pingHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.pingHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "removeBranchProtection",
    "name": "removeBranchProtection",
    "description": "<p>Remove branch protection.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeBranchProtection({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeBranchProtection({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeBranchProtection({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "removeCollaborator",
    "name": "removeCollaborator",
    "description": "<p>Remove user as a collaborator.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeCollaborator({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeCollaborator({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeCollaborator({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "removeProtectedBranchAdminEnforcement",
    "name": "removeProtectedBranchAdminEnforcement",
    "description": "<p>Remove admin enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "removeProtectedBranchPullRequestReviewEnforcement",
    "name": "removeProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Remove pull request review enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "removeProtectedBranchRequiredStatusChecks",
    "name": "removeProtectedBranchRequiredStatusChecks",
    "description": "<p>Remove required status checks of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "removeProtectedBranchRequiredStatusChecksContexts",
    "name": "removeProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Remove required status checks contexts of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "removeProtectedBranchRestrictions",
    "name": "removeProtectedBranchRestrictions",
    "description": "<p>Remove restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "removeProtectedBranchTeamRestrictions",
    "name": "removeProtectedBranchTeamRestrictions",
    "description": "<p>Remove team restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "removeProtectedBranchUserRestrictions",
    "name": "removeProtectedBranchUserRestrictions",
    "description": "<p>Remove user restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "replaceProtectedBranchRequiredStatusChecksContexts",
    "name": "replaceProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Replace required status checks contexts of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "replaceProtectedBranchTeamRestrictions",
    "name": "replaceProtectedBranchTeamRestrictions",
    "description": "<p>Replace team restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "replaceProtectedBranchUserRestrictions",
    "name": "replaceProtectedBranchUserRestrictions",
    "description": "<p>Replace user restrictions of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/topics",
    "title": "replaceTopics",
    "name": "replaceTopics",
    "description": "<p>Replace all topics for a repository. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "names",
            "description": "<p>An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceTopics({owner, repo, names})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceTopics({owner, repo, names}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceTopics({owner, repo, names}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "requestPageBuild",
    "name": "requestPageBuild",
    "description": "<p>Request a page build. (In preview period. See README.)</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.requestPageBuild({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.requestPageBuild({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.requestPageBuild({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username/permission",
    "title": "reviewUserPermissionLevel",
    "name": "reviewUserPermissionLevel",
    "description": "<p>Review a user's permission level.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.reviewUserPermissionLevel({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.reviewUserPermissionLevel({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.reviewUserPermissionLevel({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/tests",
    "title": "testHook",
    "name": "testHook",
    "description": "<p>Test a [push] hook.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.testHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.testHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.testHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "updateBranchProtection",
    "name": "updateBranchProtection",
    "description": "<p>Update branch protection.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "required_status_checks",
            "description": "<p>JSON object that contains the following keys: <code>include_admins</code> - Enforce required status checks for repository administrators, <code>strict</code> - Require branches to be up to date before merging, <code>contexts</code> - The list of status checks to require in order to merge into this branch. This object can have the value of <code>null</code> for disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "required_pull_request_reviews",
            "description": "<p>JSON object that contains the following keys: <code>include_admins</code> - Enforce required status checks for repository administrators.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "restrictions",
            "description": "<p>JSON object that contains the following keys: <code>users</code> - The list of user logins with push access, <code>teams</code> - The list of team slugs with push access. This object can have the value of <code>null</code> for disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "enforce_admins",
            "description": "<p>Enforces required status checks for repository administrators.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "dismissal_restrictions",
            "description": "<p>JSON object that contains the following keys: <code>users</code> - The list of user logins with dismissal access, <code>teams</code> - The list of team slugs with dismissal access. This object can have the value of <code>null</code> for disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "updateCommitComment",
    "name": "updateCommitComment",
    "description": "<p>Update a commit comment.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateCommitComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateCommitComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateCommitComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "updateFile",
    "name": "updateFile",
    "description": "<p>Update a file.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The updated file content, Base64 encoded.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The blob SHA of the file being replaced.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "description": "<p>The branch name. If not provided, uses the repository’s default branch (usually master).</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "committer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "author",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "updateInvite",
    "name": "updateInvite",
    "description": "<p>Update a repository invitation.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "read",
              "write",
              "admin"
            ],
            "optional": true,
            "field": "permissions",
            "description": "<p>The permissions that the associated user will have on the repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateInvite({owner, repo, invitation_id, permissions})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateInvite({owner, repo, invitation_id, permissions}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateInvite({owner, repo, invitation_id, permissions}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "updateProtectedBranchPullRequestReviewEnforcement",
    "name": "updateProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Update pull request review enforcement of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "dismissal_restrictions",
            "description": "<p>JSON object that contains the following keys: <code>users</code> - The list of user logins with dismissal access, <code>teams</code> - The list of team slugs with dismissal access. This object can have the value of <code>null</code> for disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "dismiss_stale_reviews",
            "description": "<p>Dismiss approved reviews automatically when a new commit is pushed.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "require_code_owner_reviews",
            "description": "<p>Blocks merge until code owners have reviewed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "updateProtectedBranchRequiredStatusChecks",
    "name": "updateProtectedBranchRequiredStatusChecks",
    "description": "<p>Update required status checks of protected branch.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "strict",
            "description": "<p>Require branches to be up to date before merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "contexts",
            "description": "<p>The list of status checks to require in order to merge into this branch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": ":url",
    "title": "uploadAsset",
    "name": "uploadAsset",
    "description": "<p>Upload a release asset.</p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>This endpoint makes use of a Hypermedia relation (https://developer.github.com/v3/#hypermedia) to determine which URL to access. This endpoint is provided by a URI template in the release's API response (https://developer.github.com/v3/repos/releases/#get-a-single-release). You need to use an HTTP client which supports SNI (https://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "file",
            "description": "<p>A file read stream, a String or a Buffer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentType",
            "description": "<p>The content type of the asset. This should be set in the Header. Example: 'application/zip'. For a list of acceptable types, refer this list of media types (https://www.iana.org/assignments/media-types/media-types.xhtml)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "contentLength",
            "description": "<p>File size in bytes.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The file name of the asset. This should be set in a URI query parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/search/code",
    "title": "code",
    "name": "code",
    "description": "<p>Search code.</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "indexed"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.code({q, sort, order, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.code({q, sort, order, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.code({q, sort, order, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/commits",
    "title": "commits",
    "name": "commits",
    "description": "<p>Search commits. (In preview period. See README.)</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "author-date",
              "committer-date"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>The sort field. Can be author-date or committer-date. Default: best match.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.commits({q, sort, order, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.commits({q, sort, order, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.commits({q, sort, order, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/issues",
    "title": "issues",
    "name": "issues",
    "description": "<p>Search issues.</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "comments",
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>The sort field. Can be comments, created, or updated. Default: results are sorted by best match.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.issues({q, sort, order, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.issues({q, sort, order, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.issues({q, sort, order, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/repositories",
    "title": "repos",
    "name": "repos",
    "description": "<p>Search repositories.</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "stars",
              "forks",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>stars, forks, or updated</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.repos({q, sort, order, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.repos({q, sort, order, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.repos({q, sort, order, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/users",
    "title": "users",
    "name": "users",
    "description": "<p>Search users.</p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "followers",
              "repositories",
              "joined"
            ],
            "optional": true,
            "field": "sort",
            "description": "<p>The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>asc or desc</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.users({q, sort, order, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.users({q, sort, order, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.users({q, sort, order, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "PATCH",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "acceptRepoInvite",
    "name": "acceptRepoInvite",
    "description": "<p>Accept a repository invitation.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.acceptRepoInvite({invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.acceptRepoInvite({invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.acceptRepoInvite({invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/emails",
    "title": "addEmails",
    "name": "addEmails",
    "description": "<p>Add email address(es).</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "emails",
            "description": "<p>You can post a single email address or an array of addresses.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.addEmails({emails})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.addEmails({emails}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.addEmails({emails}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.addRepoToInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.addRepoToInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p>Block a user. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.blockUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.blockUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.blockUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>Check whether you've blocked a user. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkBlockedUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkBlockedUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkBlockedUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/following/:username",
    "title": "checkFollowing",
    "name": "checkFollowing",
    "description": "<p>Check if you are following a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkFollowing({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkFollowing({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkFollowing({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following/:target_user",
    "title": "checkIfOneFollowersOther",
    "name": "checkIfOneFollowersOther",
    "description": "<p>Check if one user follows another</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target_user",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkIfOneFollowersOther({username, target_user})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkIfOneFollowersOther({username, target_user}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkIfOneFollowersOther({username, target_user}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/gpg_keys",
    "title": "createGpgKey",
    "name": "createGpgKey",
    "description": "<p>Create a GPG key. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "armored_public_key",
            "description": "<p>GPG key contents</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.createGpgKey({armored_public_key})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.createGpgKey({armored_public_key}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.createGpgKey({armored_public_key}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/keys",
    "title": "createKey",
    "name": "createKey",
    "description": "<p>Create a public key</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.createKey({title, key})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.createKey({title, key}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.createKey({title, key}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "declineRepoInvite",
    "name": "declineRepoInvite",
    "description": "<p>Decline a repository invitation.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.declineRepoInvite({invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.declineRepoInvite({invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.declineRepoInvite({invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/emails",
    "title": "deleteEmails",
    "name": "deleteEmails",
    "description": "<p>Delete email address(es).</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "emails",
            "description": "<p>You can post a single email address or an array of addresses.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteEmails({emails})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteEmails({emails}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteEmails({emails}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/gpg_keys/:id",
    "title": "deleteGpgKey",
    "name": "deleteGpgKey",
    "description": "<p>Delete a GPG key. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteGpgKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteGpgKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteGpgKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/keys/:id",
    "title": "deleteKey",
    "name": "deleteKey",
    "description": "<p>Delete a public key</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/users/:username/site_admin",
    "title": "demote",
    "name": "demote",
    "description": "<p>Demote a site administrator to an ordinary user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.demote({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.demote({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.demote({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user/memberships/orgs/:org",
    "title": "editOrgMembership",
    "name": "editOrgMembership",
    "description": "<p>Edit your organization membership.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "active"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>The state that the membership should be in. Only &quot;active&quot; will be accepted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.editOrgMembership({org, state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.editOrgMembership({org, state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.editOrgMembership({org, state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/following/:username",
    "title": "followUser",
    "name": "followUser",
    "description": "<p>Follow a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.followUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.followUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.followUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "get",
    "name": "get",
    "description": "<p>Get the authenticated user</p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.get({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.get({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.get({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>Get all users</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last User that you’ve seen.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getAll({since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getAll({since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getAll({since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List blocked users. (In preview period. See README.)</p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getBlockedUsers({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getBlockedUsers({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getBlockedUsers({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/:id",
    "title": "getById",
    "name": "getById",
    "description": "<p>Get a single user by GitHub ID. This method uses numerical user ID. Use users.getForUser method if you need to get a user by username.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Numerical ID of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getById({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getById({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getById({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/emails",
    "title": "getEmails",
    "name": "getEmails",
    "description": "<p>List email addresses for a user.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getEmails({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getEmails({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getEmails({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/followers",
    "title": "getFollowers",
    "name": "getFollowers",
    "description": "<p>List the authenticated user's followers</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowers({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowers({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowers({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/followers",
    "title": "getFollowersForUser",
    "name": "getFollowersForUser",
    "description": "<p>List a user's followers</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowersForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowersForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowersForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/following",
    "title": "getFollowing",
    "name": "getFollowing",
    "description": "<p>List who the authenticated user is following</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowing({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowing({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowing({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following",
    "title": "getFollowingForUser",
    "name": "getFollowingForUser",
    "description": "<p>List who a user is following</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowingForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowingForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowingForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>Get a single user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getForUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getForUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getForUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys/:id",
    "title": "getGpgKey",
    "name": "getGpgKey",
    "description": "<p>Get a single GPG key. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys",
    "title": "getGpgKeys",
    "name": "getGpgKeys",
    "description": "<p>List your GPG keys. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKeys({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKeys({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKeys({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/gpg_keys",
    "title": "getGpgKeysForUser",
    "name": "getGpgKeysForUser",
    "description": "<p>Lists the GPG keys for a user. This information is accessible by anyone. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKeysForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKeysForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKeysForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/installations/:installation_id/repositories",
    "title": "getInstallationRepos",
    "name": "getInstallationRepos",
    "description": "<p>List repositories accessible to the user for an installation. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getInstallationRepos({installation_id, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getInstallationRepos({installation_id, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getInstallationRepos({installation_id, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List installations. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getInstallations({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getInstallations({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getInstallations({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/keys/:id",
    "title": "getKey",
    "name": "getKey",
    "description": "<p>Get a single public key</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/keys",
    "title": "getKeys",
    "name": "getKeys",
    "description": "<p>List your public keys</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKeys({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKeys({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKeys({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/keys",
    "title": "getKeysForUser",
    "name": "getKeysForUser",
    "description": "<p>List public keys for a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKeysForUser({username, page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKeysForUser({username, page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKeysForUser({username, page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases",
    "title": "getMarketplacePurchases",
    "name": "getMarketplacePurchases",
    "description": "<p>Get a user's Marketplace purchases. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getMarketplacePurchases({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getMarketplacePurchases({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getMarketplacePurchases({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases/stubbed",
    "title": "getMarketplaceStubbedPurchases",
    "name": "getMarketplaceStubbedPurchases",
    "description": "<p>Get a user's stubbed Marketplace purchases. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getMarketplaceStubbedPurchases({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getMarketplaceStubbedPurchases({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getMarketplaceStubbedPurchases({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs/:org",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p>Get your organization membership</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgMembership({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgMembership({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgMembership({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs",
    "title": "getOrgMemberships",
    "name": "getOrgMemberships",
    "description": "<p>List your organization memberships</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "active",
              "pending"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgMemberships({state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgMemberships({state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgMemberships({state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/orgs",
    "title": "getOrgs",
    "name": "getOrgs",
    "description": "<p>List organizations for the authenticated user.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgs({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgs({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgs({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/public_emails",
    "title": "getPublicEmails",
    "name": "getPublicEmails",
    "description": "<p>List public email addresses for a user.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getPublicEmails({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getPublicEmails({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getPublicEmails({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/repository_invitations",
    "title": "getRepoInvites",
    "name": "getRepoInvites",
    "description": "<p>List a user's repository invitations.</p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getRepoInvites({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getRepoInvites({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getRepoInvites({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>Get your teams.</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Page number of the results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>A custom page size up to 100. Default is 30.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getTeams({page, per_page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getTeams({page, per_page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getTeams({page, per_page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/users/:username/site_admin",
    "title": "promote",
    "name": "promote",
    "description": "<p>Promote an ordinary user to a site administrator</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.promote({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.promote({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.promote({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.removeRepoFromInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/users/:username/suspended",
    "title": "suspend",
    "name": "suspend",
    "description": "<p>Suspend a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.suspend({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.suspend({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.suspend({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user/email/visibility",
    "title": "togglePrimaryEmailVisibility",
    "name": "togglePrimaryEmailVisibility",
    "description": "<p>Toggle primary email visibility.</p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.togglePrimaryEmailVisibility({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.togglePrimaryEmailVisibility({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.togglePrimaryEmailVisibility({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p>Unblock a user. (In preview period. See README.)</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.unblockUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.unblockUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.unblockUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/following/:username",
    "title": "unfollowUser",
    "name": "unfollowUser",
    "description": "<p>Unfollow a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.unfollowUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.unfollowUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.unfollowUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/users/:username/suspended",
    "title": "unsuspend",
    "name": "unsuspend",
    "description": "<p>Unsuspend a user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.unsuspend({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.unsuspend({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.unsuspend({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user",
    "title": "update",
    "name": "update",
    "description": "<p>Update the authenticated user</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The new name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Publicly visible email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "blog",
            "description": "<p>The new blog URL of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>The new company of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>The new location of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "hireable",
            "description": "<p>The new hiring availability of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The new short biography of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.update({name, email, blog, company, location, hireable, bio})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.update({name, email, blog, company, location, hireable, bio}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.update({name, email, blog, company, location, hireable, bio}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  }
] });
