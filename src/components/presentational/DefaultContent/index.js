import React from "react";
import { useSpring, animated } from "react-spring";

const DefaultContent = (props) => {
  const txtSpring = useSpring({
    from: {
      opacity: 0.2,
    },
    to: {
      opacity: 1,
    },
    config: {
      mass: 4,
    },
  });
  const btnSpring = useSpring({
    from: {
      opacity: 0,
      paddingRight: "-10px",
    },
    to: {
      opacity: 1,
      paddingRight: "0px",
    },
    config: {
      mass: 12,
    },
  });

  return (
    <div className="jumbotron">
      <p className="h4 font-weight-lighter">
        <animated.span style={{ ...txtSpring }}>
          I have a legendary nephew named Kgosi - he can re-enact scenarions
          like an improv pro
        </animated.span>
      </p>
      <div className="text-right">
        <animated.span style={{ ...btnSpring }}>
          <button
            type="button"
            class="btn-lg btn-light mt-3"
            onClick={props.handleViewScenarios}
          >
            view scenarios
          </button>
        </animated.span>
      </div>
    </div>
  );
};

export default DefaultContent;
