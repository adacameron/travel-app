/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import FlightDatesDeparture from "./FlightDatesDeparture";
import FlightSummaries from "./FlightSummaries";

const FlightResults = () => {
  return (
    <div className="flight-results">
      <FlightDatesDeparture city={origin.city} />
      <FlightSummaries />
    </div>
  );
};

export default FlightResults;
