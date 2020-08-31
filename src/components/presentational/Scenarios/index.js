import React from "react";
import { useTrail } from "react-spring";
import "./index.css";

import Scenario from "../Scenario";

const Scenarios = ({ scenarios, handleShowReaction }) => {
  const springs = useTrail(scenarios.length, {
    from: {
      opacity: 0.2,
    },
    to: {
      opacity: 1,
    },
    config: {
      mass: 7,
    },
  });

  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <p class="card-subtitle display-4 mb-2 font-weight-bold text-muted">
          available scenarios
        </p>
        {springs.map((spring, index) => {
          return (
            <Scenario
              key={scenarios[index].id}
              spring={spring}
              handleShowReaction={handleShowReaction}
              scenario={scenarios[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scenarios;
