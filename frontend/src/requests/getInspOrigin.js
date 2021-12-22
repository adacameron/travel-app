/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from "axios";

const getInspOrigin = (origin) => {
  let endpoint = "http://localhost:1338/location/";

  if (origin) {
    endpoint += `${origin}`;
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

export default getInspOrigin;
