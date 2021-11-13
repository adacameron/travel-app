/* eslint-disable no-console */
import React from "react";
import "../styles/App.css";
import GetFlight from "./GetFlight";
import GetToken from "../requests/GetToken";

// console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  return (
    <>
      <GetFlight />
      <GetToken />
    </>
  );
}

export default App;
