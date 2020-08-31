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
  const leftTxtSpring = useSpring({
    from: {
      transform: "translateX(-5px)",
    },
    to: {
      transform: "translateX(0px)",
    },
    config: {
      mass: 16,
    },
  });
  const rightTxtSpring = useSpring({
    from: {
      transform: "translateX(5px)",
    },
    to: {
      transform: "translateX(0px)",
    },
    config: {
      mass: 12,
    },
  });

  return scenario ? (
    <div
      className="alert alert-light alert-dismissible fade show text-center"
      role="alert"
    >
      <p className="text-primary">
        <animated.div style={{ ...rightTxtSpring }}>
          <h4 className="">
            Kgosi is <span className="font-weight-bold">{scenario.name}</span>
          </h4>
        </animated.div>
        <animated.div style={{ ...leftTxtSpring }}>
          because{" "}
          <span className="font-weight-light scenario-reason">
            {scenario.reason}
          </span>
        </animated.div>
      </p>

      <button
        type="button"
        className="close"
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
