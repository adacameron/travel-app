/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const FlightDatesDeparture = (props) => {
  const { originData, passengers, departureDate, destinationData } = props;
  console.log(destinationData, "destinationData");
  return (
    <div
      className="flight-dates-departure"
      style={{ border: "3px solid purple", textAlign: "center" }}
    >
      <div className="flight-dates-departure__passengers">
        {`${passengers}`} Adults{" "}
      </div>
      <div className="flight-dates-departure__origin-destination">
        {`${originData} - ${destinationData}`}{" "}
      </div>
      <div className="flight-dates-departure__dates">
        Departing on {moment(departureDate).format("ddd Do MMM")}{" "}
      </div>
    </div>
  );
};

FlightDatesDeparture.propTypes = {
  originData: PropTypes.string.isRequired,
  destinationData: PropTypes.string.isRequired,
  departureDate: PropTypes.number.isRequired,
  passengers: PropTypes.number.isRequired,
};

export default FlightDatesDeparture;
