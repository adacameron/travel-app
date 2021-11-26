import axios from "axios";

const getOriginSearch = (searchText) => {
  let endpoint = "http://localhost:1338/";

  if (searchText) {
    endpoint += `${searchText}`;
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
