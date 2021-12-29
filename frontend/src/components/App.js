import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/App.css";
import SearchFlight from "./SearchFlight";
import NavBar from "./NavBar";
import FlightSummaries from "./FlightSummaries";
import FlightOffersSummaries from "./FlightOffersSummaries";
import FlightDetailsInspiration from "./FlightDetailsInspiration";
import FlightDetailsOffers from "./FlightDetailsOffers";
import getOffersSearch from "../requests/getOffersSearch";
import getImages from "../requests/getImages";
import getLocation from "../requests/getLocation";
import getOriginLocation from "../requests/getOriginLocation";
import getInspOrigin from "../requests/getInspOrigin";
import getInspirationSearch from "../requests/getInspirationSearch";

const App = ({ airports }) => {
  const navigate = useNavigate();

  // IMAGES API //
  const [images, setImages] = useState("");
  // FLIGHT OFFERS API //
  const [searchText, setSearchText] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [flightResults, setFlightResults] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [originData, setOriginData] = useState([]);
  // FLIGHT INSPIRATION API //
  const [origin, setOrigin] = useState("");
  const [inspDepartureDate, setInspDepartureDate] = useState("");
  const [days, setDays] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [inspirationResults, setInspirationResults] = useState([]);
  const [inspOriginData, setInspOriginData] = useState([]);

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
    setImages(imageResults);
    const destinationResults = await getLocation(locationCode);
    setDestinationData(destinationResults);
    const originResults = await getOriginLocation(searchText);
    setOriginData(originResults);
    navigate("/flight-offers-summaries");
  };
  const selectedOffersFlight = flightResults.find(
    (flight) =>
      flight.itineraries[0].segments[0].arrival.iataCode === locationCode
  );

  const handleInspirationSearch = async (event) => {
    event.preventDefault();
    const inspResults = await getInspirationSearch(
      origin,
      inspDepartureDate,
      days,
      maxPrice
    );
    setInspirationResults(inspResults);
    const inspOriginResults = await getInspOrigin(origin);
    setInspOriginData(inspOriginResults);
    const imageResults = await getImages();
    setImages(imageResults);
    navigate("/flight-inspiration-summaries");
  };
  const selectedInspFlight = inspirationResults.find((flight) => flight);

  const handleInspirationSelect = () => {
    setMaxPrice(maxPrice);
    navigate("/inspiration-flight-details");
  };

  const handleOffersSelect = () => {
    setDestinationData(destinationData);
    navigate("/offers-flight-details");
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
              data={inspirationResults}
              photos={images}
              inspOriginData={inspOriginData}
              airports={airports}
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
              photos={images}
              destinationData={destinationData}
              originData={originData}
              onFlightSelect={handleOffersSelect}
            />
          }
        />

        <Route
          path="/offers-flight-details"
          element={
            <>
              {selectedOffersFlight && (
                <FlightDetailsOffers data={selectedOffersFlight} />
              )}
            </>
          }
        />

        <Route
          path="/inspiration-flight-details"
          element={
            <>
              {selectedInspFlight && (
                <FlightDetailsInspiration data={selectedInspFlight} />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
};

App.propTypes = {
  airports: PropTypes.arrayOf(
    PropTypes.shape({
      itineraries: PropTypes.string,
      iataCode: PropTypes.string,
    })
  ).isRequired,
};

export default App;
