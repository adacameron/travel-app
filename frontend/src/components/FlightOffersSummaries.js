/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import FlightOffersSummary from "./FlightOffersSummary";
import "../styles/flightofferssummary.css";
import FlightDatesDeparture from "./FlightDatesDeparture";

const FlightOffersSummaries = ({
  data,
  onFlightSelect,
  photos,
  departureDate,
}) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const dataAndPhotos = data.map((flight) => {
    const randomPhotoIndex = getRandomInt(photos.length);
    return {
      ...flight,
      photo: photos[randomPhotoIndex].src.original,
    };
  });

  return (
    <>
      <div className="flight-details-card">
        <FlightDatesDeparture
          origin={data[0].itineraries[0].segments[0].departure.iataCode}
          passengers={Object.keys(data[0].travelerPricings).length}
          destination={data[0].itineraries[0].segments[0].arrival.iataCode}
          departureDate={departureDate}
        />
      </div>
      <div className="flight-offers-summaries">
        {dataAndPhotos.map((flight) => (
          <FlightOffersSummary
            key={flight.id}
            arrival={flight.itineraries[0].segments[0].arrival.iataCode}
            price={flight.price.base}
            duration={flight.itineraries[0].segments[0].duration}
            onSelect={onFlightSelect}
            photo={flight.photo}
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
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.shape({
        original: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default FlightOffersSummaries;
