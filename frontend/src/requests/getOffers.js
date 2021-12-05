/* eslint-disable no-console */
import axios from "axios";

const getOffers = () => {
  axios
    .get("http://localhost:1338/offer")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getOffers;
