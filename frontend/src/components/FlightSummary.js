/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import "../styles/flightsummary.css";

const FlightSummary = (props) => {
  const { destination, price, onSelect, photo } = props;

  return (
    <div className="flight-summary">
      <div className="flight-summary__image">
        <img src={photo} alt="travel" />
      </div>
      <div className="flight-summary__destination">{destination}</div>

      <div className="flight-summary__price">£{price.total} per person</div>
      <button
        type="button"
        onClick={() => onSelect(destination)}
        className="flight-summary__button"
      >
        Select Flight
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
  photo: PropTypes.string.isRequired,
};

export default FlightSummary;
