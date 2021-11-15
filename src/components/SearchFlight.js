import React from "react";

const SearchFlight = () => {
  return (
    <div className="search-form-container">
      <div className="search-form">
        <form>
          <div className="origin-input-box">
            <label htmlFor="origin-input">
              Origin
              <input type="text" id="origin-input" name="origin-input" />
            </label>
          </div>

          <div className="dep-date-input-box">
            <label htmlFor="dep-date-input">
              Depart date
              <input type="date" id="dep-date-input" name="dep-date-input" />
            </label>
          </div>

          <div className="ret-date-input-box">
            <label htmlFor="ret-date-input">
              Return date
              <input type="date" id="ret-date-input" name="ret-date-input" />
            </label>
          </div>

          <label htmlFor="passenger-select-input">
            Passengers
            <select id="passenger-select-input" name="passenger-select-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchFlight;
