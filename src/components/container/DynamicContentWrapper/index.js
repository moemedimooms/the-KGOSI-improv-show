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
      showingReaction: false,
      matchedScenarios: [],
    };
  }

  handleViewScenarios = () => {
    this.setState({
      showingScenarios: true,
      showingReaction: false,
    });
  };

  handleShowReaction = (e) => {
    let matchedScenarios = scenarios.filter((s) => {
      return (
        s.name.toLowerCase().trim() === e.target.innerHTML.toLowerCase().trim()
      );
    });
    this.setState({
      matchedScenarios,
      showingReaction: true,
      showingScenarios: false,
    });
  };

  render() {
    let dynamicContent = null;
    if (this.state.showingScenarios) {
      dynamicContent = (
        <Scenarios
          scenarios={this.state.scenarios}
          handleShowReaction={this.handleShowReaction}
        />
      );
    } else if (this.state.showingReaction) {
      dynamicContent = (
        <h3>placeholder for reaction that corresponds to clicked scenario</h3>
      );
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
