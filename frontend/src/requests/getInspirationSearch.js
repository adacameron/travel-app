/* eslint-disable no-console */
import axios from "axios";

const getInspirationFlights = (origin, departure, days, maxPrice) => {
  let endpoint = "http://localhost:1338/flights/nonstop=true/";
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
