/* istanbul ignore file */

import { request } from "@octokit/request";

import { Octokit } from "../src";

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

export type OctokitType = Unpacked<ReturnType<typeof getInstance>>;
type OptionsWithUrl = { url: string };
type OctokitOptions = ConstructorParameters<typeof Octokit>[0];

export function loadFixture(scenario: string) {
  return request("POST http://localhost:3000/fixtures", {
    data: JSON.stringify({ scenario }),
  })
    .then((response) => response.data)

    .catch((error) => {
      if (error.status === "ECONNREFUSED") {
        throw new Error(
          'Fixtures server could not be reached. Make sure to start it with "npm run start-fixtures-server"'
        );
      }

      throw error;
    });
}

export function fixtureToInstance(
  { url }: OptionsWithUrl,
  options?: OctokitOptions
) {
  return new Octokit(
    Object.assign(options || {}, {
      baseUrl: url,
    })
  );
}

export function getInstance(scenario: string, options?: OctokitOptions) {
  return loadFixture(scenario).then((fixture) =>
    fixtureToInstance(fixture, options)
  );
}
