/* eslint-disable no-console */
import axios from "axios";

const getLocation = (locationCode) => {
  let endpoint = "http://localhost:1338/location/";

  if (locationCode) {
    endpoint += `${locationCode}`;
  }
  return axios

    .get(endpoint)
    .then((res) => {
      return res.data[0].name;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getLocation;
