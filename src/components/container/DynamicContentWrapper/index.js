import React, { Component } from "react";
import scenarios from "./data";
import DefaultContent from "../../presentational/DefaultContent";

class DynamicContentWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarios,
    };
  }

  render() {
    let dynamicContent = <DefaultContent />;

    return (
      <div className="container dynamic-content-wrapper mt-4">
        {dynamicContent}
      </div>
    );
  }
}

export default DynamicContentWrapper;
