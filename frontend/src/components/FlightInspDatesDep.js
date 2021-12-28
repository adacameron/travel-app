import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/flightdatesdeparture.css";

const FlightInspDatesDep = (props) => {
  const { inspOriginData, departureDate } = props;
  return (
    <div className="flight-dates-departure">
      <div className="flight-dates-departure__dates">
        Departing on {moment(departureDate).format("ddd Do MMM")}{" "}
      </div>
      <div className="flight-dates-departure__origin-destination">
        {`${inspOriginData} - ANYWHERE`}{" "}
      </div>
    </div>
  );
};

FlightInspDatesDep.propTypes = {
  inspOriginData: PropTypes.string.isRequired,
  departureDate: PropTypes.number.isRequired,
};

export default FlightInspDatesDep;
