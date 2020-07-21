import React from "react";
import { useSpring, animated } from "react-spring";
import "./index.css";

const Reaction = (props) => {
  let [scenario] = [...props.matchedScenarios];
  const spring = useSpring({
    from: {
      opacity: 0.4,
    },
    to: {
      opacity: 1,
    },
    config: {
      mass: 16,
    },
  });

  return scenario ? (
    <div
      className="alert alert-light alert-dismissible fade show text-center"
      role="alert"
    >
      <p className="text-primary">
        <h4 className="">
          Kgosi is <span className="font-weight-bold">{scenario.name}</span>
        </h4>
        because {scenario.reason}
      </p>

      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.handleCloseReaction}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <animated.span style={{ ...spring }}>
        <img
          className="card-img-top mr-3"
          src={scenario.imgURL}
          alt={`Kgosi ${scenario.imgURL}`}
        />
      </animated.span>
    </div>
  ) : null;
};

export default Reaction;
