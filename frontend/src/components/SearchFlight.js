/* eslint-disable no-console */
import React from "react";
import "../styles/SearchFlight.css";
import PropTypes from "prop-types";
// import getOffers from "../requests/getOffers";

// const handleSearch = (event) => {
//   event.preventDefault();
//   getOffers();
// };

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
  // console.log(searchText);
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
    <div className="search-form-container">
      <div className="search-form">
        <form>
          <div className="origin-input-box">
            <label className="form-label" htmlFor="origin-input">
              Origin
              <input
                type="text"
                id="origin-input"
                name="origin-input"
                onChange={handleInputChange}
                value={searchText}
              />
            </label>
          </div>

          <div className="dest-input-box">
            <label className="form-label" htmlFor="dest-input">
              Destination
              <input
                type="text"
                id="dest-input"
                name="dest-input"
                onChange={handleInputChangeLoc}
                value={locationCode}
              />
            </label>
          </div>

          <div className="dep-date-input-box">
            <label className="form-label" htmlFor="dep-date-input">
              Depart date
              <input
                type="date"
                id="dep-date-input"
                name="dep-date-input"
                onChange={handleInputChangeDept}
                value={departureDate}
              />
            </label>
          </div>

          <div className="adults-input-box">
            <label className="form-label" htmlFor="adult-input">
              Adults
              <input
                type="number"
                id="adult-input"
                name="adult-input"
                onChange={handleInputChangeAdults}
                value={adults}
              />
            </label>
          </div>

          <button type="button" onClick={onSearch}>
            Search flights
          </button>
          {/* FLIGHT INSPIRATION API FORM */}
          <h3>Any destination</h3>
          <div className="insp-origin-input-box">
            <label className="form-label" htmlFor="insp-origin-input">
              Origin
              <input
                type="text"
                id="insp-origin-input"
                name="insp-origin-input"
                onChange={handleInputChangeOrigin}
                value={origin}
              />
            </label>
            <div className="insp-date-input-box">
              <label className="form-label" htmlFor="insp-date-input">
                Depart date
                <input
                  type="date"
                  id="insp-date-input"
                  name="insp-date-input"
                  onChange={handleInputChangeInspDate}
                  value={inspDepartureDate}
                />
              </label>
            </div>
            <div className="days-input-box">
              <label className="form-label" htmlFor="days-input">
                Days
                <input
                  type="text"
                  id="days-input"
                  name="days-input"
                  onChange={handleInputChangeDays}
                  value={days}
                />
              </label>
            </div>
            <div className="budget-input-box">
              <label className="form-label" htmlFor="budget-input">
                Budget £
                <input
                  type="number"
                  id="budget-input"
                  name="budget-input"
                  onChange={handleInputChangePrice}
                  value={maxPrice}
                />
              </label>
            </div>
          </div>
          <button type="button" onClick={inspOnSearch}>
            Search all destinations
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFlight;

SearchFlight.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  locationCode: PropTypes.string.isRequired,
  setLocationCode: PropTypes.func.isRequired,
  departureDate: PropTypes.string.isRequired,
  setDepartureDate: PropTypes.func.isRequired,
  adults: PropTypes.number.isRequired,
  setAdults: PropTypes.func.isRequired,
  inspOnSearch: PropTypes.func.isRequired,
  inspDepartureDate: PropTypes.string.isRequired,
  setInspDepartureDate: PropTypes.func.isRequired,
  days: PropTypes.string.isRequired,
  setDays: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  setOrigin: PropTypes.func.isRequired,
};
