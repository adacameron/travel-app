/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import GetToken from "../requests/GetToken";

const GetFlight = () => {
  axios
    .get(
      "https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR",
      {
        headers: {
          Authorization: `Bearer 6JJg9qoA13xWLYIO0VsI4WdnMsLJ`,
        },
      }
    )
    .then((response) => console.log(response))
    .catch((error) => console.log("error", error));

  return (
    <div>
      <h1>Flight</h1>
      <form className="get-flight__form">
        <div className="get-flight__to">
          <label htmlFor="to">To</label>
          <input id="to" name="to" type="dropdown" placeholder="Anywhere" />
          {/*
              // value
              // onChange */}
        </div>

        <div className="get-flight__from">
          <label htmlFor="from">From</label>
          <input id="from" name="from" type="text" />
          {/*
              // value
              // onChange */}
        </div>
      </form>
    </div>
  );
};

export default GetFlight;
