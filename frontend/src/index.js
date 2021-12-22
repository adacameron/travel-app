import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { airports } from "./data/airportcodes.json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App airports={airports} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
