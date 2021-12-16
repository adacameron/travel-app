/* eslint-disable no-console */
import axios from "axios";

const getImages = (searchText) => {
  let endpoint = "http://localhost:1338/search?";
  if (searchText) {
    endpoint += `query=${searchText}`;
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
