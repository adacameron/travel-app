import React, { useState } from "react";
import "../styles/inspirationflightdetails.css";
import flightsymbol from "../assets/flightsymbol.svg";
import amsterdam from "../assets/amsterdam.jpg";
import FlightDetailsInspNav from "./FlightDetailsInspNav";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

const FlightDetailsInspiration = () => {
  const [showFlightDetailsInspNav, setShowFlightDetailsInspNav] =
    useState(true);
  const [showForm, setShowForm] = useState(false);
  function buttonConfirm() {
    setShowForm(true);
    setShowFlightDetailsInspNav(false);
  }
  return (
    <>
      <>
        <>
          <>{showFlightDetailsInspNav && <FlightDetailsInspNav />}</>
          {showForm ? (
            <BookingForm />
          ) : (
            <div className="flight-details">
              <div className="flight-details__image">
                <img src={amsterdam} alt="travel" />
              </div>
              <div className="flight-details__outbound-box">
                <div className="flight-details__outbound"> OUTBOUND</div>
                <div className="flight-details__outbound-date">
                  Thur 6 Jan 2021
                </div>
                <div className="flight-details__flightsymbol">
                  <img src={flightsymbol} alt="travel" />
                </div>
                <div className="flight-details__outbound-time">11:45</div>
                <div className="flight-details__outbound-airport">LHR</div>
                <div className="flight-details__return-time">14:05</div>
                <div className="flight-details__arriving-airport">AMS</div>
                <div className="flight-details__duration">1hr20</div>
              </div>
              <div className="flight-details__button-box">
                <div className="flight-details__total">TOTAL £104.40</div>
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
      <Footer />
    </>
  );
};

export default FlightDetailsInspiration;
