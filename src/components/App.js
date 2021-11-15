/* eslint-disable no-console */
import React from "react";
import "../styles/App.css";
import GetFlight from "./GetFlight";
import GetToken from "../requests/GetToken";
import SearchFlight from "./SearchFlight";

// console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <>
      <GetFlight />
      <GetToken />
      <SearchFlight />
    </>
  );
}

export default App;
