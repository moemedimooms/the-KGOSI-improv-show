import React from "react";

import Header from "./components/presentational/Header";
import DynamicContentWrapper from "./components/container/DynamicContentWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <DynamicContentWrapper />
    </div>
  );
}

export default App;
