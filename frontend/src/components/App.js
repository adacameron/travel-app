/* eslint-disable no-console */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
// import GetToken from "../requests/GetToken";
import SearchFlight from "./SearchFlight";
import NavBar from "./NavBar";
import SearchHotel from "./SearchHotel";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<SearchFlight />} />

        <Route path="/hotels" element={<SearchHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
