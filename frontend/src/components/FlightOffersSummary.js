/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

const FlightOffersSummary = (props) => {
  const { arrival, price, duration, onSelect, photo } = props;
  console.log(photo, "photo");
  return (
    <div className="flight-offers-summary">
      <div className="flight-offers-summary__image">
        <img src={photo} alt="travel" />
      </div>
      <div className="flight-offers-summary__destination">{arrival}</div>
      <div className="flight-offers-summary__duration">{duration}</div>
      <div className="flight-offers-summary__price">£{price}</div>
      <button
        type="button"
        onClick={() => onSelect(console.log("tbc - link to external site"))}
        className="flight-offers-summary__button"
      >
        Book Flight
      </button>
    </div>
  );
};

FlightOffersSummary.propTypes = {
  arrival: PropTypes.shape({
    iataCode: PropTypes.string,
  }).isRequired,
  price: PropTypes.shape({
    base: PropTypes.number,
  }).isRequired,
  duration: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};

export default FlightOffersSummary;