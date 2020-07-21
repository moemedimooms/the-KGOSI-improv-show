import React, { Component } from "react";
import scenarios from "./data";

import DefaultContent from "../../presentational/DefaultContent";
import Scenarios from "../../presentational/Scenarios";

class DynamicContentWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarios,
      showingScenarios: false,
    };
  }

  handleViewScenarios = () => {
    this.setState({
      showingScenarios: true,
    });
  };

  render() {
    let dynamicContent = null;
    if (this.state.showingScenarios) {
      dynamicContent = <Scenarios scenarios={this.state.scenarios} />;
    } else {
      dynamicContent = (
        <DefaultContent handleViewScenarios={this.handleViewScenarios} />
      );
    }

    return (
      <div className="container dynamic-content-wrapper mt-4">
        {dynamicContent}
      </div>
    );
  }
}

export default DynamicContentWrapper;
