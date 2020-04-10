import React, { Component } from "react";
import parse, { domToReact } from "html-react-parser";

export default class EndPoint extends Component {
  constructor(props) {
    super(props);
    this.headlineRef = React.createRef();
    this.onIntersection = this.onIntersection.bind(this);
  }

  componentDidMount() {
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (!supportsIntersectionObserver) {
      return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    const observer = new IntersectionObserver(this.onIntersection, {
      threshold: 0,
      rootMargin: "0% 0% -90% 0%",
    });
    const target = this.headlineRef.current;

    observer.observe(target);
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(`EndPoint.entry.intersectionRatio: ${entry.intersectionRatio}`)
        if (entry.intersectionRatio >= 0.1) {
          // console.log(`EndPoint.onIntersection ${this.props.method.id}`)
          this.props.onVisible(this.props.method.fieldValue);
        }
      }
    });
  }

  render() {
    const { fields, html } = this.props.method;
    return (
      <React.Fragment>
        {parse(html, {
          replace: (domNode) => {
            // replace h1 with h3 to fit the heading heirarchy of the
            // endpoint groups
            if (domNode.name === "h1") {
              return (
                <h3
                  ref={this.headlineRef}
                  id={this.props.groupIdName + "-" + fields.idName}
                >
                  {domToReact(domNode.children)}
                </h3>
              );
            }
          },
        })}
      </React.Fragment>
    );
  }
}
