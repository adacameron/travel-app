/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const FlightInspDatesDep = (props) => {
  const { inspOriginData, departureDate, inspDestinationData } = props;
  console.log(inspDestinationData, "destinationData");
  return (
    <div
      className="flight-dates-departure"
      style={{ border: "3px solid purple", textAlign: "center" }}
    >
      <div className="flight-dates-departure__origin-destination">
        {`${inspOriginData} - ANYWHERE`}{" "}
      </div>
      <div className="flight-dates-departure__dates">
        Departing on {moment(departureDate).format("ddd Do MMM")}{" "}
      </div>
    </div>
  );
};

FlightInspDatesDep.propTypes = {
  inspOriginData: PropTypes.string.isRequired,
  inspDestinationData: PropTypes.string.isRequired,
  departureDate: PropTypes.number.isRequired,
};

export default FlightInspDatesDep;
