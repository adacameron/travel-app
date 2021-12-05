/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import "../styles/inspirationflightdetails.css";

const InspirationFlightDetails = ({ inspirationFlight }) => {
  const { destination, price } = inspirationFlight;
  return (
    <div
      className="flight-details"
      style={{ border: "3px solid purple", textAlign: "center" }}
    >
      <div className="flight-details__image">
        {/* {image} */}
        <p>Image</p>
      </div>
      <div className="flight-details__destination">{destination}</div>

      <div className="flight-details__price">£{price.total}</div>
      <button type="button" className="flight-details__button">
        Book Flight
      </button>
    </div>
  );
};

InspirationFlightDetails.propTypes = {
  inspirationFlight: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string,
      price: PropTypes.shape({
        total: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default InspirationFlightDetails;
