/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import SearchRandom from "./SearchRandom";
// import Data from "./data.json";

function AutoComplete({ flight }) {
  const [filteredData, setFilteredData] = useState([]);
  const [everywhere, setEveryWhere] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = flight.data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    const randomWord = flight.data.map((value) => {
      return value;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else if (searchWord === "everywhere") {
      setFilteredData(randomWord);
      setEveryWhere(true);
    } else {
      setFilteredData(newFilter);
      setEveryWhere(false);
    }
  };
  console.log(filteredData);
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" onChange={handleFilter} />
      </div>
      {filteredData.length > 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div>
                <a className="dataItem" href={origin}>
                  <p>{value.origin} </p>
                </a>
              </div>
            );
          })}
        </div>
      )}
      {/* <SearchRandom flight={Data} /> */}
    </div>
  );
}
export default AutoComplete;
