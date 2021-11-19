import React from "react";
import "../styles/SearchHotel.css";

const SearchHotel = () => {
  return (
    <div className="search-form-container">
      <div className="search-form">
        <form>
          <div className="destination-input-box">
            <label className="form-label" htmlFor="destination-input">
              Destination
              <input
                type="text"
                id="destination-input"
                name="destination-input"
              />
            </label>
          </div>

          <div className="check-in-input-box">
            <label className="form-label" htmlFor="check-in-input">
              Check-in
              <input type="date" id="check-in-input" name="check-in-input" />
            </label>
          </div>

          <div className="check-out-input-box">
            <label className="form-label" htmlFor="check-out-input">
              Check-out
              <input type="date" id="check-out-input" name="check-out-input" />
            </label>
          </div>

          <label className="form-label" htmlFor="guest-select-input">
            Guests
            <select id="guest-select-input" name="guest-select-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <button type="submit">Search hotels</button>
        </form>
      </div>
    </div>
  );
};

export default SearchHotel;
