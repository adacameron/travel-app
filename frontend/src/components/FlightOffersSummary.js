/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

const FlightOffersSummary = (props) => {
  const { destination, price, duration, onSelect, photo } = props;

  const newDuration = duration.slice(2).toLowerCase();

  return (
    <div className="flight-offers-summary">
      <div className="flight-offers-summary__image">
        <img src={photo} alt="travel" />
      </div>
      <div className="flight-offers-summary__destination">{destination}</div>
      <div className="flight-offers-summary__duration">{newDuration}</div>
      <div className="flight-offers-summary__price">£{price} per person</div>
      <button
        type="button"
        onClick={() => onSelect(destination, price, duration, photo)}
        className="flight-offers-summary__button"
      >
        Select Flight
      </button>
    </div>
  );
};

FlightOffersSummary.propTypes = {
  destination: PropTypes.string.isRequired,
  price: PropTypes.shape({
    base: PropTypes.number,
  }).isRequired,
  duration: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};

export default FlightOffersSummary;
