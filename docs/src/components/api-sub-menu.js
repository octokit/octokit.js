import React, { Component } from "react";
import apiStyles from "./api.module.css";

import { titleCase } from "title-case";
import { createGroupIdName } from "../utils";

export default class ApiSubMenu extends Component {
  constructor(props) {
    super(props);
    this.onUserInteraction = this.onUserInteraction.bind(this);
    this.isActive = this.isActive.bind(this);
    this.getPrimaryLinkClassName = this.getPrimaryLinkClassName.bind(this);
  }

  onUserInteraction() {
    this.props.onUserInteraction(this.props.node.fieldValue);
  }

  isActive() {
    return this.props.isActive(this.props.node.fieldValue);
  }

  getPrimaryLinkClassName() {
    return [
      this.props.getActiveMenuItem() === this.props.node.fieldValue &&
        apiStyles.activemenuitem,
      this.isActive() && apiStyles.activelink,
    ]
      .filter(Boolean)
      .join(" ");
  }

  render() {
    const idName = createGroupIdName(this.props.node);
    return (
      <li>
        <a
          href={`#${idName}`}
          onClick={this.onUserInteraction}
          className={this.getPrimaryLinkClassName()}
        >
          {titleCase(idName)}
        </a>
        <ol className={this.isActive() ? undefined : apiStyles.subhidden}>
          {this.props.node.edges.map(({ node }) => {
            const subIdName = idName + "-" + node.fields.idName;
            return (
              <li key={node.id}>
                <a
                  href={`#${subIdName}`}
                  className={
                    this.props.getActiveMenuItem() === subIdName
                      ? apiStyles.activemenuitem
                      : undefined
                  }
                >
                  {node.headings[0].value}
                </a>
              </li>
            );
          })}
        </ol>
      </li>
    );
  }
}
