import React from "react";
import "./index.css";

const Reaction = (props) => {
  let [scenario] = [...props.matchedScenarios];

  return scenario ? (
    <div
      class="alert alert-light alert-dismissible fade show text-center"
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
      <img
        className="card-img-top mr-3"
        src={scenario.imgURL}
        alt={`Kgosi ${scenario.imgURL}`}
      />
    </div>
  ) : null;
};

export default Reaction;
