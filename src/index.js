import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Axios from "axios";

Axios.defaults.baseURL = "https://portofolio-2c5fd.firebaseio.com";

ReactDOM.render(
  <HashRouter basename={window.location.pathname || ""}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
