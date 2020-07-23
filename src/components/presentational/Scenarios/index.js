import React from "react";
import { useTrail, animated } from "react-spring";
import "./index.css";

const Scenarios = (props) => {
  const springs = useTrail(props.scenarios.length, {
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
            <a
              className="card-link text-nowrap text-center"
              key={props.scenarios[index].id}
            >
              <animated.span
                key={index}
                style={{ ...spring, marginRight: "10px" }}
              >
                <button
                  type="button"
                  class="btn-lg btn-light mt-3"
                  onClick={props.handleShowReaction}
                >
                  {props.scenarios[index].name}
                </button>
              </animated.span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Scenarios;
