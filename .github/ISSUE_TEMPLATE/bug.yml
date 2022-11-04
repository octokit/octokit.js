name: Bug
description: File a bug report
title: "[BUG]: "
labels: ["Type: Bug", "Status: Triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: What did you do? What happened? What did you expect to happen?
      placeholder: Put your description of the bug here.
    validations:
      required: true
  - type: textarea
    id: versions
    attributes:
      label: Versions
      description: What versions of the relevant software are you running?
      placeholder: Octokit.js v2.0.10, Node v16.18.0
    validations:
      required: true
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: |
        Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
        Please check your logs before submission to ensure sensitive information is redacted.
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
