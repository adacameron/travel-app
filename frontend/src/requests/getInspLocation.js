/* eslint-disable no-console */
import axios from "axios";

const getInspLocation = (destinations) => {
  let endpoint = "http://localhost:1338/location/";

  destinations.forEach((destination) => {
    endpoint += `${destination}`;
  });
  return axios

    .get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getInspLocation;
