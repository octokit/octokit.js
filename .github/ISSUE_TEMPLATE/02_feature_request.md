name: "🧚‍♂️ Feature Request"
about: "Wouldn’t it be nice if 💭"
labels: feature
---

- type: checkboxes
  id: search
  attributes:
    label: Please avoid duplicates
    options:
      - label: I checked [all open feature requests](https://github.com/octokit/octokit.js/issues?q=is%3Aissue+is%3Aopen+label%3Afeature) and none of them matched my problem.
        required: true
- type: textarea
  id: summary
  attributes:
    label: What’s missing?
    description: Describe your feature idea
  validations:
    required: true
- type: textarea
  id: why
  attributes:
    label: Why?
    description: Describe the problem you are facing
  validations:
    required: true
- type: textarea
  id: summary
  attributes:
    label: Alternatives you tried
    description: Describe the workarounds you tried so far and how they worked for you
  validations:
    required: true
