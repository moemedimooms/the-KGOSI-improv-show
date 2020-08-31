import React from "react";
import { animated } from "react-spring";

const Scenario = ({ scenario, spring, handleShowReaction }) => {
  return (
    <a className="card-link text-nowrap text-center">
      <animated.span style={{ ...spring, marginRight: "10px" }}>
        <button
          type="button"
          class="btn-lg btn-light mt-3"
          onClick={handleShowReaction}
        >
          {scenario.name}
        </button>
      </animated.span>
    </a>
  );
};

export default Scenario;
