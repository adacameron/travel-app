/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from "axios";

const getInspirationFlights = (origin, departure, days, maxPrice) => {
  let endpoint = "http://localhost:1338/flights/";
  if (origin) {
    endpoint += `${origin}/${departure}/${days}/${maxPrice}`;
  }
  return axios
    .get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getInspirationFlights;
