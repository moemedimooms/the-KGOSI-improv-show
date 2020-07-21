import React from "react";
import { useTrail, animated } from "react-spring";

const Scenarios = (props) => {
  const springs = useTrail(props.scenarios.length, {
    from: {
      opacity: 0.2,
      transform: "translateY(-5px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    config: {
      mass: 7,
    },
  });

  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <h3 class="card-subtitle mb-2 text-muted">available scenarios</h3>
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
