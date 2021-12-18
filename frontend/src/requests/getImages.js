/* eslint-disable no-console */
import axios from "axios";

const getImages = (locationCode) => {
  let endpoint = "http://localhost:1338/search?";
  if (locationCode) {
    endpoint += `query=${locationCode}`;
  } else {
    endpoint += `query=travel`;
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

export default getImages;
