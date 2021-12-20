/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/App.css";
import SearchFlight from "./SearchFlight";
import NavBar from "./NavBar";
import getOffersSearch from "../requests/getOffersSearch";
import getInspirationSearch from "../requests/getInspirationSearch";
import FlightSummaries from "./FlightSummaries";
import FlightOffersSummaries from "./FlightOffersSummaries";
import InspirationFlightDetails from "./InspirationFlightDetails";
import getImages from "../requests/getImages";
import getLocation from "../requests/getLocation";
import getOriginLocation from "../requests/getOriginLocation";

const App = ({ inspirationFlights }) => {
  // IMAGES API //
  const [images, setImages] = useState("");
  // FLIGHT OFFERS API //
  const [searchText, setSearchText] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [flightResults, setFlightResults] = useState([]);

  // FLIGHT INSPIRATION API //
  const [origin, setOrigin] = useState("");
  const [inspDepartureDate, setInspDepartureDate] = useState("");
  const [days, setDays] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [inspirationDestination, setInspirationDestination] = useState(
    inspirationFlights[0].destination
  );
  const [inspirationResults, setInspirationResults] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [originData, setOriginData] = useState([]);
  const navigate = useNavigate();
  const handleOriginSearch = async (event) => {
    event.preventDefault();
    const results = await getOffersSearch(
      searchText,
      locationCode,
      departureDate,
      adults
    );
    setFlightResults(results);
    const location = await getLocation(locationCode);
    const imageResults = await getImages(location);
    const destinationResults = await getLocation(locationCode);
    const originResults = await getOriginLocation(searchText);
    setImages(imageResults);
    setDestinationData(destinationResults);
    setOriginData(originResults);
    navigate("/flight-offers-summaries");
  };

  const handleInspirationSearch = async () => {
    setInspirationResults(
      await getInspirationSearch(origin, inspDepartureDate, days, maxPrice)
    );
    setImages(await getImages());
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

        <Route
          path="/flight-inspiration-summaries"
          element={
            <FlightSummaries
              inspirationFlights={inspirationResults}
              onFlightSelect={handleInspirationSelect}
            />
          }
        />

        <Route
          path="/flight-offers-summaries"
          element={
            <FlightOffersSummaries
              departureDate={departureDate}
              data={flightResults}
              onFlightSelect={handleInspirationSelect}
              photos={images}
              destinationData={destinationData}
              originData={originData}
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
