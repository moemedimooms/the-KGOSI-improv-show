import React from "react";
import { motion } from "framer-motion";

// for jumbotron animation
const jumbotronAnimate = {
  scale: [0.98, 1.01, 1],
  borderTopRightRadius: ["55%", "2%"],
};
const jumbotronTransition = { duration: 0.75, easeIn: true };

// for p tag animation
const pAnimate = { opacity: [0.2, 1] };
const pTransition = { duration: 1.2, easeIn: true };

// for button animation
const btnStyles = {
  paddingRight: "-120px",
};
const btnAnimate = {
  opacity: [0.1, 1],
  paddingRight: "10px",
  fontSize: ["120%", "118%"],
};
const btnTransition = { duration: 1.5, delay: 1 };

const DefaultContent = (props) => {
  return (
    <motion.div
      className="jumbotron"
      animate={jumbotronAnimate}
      transition={jumbotronTransition}
    >
      <motion.p
        className="h4 font-weight-lighter"
        animate={pAnimate}
        transition={pTransition}
      >
        I have a nephew named Kgosi, he can re-enact scenes like an improv pro
      </motion.p>
      <div className="text-right">
        <motion.button
          type="button"
          className="btn-lg btn-light mt-3"
          styles={btnStyles}
          onClick={props.handleViewScenarios}
          animate={btnAnimate}
          transition={btnTransition}
        >
          view scenes
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DefaultContent;
