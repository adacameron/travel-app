/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import mockimage from "../assets/mockimage.jpg";

const FlightOffersSummary = (props) => {
  const { arrival, price, duration, onSelect } = props;
  return (
    <div className="flight-offers-summary">
      <div className="flight-offers-summary__image">
        <img src={mockimage} alt="mock" />
      </div>
      <div className="flight-offers-summary__destination">{arrival}</div>
      <div className="flight-offers-summary__duration">{duration}</div>
      <div className="flight-offers-summary__price">{price}</div>
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
};

export default FlightOffersSummary;
