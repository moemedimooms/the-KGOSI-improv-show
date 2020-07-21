import React from "react";

const Scenarios = (props) => {
  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <h3 class="card-subtitle mb-2 text-muted">available scenarios</h3>
        {props.scenarios.map((s) => {
          return (
            <a className="card-link text-nowrap text-center" key={s.id}>
              <button
                type="button"
                class="btn-lg btn-light mt-3"
                onClick={props.handleShowReaction}
              >
                {s.name}
              </button>
            </a>
          );
        })}
        );
      </div>
    </div>
  );
};

export default Scenarios;
