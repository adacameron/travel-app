/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import FlightOffersSummary from "./FlightOffersSummary";
import "../styles/flightofferssummary.css";
import FlightDatesDeparture from "./FlightDatesDeparture";

const FlightOffersSummaries = ({ data, onFlightSelect }) => {
  return (
    <>
      <div className="flight-details-card">
        <FlightDatesDeparture />
      </div>
      <div className="flight-offers-summaries">
        {data.map((flight) => (
          <FlightOffersSummary
            key={flight.price}
            arrival={flight.itineraries[0].segments[0].arrival.iataCode}
            price={flight.price.base}
            duration={flight.itineraries[0].segments[0].duration}
            onSelect={onFlightSelect}
          />
        ))}
      </div>
    </>
  );
};

FlightOffersSummaries.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itineraries: PropTypes.arrayOf(
        PropTypes.shape({
          segments: PropTypes.arrayOf(
            PropTypes.shape({
              arrival: PropTypes.shape({
                iataCode: PropTypes.string,
              }),
              duration: PropTypes.string,
            })
          ),
        })
      ),
    }),
    PropTypes.shape({
      price: PropTypes.shape({
        base: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
  onFlightSelect: PropTypes.func.isRequired,
};

export default FlightOffersSummaries;
