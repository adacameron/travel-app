/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/*eslint-disable*/
import React, { useState } from "react";
import "../styles/inspirationflightdetails.css";
import flightsymbol from "../assets/flightsymbol.svg";
import madrid from "../assets/madrid.jpg";
import FlightDetailsNav from "./FlightDetailsNav";
import BookingForm from "./BookingForm";

const OffersFlightDetails = () => {
  const [showForm, setShowForm] = useState(false);
  function buttonConfirm() {
    //confirm("Click to review and book your trip on an external site");
    setShowForm(true);
  }
  return (
    <>
      <>
        <FlightDetailsNav />
        {showForm ? (
          <BookingForm />
        ) : (
          <div className="flight-details">
            <div className="flight-details__image">
              <img src={madrid} alt="travel" />
            </div>
            <div className="flight-details__outbound-box">
              <div className="flight-details__outbound"> OUTBOUND</div>
              <div className="flight-details__outbound-date">
                Thur 6 Jan 2021
              </div>
              <div className="flight-details__flightsymbol">
                <img src={flightsymbol} alt="travel" />
              </div>
              <div className="flight-details__outbound-time">09:50</div>
              <div className="flight-details__outbound-airport">LGW</div>
              <div className="flight-details__return-time">13:15</div>
              <div className="flight-details__arriving-airport">MAD</div>
              <div className="flight-details__duration">2hr25</div>
            </div>
            <div className="flight-details__button-box">
              <div className="flight-details__total">TOTAL £44.00</div>
              <div className="flight-details__adults">2 adults</div>

              <button
                type="button"
                className="flight-details__button"
                onClick={() => buttonConfirm()}
              >
                Book Flights
              </button>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default OffersFlightDetails;
