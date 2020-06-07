import kebabCase from "lodash/kebabCase";

export function createGroupIdName({ fieldValue }) {
  return kebabCase(fieldValue.slice("docs/".length));
}
