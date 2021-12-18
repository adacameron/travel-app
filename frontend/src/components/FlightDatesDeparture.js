import React from "react";
import PropTypes from "prop-types";

const FlightDatesDeparture = (props) => {
  const { destination, origin, passengers, departureDate, returnDate } = props;

  return (
    <div
      className="flight-dates-departure"
      style={{ border: "3px solid purple", textAlign: "center" }}
    >
      <div className="flight-dates-departure__passengers">
        {`${passengers}`} Adults{" "}
      </div>
      <div className="flight-dates-departure__origin-destination">
        {`${origin} - ${destination}`}{" "}
      </div>
      <div className="flight-dates-departure__dates">
        <p>Departure date - return date:</p>
        {`${departureDate} - ${returnDate}`}{" "}
      </div>
    </div>
  );
};

FlightDatesDeparture.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  departureDate: PropTypes.number.isRequired,
  returnDate: PropTypes.number.isRequired,
  passengers: PropTypes.number.isRequired,
};

export default FlightDatesDeparture;
