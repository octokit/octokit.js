define({ "api": [
  {
    "type": "GET",
    "url": "/notifications/threads/:id/subscription",
    "title": "checkNotificationThreadSubscription",
    "name": "checkNotificationThreadSubscription",
    "description": "<p>Check to see if the current user is subscribed to a thread.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.checkNotificationThreadSubscription({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/user/starred/:owner/:repo",
    "title": "checkStarringRepo",
    "name": "checkStarringRepo",
    "description": "<p>Check if you are starring a repository</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.checkStarringRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "DELETE",
    "url": "/notifications/threads/:id/subscription",
    "title": "deleteNotificationThreadSubscription",
    "name": "deleteNotificationThreadSubscription",
    "description": "<p>Delete a notification thread subscription.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.deleteNotificationThreadSubscription({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p>List public events</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEvents({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/events",
    "title": "getEventsForOrg",
    "name": "getEventsForOrg",
    "description": "<p>List public events for an organization</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p>List repository events</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events",
    "title": "getEventsForRepoIssues",
    "name": "getEventsForRepoIssues",
    "description": "<p>List issue events for a repository</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForRepoIssues({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/networks/:owner/:repo/events",
    "title": "getEventsForRepoNetwork",
    "name": "getEventsForRepoNetwork",
    "description": "<p>List public events for a network of repositories</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForRepoNetwork({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events",
    "title": "getEventsForUser",
    "name": "getEventsForUser",
    "description": "<p>List events performed by a user</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/orgs/:org",
    "title": "getEventsForUserOrg",
    "name": "getEventsForUserOrg",
    "description": "<p>List events for a user's organization</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForUserOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/public",
    "title": "getEventsForUserPublic",
    "name": "getEventsForUserPublic",
    "description": "<p>List public events performed by a user</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsForUserPublic({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events",
    "title": "getEventsReceived",
    "name": "getEventsReceived",
    "description": "<p>List events that a user has received</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsReceived({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events/public",
    "title": "getEventsReceivedPublic",
    "name": "getEventsReceivedPublic",
    "description": "<p>List public events that a user has received</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getEventsReceivedPublic({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/feeds",
    "title": "getFeeds",
    "name": "getFeeds",
    "description": "<p>Get all feeds available for the authenticated user.</p>",
    "group": "activity",
    "examples": [
      {
        "title": "ex:",
        "content": "github.activity.getFeeds({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/notifications/threads/:id",
    "title": "getNotificationThread",
    "name": "getNotificationThread",
    "description": "<p>View a single notification thread.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getNotificationThread({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/notifications",
    "title": "getNotifications",
    "name": "getNotifications",
    "description": "<p>Get all notifications for the current user, grouped by repository.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getNotifications({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/notifications",
    "title": "getNotificationsForUser",
    "name": "getNotificationsForUser",
    "description": "<p>Get all notifications for the given user.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getNotificationsForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscription",
    "title": "getRepoSubscription",
    "name": "getRepoSubscription",
    "description": "<p>Get a Repository Subscription.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getRepoSubscription({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stargazers",
    "title": "getStargazersForRepo",
    "name": "getStargazersForRepo",
    "description": "<p>List Stargazers</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getStargazersForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/user/starred",
    "title": "getStarredRepos",
    "name": "getStarredRepos",
    "description": "<p>List repositories being starred by the authenticated user</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getStarredRepos({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/starred",
    "title": "getStarredReposForUser",
    "name": "getStarredReposForUser",
    "description": "<p>List repositories being starred by a user</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getStarredReposForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/user/subscriptions",
    "title": "getWatchedRepos",
    "name": "getWatchedRepos",
    "description": "<p>List repositories being watched by the authenticated user.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getWatchedRepos({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/subscriptions",
    "title": "getWatchedReposForUser",
    "name": "getWatchedReposForUser",
    "description": "<p>List repositories being watched by a user.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getWatchedReposForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscribers",
    "title": "getWatchersForRepo",
    "name": "getWatchersForRepo",
    "description": "<p>Get watchers for repository.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.getWatchersForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PATCH",
    "url": "/notifications/threads/:id",
    "title": "markNotificationThreadAsRead",
    "name": "markNotificationThreadAsRead",
    "description": "<p>Mark a notification thread as read.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.markNotificationThreadAsRead({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/notifications",
    "title": "markNotificationsAsRead",
    "name": "markNotificationsAsRead",
    "description": "<p>Mark notifications as read for authenticated user.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.markNotificationsAsRead({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/notifications",
    "title": "markNotificationsAsReadForRepo",
    "name": "markNotificationsAsReadForRepo",
    "description": "<p>Mark notifications in a repo as read.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.markNotificationsAsReadForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/notifications/threads/:id/subscription",
    "title": "setNotificationThreadSubscription",
    "name": "setNotificationThreadSubscription",
    "description": "<p>This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.setNotificationThreadSubscription({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/subscription",
    "title": "setRepoSubscription",
    "name": "setRepoSubscription",
    "description": "<p>Set a Repository Subscription</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.setRepoSubscription({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/user/starred/:owner/:repo",
    "title": "starRepo",
    "name": "starRepo",
    "description": "<p>Star a repository</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.starRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "DELETE",
    "url": "/user/starred/:owner/:repo",
    "title": "unstarRepo",
    "name": "unstarRepo",
    "description": "<p>Unstar a repository</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.unstarRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/subscription",
    "title": "unwatchRepo",
    "name": "unwatchRepo",
    "description": "<p>Unwatch a repository.</p>",
    "group": "activity",
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
        "title": "ex:",
        "content": "github.activity.unwatchRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "activity"
  },
  {
    "type": "PUT",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.addRepoToInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/accounts/:id",
    "title": "checkMarketplaceListingAccount",
    "name": "checkMarketplaceListingAccount",
    "description": "<p>Check if a GitHub account is associated with any Marketplace listing. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.checkMarketplaceListingAccount({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/accounts/:id",
    "title": "checkMarketplaceListingStubbedAccount",
    "name": "checkMarketplaceListingStubbedAccount",
    "description": "<p>Check if a stubbed GitHub account is associated with any Marketplace listing. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.checkMarketplaceListingStubbedAccount({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "POST",
    "url": "/installations/:installation_id/access_tokens",
    "title": "createInstallationToken",
    "name": "createInstallationToken",
    "description": "<p>Create a new installation token. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.createInstallationToken({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/app",
    "title": "get",
    "name": "get",
    "description": "<p>Get the authenticated GitHub App. (In preview period. See README.)</p>",
    "group": "apps",
    "examples": [
      {
        "title": "ex:",
        "content": "github.apps.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/apps/:app_slug",
    "title": "getForSlug",
    "name": "getForSlug",
    "description": "<p>Get a single GitHub App. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getForSlug({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/app/installations/:installation_id",
    "title": "getInstallation",
    "name": "getInstallation",
    "description": "<p>Get a single installation. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/installation/repositories",
    "title": "getInstallationRepositories",
    "name": "getInstallationRepositories",
    "description": "<p>List repositories that are accessible to the authenticated installation. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getInstallationRepositories({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/app/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List the app's installations. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getInstallations({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans/:id/accounts",
    "title": "getMarketplaceListingPlanAccounts",
    "name": "getMarketplaceListingPlanAccounts",
    "description": "<p>List all GitHub accounts (user or organization) on a specific plan. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getMarketplaceListingPlanAccounts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans",
    "title": "getMarketplaceListingPlans",
    "name": "getMarketplaceListingPlans",
    "description": "<p>List all plans for your Marketplace listing. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getMarketplaceListingPlans({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans/:id/accounts",
    "title": "getMarketplaceListingStubbedPlanAccounts",
    "name": "getMarketplaceListingStubbedPlanAccounts",
    "description": "<p>List all GitHub accounts (user or organization) on a specific stubbed plan. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getMarketplaceListingStubbedPlanAccounts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans",
    "title": "getMarketplaceListingStubbedPlans",
    "name": "getMarketplaceListingStubbedPlans",
    "description": "<p>List all stubbed plans for your Marketplace listing. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.getMarketplaceListingStubbedPlans({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "DELETE",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "apps",
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
        "title": "ex:",
        "content": "github.apps.removeRepoFromInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "apps"
  },
  {
    "type": "GET",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "check",
    "name": "check",
    "description": "<p>Check an authorization</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.check({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "POST",
    "url": "/authorizations",
    "title": "create",
    "name": "create",
    "description": "<p>Create a new authorization.</p>",
    "group": "authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
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
        "title": "ex:",
        "content": "github.authorization.create({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "DELETE",
    "url": "/authorizations/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete an authorization.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.delete({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/grants/:id",
    "title": "deleteGrant",
    "name": "deleteGrant",
    "description": "<p>Delete a grant.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.deleteGrant({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations/:id",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single authorization.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List your authorizations.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants/:id",
    "title": "getGrant",
    "name": "getGrant",
    "description": "<p>Get a single grant.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.getGrant({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants",
    "title": "getGrants",
    "name": "getGrants",
    "description": "<p>List your grants.</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.getGrants({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id",
    "title": "getOrCreateAuthorizationForApp",
    "name": "getOrCreateAuthorizationForApp",
    "description": "<p>Get or create an authorization for a specific app.</p>",
    "group": "authorization",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.authorization.getOrCreateAuthorizationForApp({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id/:fingerprint",
    "title": "getOrCreateAuthorizationForAppAndFingerprint",
    "name": "getOrCreateAuthorizationForAppAndFingerprint",
    "description": "<p>Get or create an authorization for a specific app and fingerprint.</p>",
    "group": "authorization",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.authorization.getOrCreateAuthorizationForAppAndFingerprint({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "POST",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "reset",
    "name": "reset",
    "description": "<p>Reset an authorization</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.reset({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "revoke",
    "name": "revoke",
    "description": "<p>Revoke an authorization for an application</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.revoke({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/grants/:access_token",
    "title": "revokeGrant",
    "name": "revokeGrant",
    "description": "<p>Revoke a grant for an application</p>",
    "group": "authorization",
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
        "title": "ex:",
        "content": "github.authorization.revokeGrant({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "PATCH",
    "url": "/authorizations/:id",
    "title": "update",
    "name": "update",
    "description": "<p>Update an existing authorization.</p>",
    "group": "authorization",
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
            "type": "array",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "add_scopes",
            "description": "<p>A list of scopes to add to this authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
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
        "title": "ex:",
        "content": "github.authorization.update({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "authorization"
  },
  {
    "type": "POST",
    "url": "/admin/organizations",
    "title": "createOrg",
    "name": "createOrg",
    "description": "<p>Create an organization</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.createOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre_receive_environments",
    "title": "createPreReceiveEnvironment",
    "name": "createPreReceiveEnvironment",
    "description": "<p>Create a pre-receive environment. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.createPreReceiveEnvironment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre-receive-hooks",
    "title": "createPreReceiveHook",
    "name": "createPreReceiveHook",
    "description": "<p>Create a pre-receive hook. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.createPreReceiveHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "DELETE",
    "url": "/admin/pre_receive_environments/:id",
    "title": "deletePreReceiveEnvironment",
    "name": "deletePreReceiveEnvironment",
    "description": "<p>Delete a pre-receive environment. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.deletePreReceiveEnvironment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "DELETE",
    "url": "/admin/pre_receive_hooks/:id",
    "title": "deletePreReceiveHook",
    "name": "deletePreReceiveHook",
    "description": "<p>Delete a pre-receive hook. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.deletePreReceiveHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/pre_receive_environments/:id",
    "title": "editPreReceiveEnvironment",
    "name": "editPreReceiveEnvironment",
    "description": "<p>Create a pre-receive environment. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.editPreReceiveEnvironment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/pre_receive_hooks/:id",
    "title": "editPreReceiveHook",
    "name": "editPreReceiveHook",
    "description": "<p>Edit a pre-receive hook. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.editPreReceiveHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/enterprise/settings/license",
    "title": "getLicense",
    "name": "getLicense",
    "description": "<p>Get license information</p>",
    "group": "enterprise",
    "examples": [
      {
        "title": "ex:",
        "content": "github.enterprise.getLicense({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-environments/:id",
    "title": "getPreReceiveEnvironment",
    "name": "getPreReceiveEnvironment",
    "description": "<p>Get a single pre-receive environment. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.getPreReceiveEnvironment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-environments/:id/downloads/latest",
    "title": "getPreReceiveEnvironmentDownloadStatus",
    "name": "getPreReceiveEnvironmentDownloadStatus",
    "description": "<p>Get a pre-receive environment's download status. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre_receive_environments",
    "title": "getPreReceiveEnvironments",
    "name": "getPreReceiveEnvironments",
    "description": "<p>List pre-receive environments. (In preview period. See README.)</p>",
    "group": "enterprise",
    "examples": [
      {
        "title": "ex:",
        "content": "github.enterprise.getPreReceiveEnvironments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-hooks/:id",
    "title": "getPreReceiveHook",
    "name": "getPreReceiveHook",
    "description": "<p>Get a single pre-receive hook. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.getPreReceiveHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/admin/pre-receive-hooks",
    "title": "getPreReceiveHooks",
    "name": "getPreReceiveHooks",
    "description": "<p>List pre-receive hooks. (In preview period. See README.)</p>",
    "group": "enterprise",
    "examples": [
      {
        "title": "ex:",
        "content": "github.enterprise.getPreReceiveHooks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/staff/indexing_jobs",
    "title": "queueIndexingJob",
    "name": "queueIndexingJob",
    "description": "<p>Queue an indexing job</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.queueIndexingJob({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/enterprise/stats/:type",
    "title": "stats",
    "name": "stats",
    "description": "<p>Get statistics.</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.stats({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/ldap/teams/:team_id/sync",
    "title": "syncLdapForTeam",
    "name": "syncLdapForTeam",
    "description": "<p>Sync LDAP mapping for a team.</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.syncLdapForTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/ldap/users/:username/sync",
    "title": "syncLdapForUser",
    "name": "syncLdapForUser",
    "description": "<p>Sync LDAP mapping for a user.</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.syncLdapForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "POST",
    "url": "/admin/pre_receive_environments/:id/downloads",
    "title": "triggerPreReceiveEnvironmentDownload",
    "name": "triggerPreReceiveEnvironmentDownload",
    "description": "<p>Trigger a pre-receive environment download. (In preview period. See README.)</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.triggerPreReceiveEnvironmentDownload({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/ldap/teams/:team_id/mapping",
    "title": "updateLdapForTeam",
    "name": "updateLdapForTeam",
    "description": "<p>Update LDAP mapping for a team.</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.updateLdapForTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "PATCH",
    "url": "/admin/ldap/users/:username/mapping",
    "title": "updateLdapForUser",
    "name": "updateLdapForUser",
    "description": "<p>Update LDAP mapping for a user.</p>",
    "group": "enterprise",
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
        "title": "ex:",
        "content": "github.enterprise.updateLdapForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "enterprise"
  },
  {
    "type": "GET",
    "url": "/gists/:id/star",
    "title": "checkStar",
    "name": "checkStar",
    "description": "<p>Check if a gist is starred</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.checkStar({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "POST",
    "url": "/gists",
    "title": "create",
    "name": "create",
    "description": "<p>Create a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.create({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "POST",
    "url": "/gists/:gist_id/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.createComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.delete({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:gist_id/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.deleteComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:id",
    "title": "edit",
    "name": "edit",
    "description": "<p>Edit a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.edit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:gist_id/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.editComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "POST",
    "url": "/gists/:id/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p>Fork a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.fork({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List the authenticated user's gists or if called anonymously, this will return all public gists</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List gist commits</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getCommits({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/users/:username/gists",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List a user's gists</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p>List gist forks</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getForks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/public",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>List all public gists</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getPublic({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/:sha",
    "title": "getRevision",
    "name": "getRevision",
    "description": "<p>Get a specific revision of a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getRevision({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "GET",
    "url": "/gists/starred",
    "title": "getStarred",
    "name": "getStarred",
    "description": "<p>List the authenticated user's starred gists</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.getStarred({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "PUT",
    "url": "/gists/:id/star",
    "title": "star",
    "name": "star",
    "description": "<p>Star a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.star({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id/star",
    "title": "unstar",
    "name": "unstar",
    "description": "<p>Unstar a gist</p>",
    "group": "gists",
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
        "title": "ex:",
        "content": "github.gists.unstar({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gists"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/blobs",
    "title": "createBlob",
    "name": "createBlob",
    "description": "<p>Create a Blob</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.createBlob({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/commits",
    "title": "createCommit",
    "name": "createCommit",
    "description": "<p>Create a Commit</p>",
    "group": "gitdata",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.gitdata.createCommit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/refs",
    "title": "createReference",
    "name": "createReference",
    "description": "<p>Create a Reference</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.createReference({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/tags",
    "title": "createTag",
    "name": "createTag",
    "description": "<p>Create a Tag Object</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.createTag({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/trees",
    "title": "createTree",
    "name": "createTree",
    "description": "<p>Create a Tree</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.createTree({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "deleteReference",
    "name": "deleteReference",
    "description": "<p>Delete a Reference</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.deleteReference({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/blobs/:sha",
    "title": "getBlob",
    "name": "getBlob",
    "description": "<p>Get a Blob</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getBlob({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Get a Commit</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getCommit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:sha",
    "title": "getCommitSignatureVerification",
    "name": "getCommitSignatureVerification",
    "description": "<p>Get a Commit Signature Verification. (In preview period. See README.)</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getCommitSignatureVerification({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "getReference",
    "name": "getReference",
    "description": "<p>Get a Reference</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getReference({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs",
    "title": "getReferences",
    "name": "getReferences",
    "description": "<p>Get all References</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getReferences({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:sha",
    "title": "getTag",
    "name": "getTag",
    "description": "<p>Get a Tag</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getTag({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:sha",
    "title": "getTagSignatureVerification",
    "name": "getTagSignatureVerification",
    "description": "<p>Get a Tag Signature Verification. (In preview period. See README.)</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getTagSignatureVerification({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs/tags",
    "title": "getTags",
    "name": "getTags",
    "description": "<p>Get all tag References</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getTags({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/trees/:sha",
    "title": "getTree",
    "name": "getTree",
    "description": "<p>Get a Tree</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.getTree({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "updateReference",
    "name": "updateReference",
    "description": "<p>Update a Reference</p>",
    "group": "gitdata",
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
        "title": "ex:",
        "content": "github.gitdata.updateReference({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "gitdata"
  },
  {
    "type": "PUT",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "integrations",
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
        "title": "ex:",
        "content": "github.integrations.addRepoToInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "integrations"
  },
  {
    "type": "POST",
    "url": "/installations/:installation_id/access_tokens",
    "title": "createInstallationToken",
    "name": "createInstallationToken",
    "description": "<p>Create a new installation token. (In preview period. See README.)</p>",
    "group": "integrations",
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
        "title": "ex:",
        "content": "github.integrations.createInstallationToken({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "integrations"
  },
  {
    "type": "GET",
    "url": "/installation/repositories",
    "title": "getInstallationRepositories",
    "name": "getInstallationRepositories",
    "description": "<p>List repositories that are accessible to the authenticated installation. (In preview period. See README.)</p>",
    "group": "integrations",
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
        "title": "ex:",
        "content": "github.integrations.getInstallationRepositories({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "integrations"
  },
  {
    "type": "GET",
    "url": "/app/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List the app's installations. (In preview period. See README.)</p>",
    "group": "integrations",
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
        "title": "ex:",
        "content": "github.integrations.getInstallations({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "integrations"
  },
  {
    "type": "DELETE",
    "url": "/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "integrations",
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
        "title": "ex:",
        "content": "github.integrations.removeRepoFromInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "integrations"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "addAssigneesToIssue",
    "name": "addAssigneesToIssue",
    "description": "<p>Add assignees to an issue.</p>",
    "group": "issues",
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
            "type": "array",
            "optional": false,
            "field": "assignees",
            "description": "<p>Logins for the users that should be added to the issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.issues.addAssigneesToIssue({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "addLabels",
    "name": "addLabels",
    "description": "<p>Add labels to an issue</p>",
    "group": "issues",
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
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.issues.addLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees/:assignee",
    "title": "checkAssignee",
    "name": "checkAssignee",
    "description": "<p>Check assignee</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.checkAssignee({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues",
    "title": "create",
    "name": "create",
    "description": "<p>Create an issue</p>",
    "group": "issues",
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
            "type": "array",
            "optional": true,
            "field": "labels",
            "description": "<p>Array of strings - Labels to associate with this issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.issues.create({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.createComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/labels",
    "title": "createLabel",
    "name": "createLabel",
    "description": "<p>Create a label</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.createLabel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/milestones",
    "title": "createMilestone",
    "name": "createMilestone",
    "description": "<p>Create a milestone</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.createMilestone({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.deleteComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "deleteLabel",
    "name": "deleteLabel",
    "description": "<p>Delete a label</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.deleteLabel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "deleteMilestone",
    "name": "deleteMilestone",
    "description": "<p>Delete a milestone</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.deleteMilestone({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "edit",
    "name": "edit",
    "description": "<p>Edit an issue</p>",
    "group": "issues",
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
            "type": "array",
            "optional": true,
            "field": "labels",
            "description": "<p>Array of strings - Labels to associate with this issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.issues.edit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.editComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/issues",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees",
    "title": "getAssignees",
    "name": "getAssignees",
    "description": "<p>List assignees</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getAssignees({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on an issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>List comments in a repository</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getCommentsForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events/:id",
    "title": "getEvent",
    "name": "getEvent",
    "description": "<p>Get a single event</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getEvent({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:issue_number/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p>List events for an issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getEvents({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p>List events for a repository</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getEventsForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:issue_number/timeline",
    "title": "getEventsTimeline",
    "name": "getEventsTimeline",
    "description": "<p>List events for an issue. (In preview period. See README.)</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getEventsTimeline({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/issues",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p>List all issues for a given organization for the authenticated user</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getForOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues",
    "title": "getForRepo",
    "name": "getForRepo",
    "description": "<p>List issues for a repository</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/user/issues",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List all issues across owned and member repositories for the authenticated user</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "getIssueLabels",
    "name": "getIssueLabels",
    "description": "<p>List labels on an issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getIssueLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "getLabel",
    "name": "getLabel",
    "description": "<p>Get a single label</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getLabel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels",
    "title": "getLabels",
    "name": "getLabels",
    "description": "<p>List all labels for this repository</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "getMilestone",
    "name": "getMilestone",
    "description": "<p>Get a single milestone</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getMilestone({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number/labels",
    "title": "getMilestoneLabels",
    "name": "getMilestoneLabels",
    "description": "<p>Get labels for every issue in a milestone</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getMilestoneLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones",
    "title": "getMilestones",
    "name": "getMilestones",
    "description": "<p>List milestones for a repository</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.getMilestones({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "lock",
    "name": "lock",
    "description": "<p>Users with push access can lock an issue's conversation.</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.lock({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "removeAllLabels",
    "name": "removeAllLabels",
    "description": "<p>Remove all labels from an issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.removeAllLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "removeAssigneesFromIssue",
    "name": "removeAssigneesFromIssue",
    "description": "<p>Remove assignees from an issue.</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.removeAssigneesFromIssue({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels/:name",
    "title": "removeLabel",
    "name": "removeLabel",
    "description": "<p>Remove a label from an issue</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.removeLabel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "replaceAllLabels",
    "name": "replaceAllLabels",
    "description": "<p>Replace all labels for an issue</p>",
    "group": "issues",
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
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": "<p>Sending an empty array ([]) will remove all Labels from the Issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.issues.replaceAllLabels({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "unlock",
    "name": "unlock",
    "description": "<p>Users with push access can unlock an issue's conversation.</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.unlock({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/labels/:oldname",
    "title": "updateLabel",
    "name": "updateLabel",
    "description": "<p>Update a label</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.updateLabel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "updateMilestone",
    "name": "updateMilestone",
    "description": "<p>Update a milestone</p>",
    "group": "issues",
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
        "title": "ex:",
        "content": "github.issues.updateMilestone({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/import",
    "title": "cancelImport",
    "name": "cancelImport",
    "description": "<p>Cancel an import. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.cancelImport({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "deleteMigrationArchive",
    "name": "deleteMigrationArchive",
    "description": "<p>Delete a migration archive. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.deleteMigrationArchive({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import/authors",
    "title": "getImportCommitAuthors",
    "name": "getImportCommitAuthors",
    "description": "<p>Get import commit authors. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getImportCommitAuthors({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import",
    "title": "getImportProgress",
    "name": "getImportProgress",
    "description": "<p>Get import progress. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getImportProgress({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/:owner/:name/import/large_files",
    "title": "getLargeImportFiles",
    "name": "getLargeImportFiles",
    "description": "<p>List files larger than 100MB found during the import. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getLargeImportFiles({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "getMigrationArchiveLink",
    "name": "getMigrationArchiveLink",
    "description": "<p>Get the URL to a migration archive. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getMigrationArchiveLink({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id",
    "title": "getMigrationStatus",
    "name": "getMigrationStatus",
    "description": "<p>Get the status of a migration. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getMigrationStatus({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations",
    "title": "getMigrations",
    "name": "getMigrations",
    "description": "<p>Get a list of migrations. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.getMigrations({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import/authors/:author_id",
    "title": "mapImportCommitAuthor",
    "name": "mapImportCommitAuthor",
    "description": "<p>Map a commit author. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.mapImportCommitAuthor({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "PATCH",
    "url": "/:owner/:name/import/lfs",
    "title": "setImportLfsPreference",
    "name": "setImportLfsPreference",
    "description": "<p>Set import LFS preference. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.setImportLfsPreference({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/import",
    "title": "startImport",
    "name": "startImport",
    "description": "<p>Start an import. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.startImport({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/migrations",
    "title": "startMigration",
    "name": "startMigration",
    "description": "<p>Start a migration. (In preview period. See README.)</p>",
    "group": "migrations",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.migrations.startMigration({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/repos/:repo_name/lock",
    "title": "unlockRepoLockedForMigration",
    "name": "unlockRepoLockedForMigration",
    "description": "<p>Unlock a repository that was locked for migration. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.unlockRepoLockedForMigration({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import",
    "title": "updateImport",
    "name": "updateImport",
    "description": "<p>Update existing import. (In preview period. See README.)</p>",
    "group": "migrations",
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
        "title": "ex:",
        "content": "github.migrations.updateImport({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "migrations"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct/:key",
    "title": "getCodeOfConduct",
    "name": "getCodeOfConduct",
    "description": "<p>Get an code of conduct. (In preview period. See README.)</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.getCodeOfConduct({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct",
    "title": "getCodesOfConduct",
    "name": "getCodesOfConduct",
    "description": "<p>List all codes of conduct. (In preview period. See README.)</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getCodesOfConduct({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/emojis",
    "title": "getEmojis",
    "name": "getEmojis",
    "description": "<p>Lists all the emojis available to use on GitHub.</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getEmojis({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates/:name",
    "title": "getGitignoreTemplate",
    "name": "getGitignoreTemplate",
    "description": "<p>Get a single gitignore template</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.getGitignoreTemplate({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates",
    "title": "getGitignoreTemplates",
    "name": "getGitignoreTemplates",
    "description": "<p>Lists available gitignore templates</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getGitignoreTemplates({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/licenses/:license",
    "title": "getLicense",
    "name": "getLicense",
    "description": "<p>Get an individual license. (In preview period. See README.)</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.getLicense({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/licenses",
    "title": "getLicenses",
    "name": "getLicenses",
    "description": "<p>List all licenses. (In preview period. See README.)</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getLicenses({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/meta",
    "title": "getMeta",
    "name": "getMeta",
    "description": "<p>This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getMeta({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/rate_limit",
    "title": "getRateLimit",
    "name": "getRateLimit",
    "description": "<p>Get your current rate limit status</p>",
    "group": "misc",
    "examples": [
      {
        "title": "ex:",
        "content": "github.misc.getRateLimit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/community/code_of_conduct",
    "title": "getRepoCodeOfConduct",
    "name": "getRepoCodeOfConduct",
    "description": "<p>Get the contents of a repository's code of conduct. (In preview period. See README.)</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.getRepoCodeOfConduct({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/license",
    "title": "getRepoLicense",
    "name": "getRepoLicense",
    "description": "<p>Get the contents of a repository's license. (In preview period. See README.)</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.getRepoLicense({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "POST",
    "url": "/markdown",
    "title": "renderMarkdown",
    "name": "renderMarkdown",
    "description": "<p>Render an arbitrary Markdown document</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.renderMarkdown({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "POST",
    "url": "/markdown/raw",
    "title": "renderMarkdownRaw",
    "name": "renderMarkdownRaw",
    "description": "<p>Render a Markdown document in raw mode</p>",
    "group": "misc",
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
        "title": "ex:",
        "content": "github.misc.renderMarkdownRaw({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "misc"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/memberships/:username",
    "title": "addOrgMembership",
    "name": "addOrgMembership",
    "description": "<p>Add or update organization membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.addOrgMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/memberships/:username",
    "title": "addTeamMembership",
    "name": "addTeamMembership",
    "description": "<p>Add team membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.addTeamMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/repos/:org/:repo",
    "title": "addTeamRepo",
    "name": "addTeamRepo",
    "description": "<p>Add team repository</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.addTeamRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p>Block a user. (In preview period. See README.)</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.blockUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>Check whether you've blocked a user. (In preview period. See README.)</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.checkBlockedUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members/:username",
    "title": "checkMembership",
    "name": "checkMembership",
    "description": "<p>Check membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.checkMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members/:username",
    "title": "checkPublicMembership",
    "name": "checkPublicMembership",
    "description": "<p>Check public membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.checkPublicMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "checkTeamRepo",
    "name": "checkTeamRepo",
    "description": "<p>Check if a team manages a repository</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.checkTeamRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/public_members/:username",
    "title": "concealMembership",
    "name": "concealMembership",
    "description": "<p>Conceal a user's membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.concealMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "convertMemberToOutsideCollaborator",
    "name": "convertMemberToOutsideCollaborator",
    "description": "<p>Convert member to outside collaborator.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.convertMemberToOutsideCollaborator({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Create a hook</p>",
    "group": "orgs",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.orgs.createHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/teams",
    "title": "createTeam",
    "name": "createTeam",
    "description": "<p>Create team</p>",
    "group": "orgs",
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
            "type": "array",
            "optional": true,
            "field": "maintainers",
            "description": "<p>The logins of organization members to add as maintainers of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
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
            "type": "string",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.orgs.createTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p>Delete a hook</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.deleteHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id",
    "title": "deleteTeam",
    "name": "deleteTeam",
    "description": "<p>Delete team</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.deleteTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "deleteTeamRepo",
    "name": "deleteTeamRepo",
    "description": "<p>Remove team repository</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.deleteTeamRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p>Edit a hook</p>",
    "group": "orgs",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.orgs.editHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PATCH",
    "url": "/teams/:id",
    "title": "editTeam",
    "name": "editTeam",
    "description": "<p>Edit team</p>",
    "group": "orgs",
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
            "type": "string",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.orgs.editTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org",
    "title": "get",
    "name": "get",
    "description": "<p>Get an organization</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/organizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List all organizations</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List blocked users. (In preview period. See README.)</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getBlockedUsers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/teams",
    "title": "getChildTeams",
    "name": "getChildTeams",
    "description": "<p>List child teams</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getChildTeams({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/users/:username/orgs",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List public organization memberships for the specified user.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p>Get single hook</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p>List hooks</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getHooks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members",
    "title": "getMembers",
    "name": "getMembers",
    "description": "<p>Members list</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getMembers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/memberships/:username",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p>Get organization membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getOrgMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/outside_collaborators",
    "title": "getOutsideCollaborators",
    "name": "getOutsideCollaborators",
    "description": "<p>List all users who are outside collaborators of an organization.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getOutsideCollaborators({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/invitations",
    "title": "getPendingOrgInvites",
    "name": "getPendingOrgInvites",
    "description": "<p>List pending organization invites.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getPendingOrgInvites({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/invitations",
    "title": "getPendingTeamInvites",
    "name": "getPendingTeamInvites",
    "description": "<p>List pending team invitations.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getPendingTeamInvites({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members",
    "title": "getPublicMembers",
    "name": "getPublicMembers",
    "description": "<p>Public members list</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getPublicMembers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id",
    "title": "getTeam",
    "name": "getTeam",
    "description": "<p>Get team</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getTeam({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/members",
    "title": "getTeamMembers",
    "name": "getTeamMembers",
    "description": "<p>List team members</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getTeamMembers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/memberships/:username",
    "title": "getTeamMembership",
    "name": "getTeamMembership",
    "description": "<p>Get team membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getTeamMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos",
    "title": "getTeamRepos",
    "name": "getTeamRepos",
    "description": "<p>Get team repos</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getTeamRepos({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>List teams</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.getTeams({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>Ping a hook</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.pingHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/public_members/:username",
    "title": "publicizeMembership",
    "name": "publicizeMembership",
    "description": "<p>Publicize a user's membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.publicizeMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/members/:username",
    "title": "removeMember",
    "name": "removeMember",
    "description": "<p>Remove a member</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.removeMember({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/memberships/:username",
    "title": "removeOrgMembership",
    "name": "removeOrgMembership",
    "description": "<p>Remove organization membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.removeOrgMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "removeOutsideCollaborator",
    "name": "removeOutsideCollaborator",
    "description": "<p>Remove outside collaborator.</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.removeOutsideCollaborator({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/memberships/:username",
    "title": "removeTeamMembership",
    "name": "removeTeamMembership",
    "description": "<p>Remove team membership</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.removeTeamMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p>Unblock a user. (In preview period. See README.)</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.unblockUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org",
    "title": "update",
    "name": "update",
    "description": "<p>Edit an organization</p>",
    "group": "orgs",
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
        "title": "ex:",
        "content": "github.orgs.update({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/projects",
    "title": "createOrgProject",
    "name": "createOrgProject",
    "description": "<p>Create an organization project. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.createOrgProject({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:column_id/cards",
    "title": "createProjectCard",
    "name": "createProjectCard",
    "description": "<p>Create a project card. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.createProjectCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "POST",
    "url": "/projects/:project_id/columns",
    "title": "createProjectColumn",
    "name": "createProjectColumn",
    "description": "<p>Create a project column. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.createProjectColumn({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/projects",
    "title": "createRepoProject",
    "name": "createRepoProject",
    "description": "<p>Create a repository project. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.createRepoProject({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/:id",
    "title": "deleteProject",
    "name": "deleteProject",
    "description": "<p>Delete a project. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.deleteProject({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/cards/:id",
    "title": "deleteProjectCard",
    "name": "deleteProjectCard",
    "description": "<p>Delete a project card. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.deleteProjectCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/:id",
    "title": "deleteProjectColumn",
    "name": "deleteProjectColumn",
    "description": "<p>Delete a project column. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.deleteProjectColumn({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/projects",
    "title": "getOrgProjects",
    "name": "getOrgProjects",
    "description": "<p>List organization projects. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getOrgProjects({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/projects/:id",
    "title": "getProject",
    "name": "getProject",
    "description": "<p>Get a project. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getProject({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/cards/:id",
    "title": "getProjectCard",
    "name": "getProjectCard",
    "description": "<p>Get project card. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getProjectCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:column_id/cards",
    "title": "getProjectCards",
    "name": "getProjectCards",
    "description": "<p>List project cards. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getProjectCards({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:id",
    "title": "getProjectColumn",
    "name": "getProjectColumn",
    "description": "<p>Get a project column. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getProjectColumn({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/projects/:project_id/columns",
    "title": "getProjectColumns",
    "name": "getProjectColumns",
    "description": "<p>List project columns. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getProjectColumns({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/projects",
    "title": "getRepoProjects",
    "name": "getRepoProjects",
    "description": "<p>List repository projects. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.getRepoProjects({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/cards/:id/moves",
    "title": "moveProjectCard",
    "name": "moveProjectCard",
    "description": "<p>Move a project card. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.moveProjectCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:id/moves",
    "title": "moveProjectColumn",
    "name": "moveProjectColumn",
    "description": "<p>Move a project column. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.moveProjectColumn({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/:id",
    "title": "updateProject",
    "name": "updateProject",
    "description": "<p>Update a project. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.updateProject({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/cards/:id",
    "title": "updateProjectCard",
    "name": "updateProjectCard",
    "description": "<p>Update a project card. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.updateProjectCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/:id",
    "title": "updateProjectColumn",
    "name": "updateProjectColumn",
    "description": "<p>Update a project column. (In preview period. See README.)</p>",
    "group": "projects",
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
        "title": "ex:",
        "content": "github.projects.updateProjectColumn({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "checkMerged",
    "name": "checkMerged",
    "description": "<p>Get if a pull request has been merged</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.checkMerged({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "create",
    "name": "create",
    "description": "<p>Create a pull request</p>",
    "group": "pullRequests",
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
            "description": "<p>The title of the pull request.</p>"
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
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
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
        "title": "ex:",
        "content": "github.pullRequests.create({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p>Create a comment</p>",
    "group": "pullRequests",
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
            "description": "<p>Sha of the commit to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>Relative path of the file to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "position",
            "description": "<p>Column index in the diff to comment on.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.pullRequests.createComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createCommentReply",
    "name": "createCommentReply",
    "description": "<p>Reply to existing pull request comment</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.createCommentReply({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "createFromIssue",
    "name": "createFromIssue",
    "description": "<p>Create a pull request from an existing issue</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.createFromIssue({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "createReview",
    "name": "createReview",
    "description": "<p>Create a pull request review.</p>",
    "group": "pullRequests",
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
            "type": "array",
            "optional": true,
            "field": "comments",
            "description": "<p>An array of draft review comment objects. Draft review comments must include a <code>path</code>, <code>position</code>, and <code>body</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.pullRequests.createReview({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "createReviewRequest",
    "name": "createReviewRequest",
    "description": "<p>Create a review request. (In preview period. See README.)</p>",
    "group": "pullRequests",
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
            "type": "array",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user logins that will be requested.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team slugs that will be requested.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.pullRequests.createReviewRequest({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p>Delete a comment</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.deleteComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "deletePendingReview",
    "name": "deletePendingReview",
    "description": "<p>Delete a pending pull request review.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.deletePendingReview({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "deleteReviewRequest",
    "name": "deleteReviewRequest",
    "description": "<p>Delete a review request. (In preview period. See README.)</p>",
    "group": "pullRequests",
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
            "type": "array",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user logins that will be requested.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team slugs that will be requested.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.pullRequests.deleteReviewRequest({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals",
    "title": "dismissReview",
    "name": "dismissReview",
    "description": "<p>Dismiss a pull request review.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.dismissReview({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p>Edit a comment</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.editComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "get",
    "name": "get",
    "description": "<p>Get a single pull request</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List pull requests</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p>Get a single comment</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>List comments on a pull request</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>List comments in a repository</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getCommentsForRepo({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List commits on a pull request</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getCommits({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/files",
    "title": "getFiles",
    "name": "getFiles",
    "description": "<p>List pull requests files</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getFiles({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "getReview",
    "name": "getReview",
    "description": "<p>Get a single pull request review.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getReview({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/comments",
    "title": "getReviewComments",
    "name": "getReviewComments",
    "description": "<p>Get comments for a pull request review.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getReviewComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "getReviewRequests",
    "name": "getReviewRequests",
    "description": "<p>List review requests. (In preview period. See README.)</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getReviewRequests({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "getReviews",
    "name": "getReviews",
    "description": "<p>List reviews on a pull request.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.getReviews({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "merge",
    "name": "merge",
    "description": "<p>Merge a pull request (Merge Button)</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.merge({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/events",
    "title": "submitReview",
    "name": "submitReview",
    "description": "<p>Submit a pull request review.</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.submitReview({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "update",
    "name": "update",
    "description": "<p>Update a pull request</p>",
    "group": "pullRequests",
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
        "title": "ex:",
        "content": "github.pullRequests.update({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "pullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "createForCommitComment",
    "name": "createForCommitComment",
    "description": "<p>Create reaction for a commit comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.createForCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "createForIssue",
    "name": "createForIssue",
    "description": "<p>Create reaction for an issue. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.createForIssue({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "createForIssueComment",
    "name": "createForIssueComment",
    "description": "<p>Create reaction for an issue comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.createForIssueComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "createForPullRequestReviewComment",
    "name": "createForPullRequestReviewComment",
    "description": "<p>Create reaction for a pull request review comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.createForPullRequestReviewComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "DELETE",
    "url": "/reactions/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a reaction. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.delete({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "getForCommitComment",
    "name": "getForCommitComment",
    "description": "<p>List reactions for a commit comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.getForCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "getForIssue",
    "name": "getForIssue",
    "description": "<p>List reactions for an issue. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.getForIssue({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "getForIssueComment",
    "name": "getForIssueComment",
    "description": "<p>List reactions for an issue comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.getForIssueComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "getForPullRequestReviewComment",
    "name": "getForPullRequestReviewComment",
    "description": "<p>List reactions for a pull request review comment. (In preview period. See README.)</p>",
    "group": "reactions",
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
        "title": "ex:",
        "content": "github.reactions.getForPullRequestReviewComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "reactions"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "addCollaborator",
    "name": "addCollaborator",
    "description": "<p>Add user as a collaborator</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.addCollaborator({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/keys",
    "title": "addDeployKey",
    "name": "addDeployKey",
    "description": "<p>Add a new deploy key.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.addDeployKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "addProtectedBranchAdminEnforcement",
    "name": "addProtectedBranchAdminEnforcement",
    "description": "<p>Add admin enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.addProtectedBranchAdminEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "addProtectedBranchRequiredStatusChecksContexts",
    "name": "addProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Add required status checks contexts of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "addProtectedBranchTeamRestrictions",
    "name": "addProtectedBranchTeamRestrictions",
    "description": "<p>Add team restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.addProtectedBranchTeamRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "addProtectedBranchUserRestrictions",
    "name": "addProtectedBranchUserRestrictions",
    "description": "<p>Add user restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.addProtectedBranchUserRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "checkCollaborator",
    "name": "checkCollaborator",
    "description": "<p>Check if user is a collaborator.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.checkCollaborator({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/compare/:base...:head",
    "title": "compareCommits",
    "name": "compareCommits",
    "description": "<p>Compare two commits.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.compareCommits({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/user/repos",
    "title": "create",
    "name": "create",
    "description": "<p>Create a new repository for the authenticated user.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.create({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/commits/:sha/comments",
    "title": "createCommitComment",
    "name": "createCommitComment",
    "description": "<p>Create a commit comment.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments",
    "title": "createDeployment",
    "name": "createDeployment",
    "description": "<p>Create a deployment. (In preview period. See README.)</p>",
    "group": "repos",
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
            "type": "array",
            "optional": true,
            "field": "required_contexts",
            "description": "<p>Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.createDeployment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "createDeploymentStatus",
    "name": "createDeploymentStatus",
    "description": "<p>Create a deployment status. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createDeploymentStatus({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "createFile",
    "name": "createFile",
    "description": "<p>Create a new file in the given repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createFile({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/repos",
    "title": "createForOrg",
    "name": "createForOrg",
    "description": "<p>Create a new repository for an organization.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createForOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Create a hook.</p>",
    "group": "repos",
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
            "type": "array",
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
        "title": "ex:",
        "content": "github.repos.createHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/releases",
    "title": "createRelease",
    "name": "createRelease",
    "description": "<p>Create a release.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createRelease({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/statuses/:sha",
    "title": "createStatus",
    "name": "createStatus",
    "description": "<p>Create a status.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.createStatus({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo",
    "title": "delete",
    "name": "delete",
    "description": "<p>Delete a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.delete({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "deleteAsset",
    "name": "deleteAsset",
    "description": "<p>Delete a release asset.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteAsset({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "deleteCommitComment",
    "name": "deleteCommitComment",
    "description": "<p>Delete a commit comment.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "deleteDeployKey",
    "name": "deleteDeployKey",
    "description": "<p>Remove a deploy key.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteDeployKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "deleteDownload",
    "name": "deleteDownload",
    "description": "<p>Delete a download.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteDownload({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "deleteFile",
    "name": "deleteFile",
    "description": "<p>Delete a file.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteFile({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p>Deleate a hook.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "deleteInvite",
    "name": "deleteInvite",
    "description": "<p>Delete a repository invitation.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteInvite({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "deleteRelease",
    "name": "deleteRelease",
    "description": "<p>Delete a release</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.deleteRelease({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo",
    "title": "edit",
    "name": "edit",
    "description": "<p>Update a repo.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.edit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "editAsset",
    "name": "editAsset",
    "description": "<p>Edit a release asset.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.editAsset({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p>Edit a hook.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": true,
            "field": "events",
            "defaultValue": "[\"push\"",
            "description": "<p>Determines what events the hook is triggered for. This replaces the entire array of events. Default: <code>['push']</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "add_events",
            "description": "<p>Determines a list of events to be added to the list of events that the Hook triggers for.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
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
        "title": "ex:",
        "content": "github.repos.editHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "editRelease",
    "name": "editRelease",
    "description": "<p>Edit a release.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.editRelease({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p>Create a fork.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.fork({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo",
    "title": "get",
    "name": "get",
    "description": "<p>Get a repo for a user.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/user/repos",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List your repositories</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments",
    "title": "getAllCommitComments",
    "name": "getAllCommitComments",
    "description": "<p>List commit comments for a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getAllCommitComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/:archive_format/:ref",
    "title": "getArchiveLink",
    "name": "getArchiveLink",
    "description": "<p>Get archive link.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getArchiveLink({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "getAsset",
    "name": "getAsset",
    "description": "<p>Get a single release asset.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getAsset({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id/assets",
    "title": "getAssets",
    "name": "getAssets",
    "description": "<p>List assets for a release.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getAssets({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch",
    "title": "getBranch",
    "name": "getBranch",
    "description": "<p>Get branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getBranch({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "getBranchProtection",
    "name": "getBranchProtection",
    "description": "<p>Get branch protection.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getBranchProtection({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches",
    "title": "getBranches",
    "name": "getBranches",
    "description": "<p>List branches.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getBranches({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repositories/:id",
    "title": "getById",
    "name": "getById",
    "description": "<p>Get a single repo by id.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getById({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/clones",
    "title": "getClones",
    "name": "getClones",
    "description": "<p>Get the total number of clones and breakdown per day or week for the last 14 days.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getClones({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators",
    "title": "getCollaborators",
    "name": "getCollaborators",
    "description": "<p>List collaborators</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCollaborators({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/status",
    "title": "getCombinedStatusForRef",
    "name": "getCombinedStatusForRef",
    "description": "<p>Get the combined status for a specific ref.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCombinedStatusForRef({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Get a single commit.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCommit({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "getCommitComment",
    "name": "getCommitComment",
    "description": "<p>Get a single commit comment.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/comments",
    "title": "getCommitComments",
    "name": "getCommitComments",
    "description": "<p>List comments for a single commit.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCommitComments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p>List commits on a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCommits({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:name/community/profile",
    "title": "getCommunityProfileMetrics",
    "name": "getCommunityProfileMetrics",
    "description": "<p>Retrieve community profile metrics.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getCommunityProfileMetrics({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "getContent",
    "name": "getContent",
    "description": "<p>Get the contents of a file or directory in a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getContent({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contributors",
    "title": "getContributors",
    "name": "getContributors",
    "description": "<p>Get contributors for the specified repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getContributors({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "getDeployKey",
    "name": "getDeployKey",
    "description": "<p>Get a deploy key.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeployKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys",
    "title": "getDeployKeys",
    "name": "getDeployKeys",
    "description": "<p>List deploy keys.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeployKeys({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:deployment_id",
    "title": "getDeployment",
    "name": "getDeployment",
    "description": "<p>Get a single Deployment. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeployment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses/:status_id",
    "title": "getDeploymentStatus",
    "name": "getDeploymentStatus",
    "description": "<p>List deployment statuses. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeploymentStatus({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "getDeploymentStatuses",
    "name": "getDeploymentStatuses",
    "description": "<p>List deployment statuses. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeploymentStatuses({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments",
    "title": "getDeployments",
    "name": "getDeployments",
    "description": "<p>List deployments.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDeployments({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "getDownload",
    "name": "getDownload",
    "description": "<p>Get a single download.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDownload({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads",
    "title": "getDownloads",
    "name": "getDownloads",
    "description": "<p>List downloads for a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getDownloads({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/repos",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p>List repositories for the specified org.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getForOrg({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/users/:username/repos",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List public repositories for the specified user.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p>List forks.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getForks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p>Get single hook.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p>List hooks.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getHooks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/invitations",
    "title": "getInvites",
    "name": "getInvites",
    "description": "<p>List invitations for a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getInvites({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/languages",
    "title": "getLanguages",
    "name": "getLanguages",
    "description": "<p>Get languages for the specified repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getLanguages({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/latest",
    "title": "getLatestPagesBuild",
    "name": "getLatestPagesBuild",
    "description": "<p>Get latest Pages build. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getLatestPagesBuild({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/latest",
    "title": "getLatestRelease",
    "name": "getLatestRelease",
    "description": "<p>Get the latest release.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getLatestRelease({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages",
    "title": "getPages",
    "name": "getPages",
    "description": "<p>Get information about a Pages site. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getPages({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/:id",
    "title": "getPagesBuild",
    "name": "getPagesBuild",
    "description": "<p>Get a specific Pages build. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getPagesBuild({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "getPagesBuilds",
    "name": "getPagesBuilds",
    "description": "<p>List Pages builds. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getPagesBuilds({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/paths",
    "title": "getPaths",
    "name": "getPaths",
    "description": "<p>Get the top 10 popular contents over the last 14 days.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getPaths({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "getProtectedBranchAdminEnforcement",
    "name": "getProtectedBranchAdminEnforcement",
    "description": "<p>Get admin enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchAdminEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "getProtectedBranchPullRequestReviewEnforcement",
    "name": "getProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Get pull request review enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchPullRequestReviewEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "getProtectedBranchRequiredStatusChecks",
    "name": "getProtectedBranchRequiredStatusChecks",
    "description": "<p>Get required status checks of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchRequiredStatusChecks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "getProtectedBranchRequiredStatusChecksContexts",
    "name": "getProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>List required status checks contexts of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "getProtectedBranchRestrictions",
    "name": "getProtectedBranchRestrictions",
    "description": "<p>Get restrictions of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "getProtectedBranchTeamRestrictions",
    "name": "getProtectedBranchTeamRestrictions",
    "description": "<p>List team restrictions of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchTeamRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "getProtectedBranchUserRestrictions",
    "name": "getProtectedBranchUserRestrictions",
    "description": "<p>List user restrictions of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getProtectedBranchUserRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repositories",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>List all public repositories</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getPublic({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/readme",
    "title": "getReadme",
    "name": "getReadme",
    "description": "<p>Get the README for the given repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getReadme({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/referrers",
    "title": "getReferrers",
    "name": "getReferrers",
    "description": "<p>Get the top 10 referrers over the last 14 days.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getReferrers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "getRelease",
    "name": "getRelease",
    "description": "<p>Get a single release.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getRelease({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/tags/:tag",
    "title": "getReleaseByTag",
    "name": "getReleaseByTag",
    "description": "<p>Get a release by tag name.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getReleaseByTag({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases",
    "title": "getReleases",
    "name": "getReleases",
    "description": "<p>List releases for a repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getReleases({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref",
    "title": "getShaOfCommitRef",
    "name": "getShaOfCommitRef",
    "description": "<p>Get the SHA-1 of a commit reference.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getShaOfCommitRef({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/code_frequency",
    "title": "getStatsCodeFrequency",
    "name": "getStatsCodeFrequency",
    "description": "<p>Get the number of additions and deletions per week.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatsCodeFrequency({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/commit_activity",
    "title": "getStatsCommitActivity",
    "name": "getStatsCommitActivity",
    "description": "<p>Get the last year of commit activity data.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatsCommitActivity({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/contributors",
    "title": "getStatsContributors",
    "name": "getStatsContributors",
    "description": "<p>Get contributors list with additions, deletions, and commit counts.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatsContributors({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/participation",
    "title": "getStatsParticipation",
    "name": "getStatsParticipation",
    "description": "<p>Get the weekly commit count for the repository owner and everyone else.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatsParticipation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/punch_card",
    "title": "getStatsPunchCard",
    "name": "getStatsPunchCard",
    "description": "<p>Get the number of commits per hour in each day.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatsPunchCard({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/statuses",
    "title": "getStatuses",
    "name": "getStatuses",
    "description": "<p>List statuses for a specfic ref.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getStatuses({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/tags",
    "title": "getTags",
    "name": "getTags",
    "description": "<p>Get tags for the specified repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getTags({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>Get teams for the specified repository.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getTeams({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/topics",
    "title": "getTopics",
    "name": "getTopics",
    "description": "<p>List all topics for a repository. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getTopics({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/views",
    "title": "getViews",
    "name": "getViews",
    "description": "<p>Get the total number of views and breakdown per day or week for the last 14 days.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.getViews({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/merges",
    "title": "merge",
    "name": "merge",
    "description": "<p>Perform a merge.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.merge({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>Ping a hook.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.pingHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "removeBranchProtection",
    "name": "removeBranchProtection",
    "description": "<p>Remove branch protection.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeBranchProtection({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "removeCollaborator",
    "name": "removeCollaborator",
    "description": "<p>Remove user as a collaborator.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeCollaborator({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "removeProtectedBranchAdminEnforcement",
    "name": "removeProtectedBranchAdminEnforcement",
    "description": "<p>Remove admin enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchAdminEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "removeProtectedBranchPullRequestReviewEnforcement",
    "name": "removeProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Remove pull request review enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchPullRequestReviewEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "removeProtectedBranchRequiredStatusChecks",
    "name": "removeProtectedBranchRequiredStatusChecks",
    "description": "<p>Remove required status checks of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchRequiredStatusChecks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "removeProtectedBranchRequiredStatusChecksContexts",
    "name": "removeProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Remove required status checks contexts of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "removeProtectedBranchRestrictions",
    "name": "removeProtectedBranchRestrictions",
    "description": "<p>Remove restrictions of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "removeProtectedBranchTeamRestrictions",
    "name": "removeProtectedBranchTeamRestrictions",
    "description": "<p>Remove team restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchTeamRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "removeProtectedBranchUserRestrictions",
    "name": "removeProtectedBranchUserRestrictions",
    "description": "<p>Remove user restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.removeProtectedBranchUserRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "replaceProtectedBranchRequiredStatusChecksContexts",
    "name": "replaceProtectedBranchRequiredStatusChecksContexts",
    "description": "<p>Replace required status checks contexts of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "contexts",
            "description": "<p>An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "replaceProtectedBranchTeamRestrictions",
    "name": "replaceProtectedBranchTeamRestrictions",
    "description": "<p>Replace team restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "teams",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.replaceProtectedBranchTeamRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "replaceProtectedBranchUserRestrictions",
    "name": "replaceProtectedBranchUserRestrictions",
    "description": "<p>Replace user restrictions of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>An array of team slugs (e.g. justice-league).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.replaceProtectedBranchUserRestrictions({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/topics",
    "title": "replaceTopics",
    "name": "replaceTopics",
    "description": "<p>Replace all topics for a repository. (In preview period. See README.)</p>",
    "group": "repos",
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
            "type": "array",
            "optional": false,
            "field": "names",
            "description": "<p>An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.replaceTopics({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "requestPageBuild",
    "name": "requestPageBuild",
    "description": "<p>Request a page build. (In preview period. See README.)</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.requestPageBuild({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username/permission",
    "title": "reviewUserPermissionLevel",
    "name": "reviewUserPermissionLevel",
    "description": "<p>Review a user's permission level.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.reviewUserPermissionLevel({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/tests",
    "title": "testHook",
    "name": "testHook",
    "description": "<p>Test a [push] hook.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.testHook({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "updateBranchProtection",
    "name": "updateBranchProtection",
    "description": "<p>Update branch protection.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.updateBranchProtection({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "updateCommitComment",
    "name": "updateCommitComment",
    "description": "<p>Update a commit comment.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.updateCommitComment({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "updateFile",
    "name": "updateFile",
    "description": "<p>Update a file.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.updateFile({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "updateInvite",
    "name": "updateInvite",
    "description": "<p>Update a repository invitation.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.updateInvite({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "updateProtectedBranchPullRequestReviewEnforcement",
    "name": "updateProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Update pull request review enforcement of protected branch.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.updateProtectedBranchPullRequestReviewEnforcement({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "updateProtectedBranchRequiredStatusChecks",
    "name": "updateProtectedBranchRequiredStatusChecks",
    "description": "<p>Update required status checks of protected branch.</p>",
    "group": "repos",
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
            "type": "array",
            "optional": true,
            "field": "contexts",
            "description": "<p>The list of status checks to require in order to merge into this branch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.repos.updateProtectedBranchRequiredStatusChecks({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "POST",
    "url": "/:url",
    "title": "uploadAsset",
    "name": "uploadAsset",
    "description": "<p>Upload a release asset.</p>",
    "group": "repos",
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
        "title": "ex:",
        "content": "github.repos.uploadAsset({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "repos"
  },
  {
    "type": "GET",
    "url": "/search/code",
    "title": "code",
    "name": "code",
    "description": "<p>Search code.</p>",
    "group": "search",
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
        "title": "ex:",
        "content": "github.search.code({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "GET",
    "url": "/search/commits",
    "title": "commits",
    "name": "commits",
    "description": "<p>Search commits. (In preview period. See README.)</p>",
    "group": "search",
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
        "title": "ex:",
        "content": "github.search.commits({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "GET",
    "url": "/legacy/user/email/:email",
    "title": "email",
    "name": "email",
    "description": "<p>Search against public email addresses.</p>",
    "group": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email address</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.search.email({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "GET",
    "url": "/search/issues",
    "title": "issues",
    "name": "issues",
    "description": "<p>Search issues.</p>",
    "group": "search",
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
        "title": "ex:",
        "content": "github.search.issues({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "GET",
    "url": "/search/repositories",
    "title": "repos",
    "name": "repos",
    "description": "<p>Search repositories.</p>",
    "group": "search",
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
        "title": "ex:",
        "content": "github.search.repos({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "GET",
    "url": "/search/users",
    "title": "users",
    "name": "users",
    "description": "<p>Search users.</p>",
    "group": "search",
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
        "title": "ex:",
        "content": "github.search.users({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "search"
  },
  {
    "type": "PATCH",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "acceptRepoInvite",
    "name": "acceptRepoInvite",
    "description": "<p>Accept a repository invitation.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.acceptRepoInvite({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "POST",
    "url": "/user/emails",
    "title": "addEmails",
    "name": "addEmails",
    "description": "<p>Add email address(es).</p>",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "emails",
            "description": "<p>You can post a single email address or an array of addresses.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.addEmails({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PUT",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.addRepoToInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PUT",
    "url": "/user/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p>Block a user. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.blockUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>Check whether you've blocked a user. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.checkBlockedUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/following/:username",
    "title": "checkFollowing",
    "name": "checkFollowing",
    "description": "<p>Check if you are following a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.checkFollowing({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following/:target_user",
    "title": "checkIfOneFollowersOther",
    "name": "checkIfOneFollowersOther",
    "description": "<p>Check if one user follows another</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.checkIfOneFollowersOther({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "POST",
    "url": "/user/gpg_keys",
    "title": "createGpgKey",
    "name": "createGpgKey",
    "description": "<p>Create a GPG key. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.createGpgKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "POST",
    "url": "/user/keys",
    "title": "createKey",
    "name": "createKey",
    "description": "<p>Create a public key</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.createKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "declineRepoInvite",
    "name": "declineRepoInvite",
    "description": "<p>Decline a repository invitation.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.declineRepoInvite({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/emails",
    "title": "deleteEmails",
    "name": "deleteEmails",
    "description": "<p>Delete email address(es).</p>",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "emails",
            "description": "<p>You can post a single email address or an array of addresses.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.deleteEmails({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/gpg_keys/:id",
    "title": "deleteGpgKey",
    "name": "deleteGpgKey",
    "description": "<p>Delete a GPG key. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.deleteGpgKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/keys/:id",
    "title": "deleteKey",
    "name": "deleteKey",
    "description": "<p>Delete a public key</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.deleteKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/users/:username/site_admin",
    "title": "demote",
    "name": "demote",
    "description": "<p>Demote a site administrator to an ordinary user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.demote({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PATCH",
    "url": "/user/memberships/orgs/:org",
    "title": "editOrgMembership",
    "name": "editOrgMembership",
    "description": "<p>Edit your organization membership.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.editOrgMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PUT",
    "url": "/user/following/:username",
    "title": "followUser",
    "name": "followUser",
    "description": "<p>Follow a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.followUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "get",
    "name": "get",
    "description": "<p>Get the authenticated user</p>",
    "group": "users",
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.get({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>Get all users</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getAll({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List blocked users. (In preview period. See README.)</p>",
    "group": "users",
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.getBlockedUsers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/:id",
    "title": "getById",
    "name": "getById",
    "description": "<p>Get a single user by GitHub ID</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getById({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/emails",
    "title": "getEmails",
    "name": "getEmails",
    "description": "<p>List email addresses for a user.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getEmails({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/followers",
    "title": "getFollowers",
    "name": "getFollowers",
    "description": "<p>List the authenticated user's followers</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getFollowers({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username/followers",
    "title": "getFollowersForUser",
    "name": "getFollowersForUser",
    "description": "<p>List a user's followers</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getFollowersForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/following",
    "title": "getFollowing",
    "name": "getFollowing",
    "description": "<p>List who the authenticated user is following</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getFollowing({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following",
    "title": "getFollowingForUser",
    "name": "getFollowingForUser",
    "description": "<p>List who a user is following</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getFollowingForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>Get a single user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys/:id",
    "title": "getGpgKey",
    "name": "getGpgKey",
    "description": "<p>Get a single GPG key. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getGpgKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys",
    "title": "getGpgKeys",
    "name": "getGpgKeys",
    "description": "<p>List your GPG keys. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getGpgKeys({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username/gpg_keys",
    "title": "getGpgKeysForUser",
    "name": "getGpgKeysForUser",
    "description": "<p>Lists the GPG keys for a user. This information is accessible by anyone. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getGpgKeysForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/installations/:installation_id/repositories",
    "title": "getInstallationRepos",
    "name": "getInstallationRepos",
    "description": "<p>List repositories accessible to the user for an installation. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getInstallationRepos({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List installations. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getInstallations({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/keys/:id",
    "title": "getKey",
    "name": "getKey",
    "description": "<p>Get a single public key</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getKey({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/keys",
    "title": "getKeys",
    "name": "getKeys",
    "description": "<p>List your public keys</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getKeys({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/users/:username/keys",
    "title": "getKeysForUser",
    "name": "getKeysForUser",
    "description": "<p>List public keys for a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getKeysForUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases",
    "title": "getMarketplacePurchases",
    "name": "getMarketplacePurchases",
    "description": "<p>Get a user's Marketplace purchases. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getMarketplacePurchases({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases/stubbed",
    "title": "getMarketplaceStubbedPurchases",
    "name": "getMarketplaceStubbedPurchases",
    "description": "<p>Get a user's stubbed Marketplace purchases. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getMarketplaceStubbedPurchases({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs/:org",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p>Get your organization membership</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getOrgMembership({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs",
    "title": "getOrgMemberships",
    "name": "getOrgMemberships",
    "description": "<p>List your organization memberships</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getOrgMemberships({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/orgs",
    "title": "getOrgs",
    "name": "getOrgs",
    "description": "<p>List organizations for the authenticated user.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getOrgs({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/public_emails",
    "title": "getPublicEmails",
    "name": "getPublicEmails",
    "description": "<p>List public email addresses for a user.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getPublicEmails({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/repository_invitations",
    "title": "getRepoInvites",
    "name": "getRepoInvites",
    "description": "<p>List a user's repository invitations.</p>",
    "group": "users",
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.getRepoInvites({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "GET",
    "url": "/user/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>Get your teams.</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.getTeams({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PUT",
    "url": "/users/:username/site_admin",
    "title": "promote",
    "name": "promote",
    "description": "<p>Promote an ordinary user to a site administrator</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.promote({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.removeRepoFromInstallation({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PUT",
    "url": "/users/:username/suspended",
    "title": "suspend",
    "name": "suspend",
    "description": "<p>Suspend a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.suspend({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PATCH",
    "url": "/user/email/visibility",
    "title": "togglePrimaryEmailVisibility",
    "name": "togglePrimaryEmailVisibility",
    "description": "<p>Toggle primary email visibility.</p>",
    "group": "users",
    "examples": [
      {
        "title": "ex:",
        "content": "github.users.togglePrimaryEmailVisibility({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p>Unblock a user. (In preview period. See README.)</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.unblockUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/user/following/:username",
    "title": "unfollowUser",
    "name": "unfollowUser",
    "description": "<p>Unfollow a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.unfollowUser({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "DELETE",
    "url": "/users/:username/suspended",
    "title": "unsuspend",
    "name": "unsuspend",
    "description": "<p>Unsuspend a user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.unsuspend({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  },
  {
    "type": "PATCH",
    "url": "/user",
    "title": "update",
    "name": "update",
    "description": "<p>Update the authenticated user</p>",
    "group": "users",
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
        "title": "ex:",
        "content": "github.users.update({ ... })",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "users"
  }
] });
