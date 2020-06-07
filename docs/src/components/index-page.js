import React, { Component } from "react";

import { graphql, StaticQuery, navigate } from "gatsby";

import layoutStyles from "../components/layout.module.css";
import "../components/layout.css";

import Api from "../components/api";
import Search from "../components/search";
import IconMenu from "../components/icon-menu";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.isMenuActive = this.isMenuActive.bind(this);
  }

  onToggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  isMenuActive() {
    return this.state.menuActive;
  }

  onVersionChange(event) {
    // when the version select changes, navigate to the slug
    // set by its <option> value attribute
    navigate(`/` + event.target.value);
  }

  render() {
    return (
      <div>
        <header className={layoutStyles.header}>
          <StaticQuery
            query={graphql`
              {
                siteSearchIndex {
                  index
                }
                # query for git remotes configured for this repo
                allGitRemote(filter: { name: { eq: "rest.js" } }) {
                  nodes {
                    id
                    sourceInstanceName
                  }
                }
                # get the current version as defined in gatsby-config.js
                sitePlugin(name: { eq: "gatsby-plugin-versioned-docs" }) {
                  pluginOptions {
                    currentVersion
                  }
                }
              }
            `}
            render={(data) => {
              const { currentVersion } = data.sitePlugin.pluginOptions;
              return (
                <>
                  <div className={layoutStyles.dropdownSelect}>
                    <select
                      value={this.props.version}
                      onChange={this.onVersionChange}
                    >
                      {/* render the current version and map over the others */}
                      <option value={currentVersion}>
                        Current ({currentVersion})
                      </option>
                      {data.allGitRemote.nodes.map(
                        ({ id, sourceInstanceName }) => (
                          <option key={id} value={sourceInstanceName}>
                            {sourceInstanceName}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <Search
                    searchIndex={data.siteSearchIndex.index}
                    version={this.props.version}
                  />
                </>
              );
            }}
          />
          <button type="button" onClick={this.onToggleMenu}>
            <IconMenu label="Menu" />
          </button>
        </header>

        <div className={layoutStyles.container}>
          <Api
            data={this.props.data}
            isMenuActive={this.isMenuActive}
            onToggleMenu={this.onToggleMenu}
          ></Api>
        </div>
      </div>
    );
  }
}
