/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import "../styles/flightsummary.css";
import mockimage from "../assets/mockimage.jpg";

const FlightSummary = (props) => {
  const { destination, price, onSelect } = props;
  return (
    <div className="flight-summary">
      <div className="flight-summary__image">
        <img src={mockimage} alt="mock" />
      </div>
      <div className="flight-summary__destination">{destination}</div>

      <div className="flight-summary__price">£{price.total} per person</div>
      <button
        type="button"
        onClick={() => onSelect(console.log("tbc - link to external site"))}
        className="flight-summary__button"
      >
        Book Flight
      </button>
    </div>
  );
};

FlightSummary.propTypes = {
  destination: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  price: PropTypes.shape({
    total: PropTypes.number,
  }).isRequired,
};

export default FlightSummary;
