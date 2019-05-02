import React, { Component } from "react";
import EndPoint from "../components/endpoint";

export default class EndPointGroup extends Component {
  constructor(props) {
    super(props);
    this.headlineRef = React.createRef();
    this.onIntersection = this.onIntersection.bind(this);
    this.onVisibleEndPoint = this.onVisibleEndPoint.bind(this);
  }

  componentDidMount() {
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (!supportsIntersectionObserver) {
      return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    const observer = new IntersectionObserver(this.onIntersection, {
      threshold: 0,
      rootMargin: "0% 0% -90% 0%"
    });
    const target = this.headlineRef.current;

    observer.observe(target);
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(
          `EndPointGroup.entry.intersectionRatio: ${entry.intersectionRatio}`
        );
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
        console.log(`isAbove ${isAbove}`);
        console.log(`entry.boundingClientRect.y ${entry.boundingClientRect.y}`);
        console.log(`entry.rootBounds.y ${entry.rootBounds.y}`);

        if (entry.intersectionRatio >= 0.1) {
          console.log(`EndPointGroup.onIntersection ${this.props.node.id}`);
          this.props.onVisibleEndPointGroup(this.props.node.id);
        }
      }
    });
  }

  onVisibleEndPoint(id) {
    this.props.onVisibleEndPoint(id);
  }

  render() {
    return (
      <React.Fragment>
        <h2 id={this.props.node.id} ref={this.headlineRef}>
          {this.props.node.name}
        </h2>
        {this.props.node.methods.map(method => {
          return (
            <EndPoint
              key={method.id}
              method={method}
              onVisible={this.onVisibleEndPoint}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
