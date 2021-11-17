/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import GetToken from "../requests/GetToken";

//khalid git test

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
};

export default GetFlight;
