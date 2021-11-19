/* eslint-disable no-console */
import React from "react";
import "../styles/App.css";
import GetToken from "../requests/GetToken";
import SearchFlight from "./SearchFlight";

function App() {
  return (
    <>
      <GetToken />
      <SearchFlight />
    </>
  );
}

export default App;
