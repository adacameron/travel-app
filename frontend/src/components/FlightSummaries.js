import React from "react";
import PropTypes from "prop-types";
import FlightSummary from "./FlightSummary";
import "../styles/flightsummaries.css";
import FlightDatesDeparture from "./FlightDatesDeparture";

const FlightSummaries = ({ inspirationFlights, onFlightSelect }) => {
  return (
    <>
      <div className="flight-details-card">
        <FlightDatesDeparture />
      </div>
      <div className="flight-summaries">
        {inspirationFlights.map((inspirationFlight) => (
          <FlightSummary
            key={inspirationFlight.price}
            destination={inspirationFlight.destination}
            price={inspirationFlight.price}
            onSelect={onFlightSelect}
          />
        ))}
      </div>
    </>
  );
};

FlightSummaries.propTypes = {
  inspirationFlights: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string,
      price: PropTypes.shape({
        total: PropTypes.number,
      }),
    })
  ).isRequired,
  onFlightSelect: PropTypes.func.isRequired,
};

export default FlightSummaries;
