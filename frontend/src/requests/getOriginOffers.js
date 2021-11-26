import axios from "axios";

const getOriginSearch = (searchText, locationCode, departureDate, adults) => {
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

export default getOriginSearch;
