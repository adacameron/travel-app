import React from "react";
import "../styles/SearchFlight.css";
import PropTypes from "prop-types";
import getOffers from "../requests/getOffers";

const handleSearch = (event) => {
  event.preventDefault();
  getOffers();
};

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
}) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  const handleInputChangeLoc = (event) => setLocationCode(event.target.value);

  const handleInputChangeDept = (event) => setDepartureDate(event.target.value);

  const handleInputChangeAdults = (event) => setAdults(event.target.value);

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

          {/* <div className="ret-date-input-box">
            <label className="form-label" htmlFor="ret-date-input">
              Return date
              <input type="date" id="ret-date-input" name="ret-date-input" />
            </label>
          </div> */}

          <label className="form-label" htmlFor="passenger-select-input">
            Passengers
            <select id="passenger-select-input" name="passenger-select-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <button type="button" onClick={onSearch}>
            Search flights
          </button>
          <button type="button" onClick={handleSearch}>
            Search offers
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
};
