import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/flightdatesdeparture.css";

const FlightDatesDeparture = (props) => {
  const { originData, passengers, departureDate, destinationData } = props;
  return (
    <div className="flight-dates-departure">
      <div className="flight-dates-departure__passengers-date">
        {`${passengers}`} Adults | Departing on{" "}
        {moment(departureDate).format("ddd Do MMM")}{" "}
      </div>
      <div className="flight-dates-departure__origin-destination">
        {`${originData} - ${destinationData}`}{" "}
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
