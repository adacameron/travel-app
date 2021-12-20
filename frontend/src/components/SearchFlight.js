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
    <form className="search-form">
      <ul className="search-form-container">
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
        <h4 className="form-row">Any destination</h4>
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
            Budget £{" "}
          </label>
          <div className="input-box">
            <input
              type="number"
              id="budget-input"
              name="budget-input"
              onChange={handleInputChangePrice}
              value={maxPrice}
              placeholder="£"
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
