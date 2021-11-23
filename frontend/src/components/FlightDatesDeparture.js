/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";

const FlightDatesDeparture = ({ city }) => {
  return (
    <div
      className="flight-dates-departure"
      style={{ border: "3px solid green", textAlign: "center" }}
    >
      <h1>FlightDatesDeparture</h1>

      <div className="flight-dates-departure__origin">{`${city}`} </div>

      <p> \\\\\ Location</p>
      <p>Passengers \\\\\ Economy</p>
      <p>Departure Date \\\\\ Return Date</p>
    </div>
  );
};

FlightDatesDeparture.propTypes = {
  city: PropTypes.string.isRequired,
};

export default FlightDatesDeparture;
