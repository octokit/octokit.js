import React, { Component } from "react"
import apiStyles from './api.module.css'

export default class ApiSubMenu extends Component {
  constructor(props) {
    super(props)
    this.onUserInteraction       = this.onUserInteraction.bind(this)
    this.isActive                = this.isActive.bind(this)
    this.getPrimaryLinkClassName = this.getPrimaryLinkClassName.bind(this)
  }

  onUserInteraction() {
    this.props.onUserInteraction(this.props.node.id)
  }

  isActive() {
    return this.props.isActive(this.props.node.id)
  }

  getPrimaryLinkClassName() {
    // console.log(`ApiSubMenu.getPrimaryLinkClassName / this.props.activeMenuItem: ${this.props.activeMenuItem} / this.props.node.id: ${this.props.node.id}`)
    return [
      this.props.getActiveMenuItem() === this.props.node.id ? apiStyles.activemenuitem : "",
      this.isActive() ? apiStyles.activelink : ""
    ].filter(Boolean).join(" ")
  }

  render() {
    return (
      <li key={this.props.node.id}>
        <a href={`#${this.props.node.id}`}
          onClick={this.onUserInteraction}
          className={this.getPrimaryLinkClassName()}>{this.props.node.name}</a>
        <ol className={this.isActive() ? "" : apiStyles.subhidden}>
          {this.props.node.methods.map((method) => {
            return <li key={method.id}>
              <a href={`#${method.id}`} className={this.props.getActiveMenuItem() === method.id ? apiStyles.activemenuitem : ""}>{method.name}</a>
            </li>
          })}
        </ol>
      </li>
    )
  }
}
