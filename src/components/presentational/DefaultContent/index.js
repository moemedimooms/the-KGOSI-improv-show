import React from "react";
import { motion } from "framer-motion";

const btnStyles = {
  paddingRight: "-120px",
};

const DefaultContent = (props) => {
  return (
    <motion.div
      className="jumbotron"
      animate={{ scale: [0.99, 1] }}
      transition={{ duration: 0.75, easeIn: true }}
    >
      <p className="h4 font-weight-lighter">
        <motion.span
          animate={{ opacity: [0.2, 1] }}
          transition={{ duration: 1.2, easeIn: true }}
        >
          I have a legendary nephew named Kgosi - he can re-enact scenarions
          like an improv pro
        </motion.span>
      </p>
      <div className="text-right">
        <motion.button
          type="button"
          className="btn-lg btn-light mt-3"
          styles={btnStyles}
          onClick={props.handleViewScenarios}
          animate={{
            opacity: [0.1, 1],
            paddingRight: "10px",
            fontSize: ["120%", "118%"],
          }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          view scenarios
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DefaultContent;
