import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./UI/HomePage/HomePage";

function App() {
  return (
    <div>
      {/* routes available  */}
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" render={() => <h1>Projects</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  );
}

export default App;
