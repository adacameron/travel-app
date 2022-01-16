/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import FlightOffersSummary from "./FlightOffersSummary";
import "../styles/flightofferssummary.css";
import FlightDatesDeparture from "./FlightDatesDeparture";

const FlightOffersSummaries = ({
  data,
  photos,
  departureDate,
  destinationData,
  onFlightSelect,
  originData,
}) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const dataAndPhotos = data.map((flight) => {
    const randomPhotoIndex = getRandomInt(photos.length);
    return {
      ...flight,
      photo: photos[randomPhotoIndex].src.medium,
      destination: destinationData,
    };
  });
  return (
    <>
      <div className="flight-details-card">
        <FlightDatesDeparture
          originData={originData}
          passengers={Object.keys(data[0].travelerPricings).length}
          destinationData={destinationData}
          departureDate={departureDate}
        />
      </div>
      <div className="flight-offers-summaries">
        {dataAndPhotos.map((flight) => (
          <FlightOffersSummary
            key={flight.id}
            destination={flight.destination}
            price={flight.price.base}
            duration={flight.itineraries[0].segments[0].duration}
            photo={flight.photo}
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
      }),
    }),
    PropTypes.shape({
      travelerPricings: PropTypes.arrayOf(
        PropTypes.shape({
          travelerId: PropTypes.string,
          fareOption: PropTypes.string,
          travelerType: PropTypes.string,
          price: PropTypes.shape({
            currency: PropTypes.string,
            total: PropTypes.string,
            base: PropTypes.string,
          }),
          fareDetailsBySegment: PropTypes.arrayOf(
            PropTypes.shape({
              segmentId: PropTypes.string,
              cabin: PropTypes.string,
              fareBasis: PropTypes.string,
              brandedFare: PropTypes.string,
              class: PropTypes.string,
              includedCheckedBags: PropTypes.shape({
                quantity: PropTypes.number,
              }),
            })
          ),
        })
      ),
    })
  ).isRequired,
  departureDate: PropTypes.string.isRequired,
  destinationData: PropTypes.string.isRequired,
  onFlightSelect: PropTypes.func.isRequired,
  originData: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.shape({
        medium: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default FlightOffersSummaries;
