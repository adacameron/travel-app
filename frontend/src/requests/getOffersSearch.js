/* eslint-disable no-console */
import axios from "axios";

const getOffersSearch = (searchText, locationCode, departureDate, adults) => {
  let endpoint = "http://localhost:1338/";

  if (searchText) {
    endpoint += `${searchText}/${locationCode}/${departureDate}/${adults}`;
  }
  return axios
    .get(endpoint)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getOffersSearch;
