import React from "react";

const DefaultContent = (props) => {
  return (
    <div className="jumbotron">
      <p className="h4 font-weight-lighter">
        I have a nephew named Kgosi, really dope dude - his reactions to
        sceanrios are the stuff of legends
      </p>
      <div className="text-right">
        <button
          type="button"
          class="btn-lg btn-light mt-3"
          onClick={props.handleViewScenarios}
        >
          view scenarios
        </button>
      </div>
    </div>
  );
};

export default DefaultContent;
