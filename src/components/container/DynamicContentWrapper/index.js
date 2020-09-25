import React, { Component } from "react";
import scenarios from "../../../DATA/index";

import DefaultContent from "../../presentational/DefaultContent";
import Reaction from "../../presentational/Reaction";
import Scenarios from "../../presentational/Scenarios";

/*
 **it qualifies as a container component because it has local state whose values it passes
 **down to child components via props
 */
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

  handleCloseReaction = () => {
    this.setState({
      showingReaction: false,
      showingScenarios: true,
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

  handleViewScenarios = () => {
    this.setState({
      showingScenarios: true,
      showingReaction: false,
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
        <Reaction
          matchedScenarios={this.state.matchedScenarios}
          handleCloseReaction={this.handleCloseReaction}
        />
      );
    } else {
      dynamicContent = (
        <DefaultContent handleViewScenarios={this.handleViewScenarios} />
      );
    }

    return (
      <div className="container dynamic-content-wrapper mt-4 mb-4">
        {dynamicContent}
      </div>
    );
  }
}

export default DynamicContentWrapper;
