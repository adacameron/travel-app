import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { data } from "./data/flight-offers-search.json";
import { inspirationFlights } from "./data/flight-inspiration-data.json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data} inspirationFlights={inspirationFlights} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
