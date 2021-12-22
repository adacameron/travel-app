/* eslint-disable no-console */
import axios from "axios";

const getInspLocation = (destinations) => {
  console.log(destinations, "destinations");
  let endpoint = "http://localhost:1338/location/";

  destinations.forEach((destination) => {
    endpoint += `${destination}`;
  });
  //   if (destinations) {
  //     endpoint += `${destinations[0]}`;
  //   }
  console.log(endpoint, "endpoint");
  return axios

    .get(endpoint)
    .then((res) => {
      console.log("res.data[0].name", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getInspLocation;
