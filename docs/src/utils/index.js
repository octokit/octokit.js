import kebabCase from "lodash/kebabCase";

export function createGroupIdName({ fieldValue }) {
  return kebabCase(fieldValue.slice(fieldValue.lastIndexOf("/") + 1));
}
