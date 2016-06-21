# CHANGELOG

## 1.2.1

Bugfixes:
  * Allow empty string for path param for getContent.

## 1.2.0

Features:
  * Add support to allow api stuff under preview period.
  * Add assignees preview param for issues endpoints.
  * Add issues#lock/unlock.
  * Add some more examples.
  * Add pull request merge squash preview params.
  * Add list/get/delete grant(s) endpoints.
  * Add params for create authorization.
  * Add get-or-create-authorization-for-app endpoint.
  * Add add get-or-create-authorization-for-app-and-fingerprint.
  * Add check/reset/revoke authorization endpoints.
  * Add get-events-timeline endpoint.

Bugfixes:
  * Fix custom headers not persisting across pages.
  * Make path param required for get-content.
  * If user specifies protocol = http, use port 80 rather than default 443.
