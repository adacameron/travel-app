import React from "react";
import "../styles/SearchFlight.css";
import PropTypes from "prop-types";
import Footer from "./Footer";

const SearchFlight = ({
  searchText,
  setSearchText,
  locationCode,
  setLocationCode,
  departureDate,
  setDepartureDate,
  adults,
  setAdults,
  onSearch,
  origin,
  setOrigin,
  inspOnSearch,
  maxPrice,
  setMaxPrice,
  inspDepartureDate,
  setInspDepartureDate,
  days,
  setDays,
}) => {
  // FLIGHT OFFERS //
  const handleInputChange = (event) => setSearchText(event.target.value);

  const handleInputChangeLoc = (event) => setLocationCode(event.target.value);

  const handleInputChangeDept = (event) => setDepartureDate(event.target.value);

  const handleInputChangeAdults = (event) => setAdults(event.target.value);

  // FLIGHT INSPIRATION //
  const handleInputChangeOrigin = (event) => setOrigin(event.target.value);

  const handleInputChangeInspDate = (event) =>
    setInspDepartureDate(event.target.value);

  const handleInputChangePrice = (event) => setMaxPrice(event.target.value);

  const handleInputChangeDays = (event) => setDays(event.target.value);
  return (
    <>
      <div className="search-form-background">
        <div className="search-form-container">
          <form className="search-form">
            <ul className="search-form-list">
              <h4 className="form-row">Search flights by destination...</h4>
              <li className="form-row">
                <label className="form-label" htmlFor="origin-input">
                  Origin{" "}
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="origin-input"
                    name="origin-input"
                    onChange={handleInputChange}
                    value={searchText}
                  />
                </div>
              </li>

              <li className="form-row">
                <label className="form-label" htmlFor="dest-input">
                  Destination{" "}
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="dest-input"
                    name="dest-input"
                    onChange={handleInputChangeLoc}
                    value={locationCode}
                  />
                </div>
              </li>

              <li className="form-row">
                {" "}
                <label className="form-label" htmlFor="dep-date-input">
                  Depart date{" "}
                </label>
                <div className="input-box">
                  <input
                    type="date"
                    id="dep-date-input"
                    name="dep-date-input"
                    onChange={handleInputChangeDept}
                    value={departureDate}
                  />
                </div>
              </li>

              <li className="form-row">
                <label className="form-label" htmlFor="adult-input">
                  Adults{" "}
                </label>
                <div className="input-box">
                  <input
                    type="number"
                    id="adult-input"
                    name="adult-input"
                    onChange={handleInputChangeAdults}
                    value={adults}
                  />
                </div>
              </li>
              <li className="form-row">
                <button type="button" onClick={onSearch}>
                  Search flights
                </button>
              </li>
              {/* FLIGHT INSPIRATION API FORM */}
              <h4 className="form-row">...Or search all destinations</h4>
              <li className="form-row">
                <label className="form-label" htmlFor="insp-origin-input">
                  Origin{" "}
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="insp-origin-input"
                    name="insp-origin-input"
                    onChange={handleInputChangeOrigin}
                    value={origin}
                  />
                </div>
              </li>
              <li className="form-row">
                {" "}
                <label className="form-label" htmlFor="insp-date-input">
                  Depart date{" "}
                </label>
                <div className="input-box">
                  <input
                    type="date"
                    id="insp-date-input"
                    name="insp-date-input"
                    onChange={handleInputChangeInspDate}
                    value={inspDepartureDate}
                  />
                </div>
              </li>
              <li className="form-row">
                {" "}
                <label className="form-label" htmlFor="days-input">
                  Days{" "}
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="days-input"
                    name="days-input"
                    onChange={handleInputChangeDays}
                    value={days}
                  />
                </div>
              </li>
              <li className="form-row">
                {" "}
                <label className="form-label" htmlFor="budget-input">
                  Budget{" "}
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="budget-input"
                    name="budget-input"
                    onChange={handleInputChangePrice}
                    value={maxPrice}
                  />
                </div>
              </li>

              <li className="form-row">
                <button type="button" onClick={inspOnSearch}>
                  Search all destinations
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchFlight;

SearchFlight.propTypes = {
  adults: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  departureDate: PropTypes.string.isRequired,
  inspDepartureDate: PropTypes.string.isRequired,
  inspOnSearch: PropTypes.func.isRequired,
  locationCode: PropTypes.string.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onSearch: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  setAdults: PropTypes.func.isRequired,
  setDays: PropTypes.func.isRequired,
  setDepartureDate: PropTypes.func.isRequired,
  setInspDepartureDate: PropTypes.func.isRequired,
  setLocationCode: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
  setOrigin: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
