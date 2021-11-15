import React from "react";

const SearchFlight = () => {
  return (
    <div className="search-form-container">
      <div className="search-form">
        <form>
          <ul>
            <li className="origin-search">
              <div className="origin-input-box">
                <label htmlFor="origin-input">
                  Origin
                  <input type="text" id="origin-input" name="origin-input" />
                </label>
              </div>
            </li>
            <li className="dep-date-search">
              <div className="dep-date-input-box">
                <label htmlFor="dep-date-input">
                  Depart date
                  <input
                    type="date"
                    id="dep-date-input"
                    name="dep-date-input"
                  />
                </label>
              </div>
            </li>
            <li className="ret-date-search">
              <div className="ret-date-input-box">
                <label htmlFor="ret-date-input">
                  Return date
                  <input
                    type="date"
                    id="ret-date-input"
                    name="ret-date-input"
                  />
                </label>
              </div>
            </li>
            <li className="passenger-select">
              <label htmlFor="passenger-select-input">
                Passengers
                <select
                  id="passenger-select-input"
                  name="passenger-select-input"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
            </li>
            <li className="search-button">
              <button type="submit">Search</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default SearchFlight;
