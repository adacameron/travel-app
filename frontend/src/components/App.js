/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/App.css";
import SearchFlight from "./SearchFlight";
import NavBar from "./NavBar";
import SearchHotel from "./SearchHotel";
// import getOffers from "../requests/getOffers";
import getOffersSearch from "../requests/getOffersSearch";
import getInspirationSearch from "../requests/getInspirationSearch";
import FlightSummaries from "./FlightSummaries";
import FlightOffersSummaries from "./FlightOffersSummaries";
import InspirationFlightDetails from "./InspirationFlightDetails";

const App = ({ data, inspirationFlights }) => {
  // FLIGHT OFFERS API //
  const [searchText, setSearchText] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(0);

  // FLIGHT INSPIRATION API //
  const [origin, setOrigin] = useState("");
  const [inspDepartureDate, setInspDepartureDate] = useState("");
  const [days, setDays] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [inspirationDestination, setInspirationDestination] = useState(
    inspirationFlights[0].destination
  );

  const navigate = useNavigate();
  const handleOriginSearch = () => {
    getOffersSearch(searchText, locationCode, departureDate, adults);
  };

  const handleInspirationSearch = async () => {
    await getInspirationSearch(origin, inspDepartureDate, days, maxPrice);
    navigate("/flight-inspiration-summaries");
  };
  const selectedInspirationFlight = inspirationFlights.find(
    (inspirationFlight) =>
      inspirationFlight.destination === inspirationDestination
  );

  const handleInspirationSelect = (destination) => {
    setInspirationDestination(destination);
  };

  return (
    <>
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
              origin={origin}
              setOrigin={setOrigin}
              inspDepartureDate={inspDepartureDate}
              setInspDepartureDate={setInspDepartureDate}
              days={days}
              setDays={setDays}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              inspOnSearch={handleInspirationSearch}
            />
          }
        />
        <Route path="/hotels" element={<SearchHotel />} />

        <Route
          path="/flight-inspiration-summaries"
          element={
            <FlightSummaries
              inspirationFlights={inspirationFlights}
              onFlightSelect={handleInspirationSelect}
            />
          }
        />

        <Route
          path="/flight-offers-summaries"
          element={
            <FlightOffersSummaries
              data={data}
              onFlightSelect={handleInspirationSelect}
            />
          }
        />

        <Route
          path="/inspiration-flight-details"
          element={
            <>
              {selectedInspirationFlight && (
                <InspirationFlightDetails
                  inspirationFlight={inspirationFlights[0]}
                />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itineraries: PropTypes.arrayOf(
        PropTypes.shape({
          segments: PropTypes.arrayOf(
            PropTypes.shape({
              arrival: PropTypes.shape({
                iataCode: PropTypes.string,
              }),
            })
          ),
        })
      ),
    }),
    PropTypes.shape({
      price: PropTypes.shape({
        base: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
  inspirationFlights: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string,
      price: PropTypes.shape({
        total: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default App;
