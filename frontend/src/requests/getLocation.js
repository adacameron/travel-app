/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from "axios";

const getLocation = (locationCode, searchText) => {
  let endpoint = "http://localhost:1338/location/";

  if (locationCode) {
    endpoint += `${locationCode}`;
  }
  return axios
    .get(endpoint)
    .then((res) => {
      console.log(res.data);
      console.log(res.data[0].name);
      return res.data[0].name;
    })
    .then()
    .catch((err) => {
      console.log(err);
    });
};

export default getLocation;
