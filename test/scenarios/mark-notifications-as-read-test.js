const { getInstance } = require("../util");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("mark-notifications-as-read", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.activity.markAsRead()", () => {
    return octokit.activity.markAsRead();
  });
});
