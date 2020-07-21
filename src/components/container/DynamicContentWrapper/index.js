import React, { Component } from "react";
import scenarios from "./data";
import DefaultContent from "../../presentational/DefaultContent";

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
      dynamicContent = <h3>placeholder for scenarios</h3>;
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
