import React from "react";

import graph from "./chart.js";

const App = () => {
  return <Route path="/" component={graph} exact />;
};
export default App;
