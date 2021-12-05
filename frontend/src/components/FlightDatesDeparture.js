/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";

const FlightDatesDeparture = ({ city }) => {
  return (
    <div
      className="flight-dates-departure"
      style={{ border: "3px solid purple", textAlign: "center" }}
    >
      <div className="flight-dates-departure__origin">
        Flying from: [Origin city] {`${city}`}{" "}
      </div>
      <p>[Passengers]:</p>
      <p>From [Departure Date] to [Return Date]</p>
    </div>
  );
};

FlightDatesDeparture.propTypes = {
  city: PropTypes.string.isRequired,
};

export default FlightDatesDeparture;
