const { getInstance } = require("../util");

require("../mocha-node-setup");

describe("api.github.com", () => {
  let octokit;

  beforeEach(() => {
    return getInstance("project-cards", {
      auth: "token 0000000000000000000000000000000000000001"
    }).then(instance => {
      octokit = instance;
    });
  });

  it("octokit.projects.*ProjectCard()", () => {
    return octokit.projects
      .createCard({
        column_id: 1000,
        note: "Example card 1"
      })

      .then(() => {
        return octokit.projects.createCard({
          column_id: 1000,
          note: "Example card 2"
        });
      })

      .then(() => {
        return octokit.projects.listCards({
          column_id: 1000
        });
      })

      .then(() => {
        return octokit.projects.getCard({
          card_id: 1000
        });
      })

      .then(() => {
        return octokit.projects.updateCard({
          card_id: 1000,
          note: "Example card 1 updated"
        });
      })

      .then(() => {
        return octokit.projects.moveCard({
          card_id: 1000,
          position: "top",
          column_id: 1001
        });
      })

      .then(() => {
        return octokit.projects.moveCard({
          card_id: 1001,
          position: "bottom",
          column_id: 1001
        });
      })

      .then(() => {
        return octokit.projects.moveCard({
          card_id: 1000,
          position: "after:1001"
        });
      })

      .then(() => {
        return octokit.projects.deleteCard({
          card_id: 1000
        });
      });
  });
});
