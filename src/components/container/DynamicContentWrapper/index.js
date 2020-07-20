import React, { Component } from "react";
//import "./index.css";
//import scenarios from "./data";

class DynamicContentWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //scenarios,
    };
  }

  render() {
    let dynamicContent = <h1>placeholder for dynamic contents</h1>;

    return (
      <div className="container dynamic-content-wrapper mt-4">
        {dynamicContent}
      </div>
    );
  }
}

export default DynamicContentWrapper;
