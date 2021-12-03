/* eslint-disable no-console */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
// import axios from "axios";
// import GetToken from "../requests/GetToken";
import SearchFlight from "./SearchFlight";
import NavBar from "./NavBar";
import SearchHotel from "./SearchHotel";
// import getOffers from "../requests/getOffers";
import getOriginSearch from "../requests/getOriginOffers";

function App() {
  const [searchText, setSearchText] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(0);

  const handleOriginSearch = () => {
    getOriginSearch(searchText, locationCode, departureDate, adults);
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <SearchFlight
              searchText={searchText}
              setSearchText={setSearchText}
              locationCode={locationCode}
              setLocationCode={setLocationCode}
              departureDate={departureDate}
              setDepartureDate={setDepartureDate}
              adults={adults}
              setAdults={setAdults}
              onSearch={handleOriginSearch}
            />
          }
        />

        <Route path="/hotels" element={<SearchHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
