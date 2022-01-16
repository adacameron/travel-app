/* eslint-disable no-console */
import axios from "axios";

const getOriginLocation = (searchText) => {
  let endpoint = "http://localhost:1338/location/";

  if (searchText) {
    endpoint += `${searchText}`;
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

export default getOriginLocation;
