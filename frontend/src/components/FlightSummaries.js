import React from "react";
import FlightSummary from "./FlightSummary";

const FlightSummaries = () => {
  return (
    <div
      className="flight-summaries"
      style={{ border: "3px solid orange", textAlign: "center" }}
    >
      <h1>Flight Summaries</h1>

      <FlightSummary />
      <FlightSummary />
      <FlightSummary />
    </div>
  );
};

export default FlightSummaries;
