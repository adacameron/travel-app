/* eslint-disable no-console */
import axios from "axios";

const getOffersSearch = (searchText, locationCode, departureDate, adults) => {
  let endpoint = "http://localhost:1338/nonstop=true/";

  if (searchText) {
    endpoint += `${searchText}/${locationCode}/${departureDate}/${adults}`;
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

export default getOffersSearch;
