/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import dotenv from "dotenv";

const getToken = () => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const body = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: "client_credentials",
  });

  const url = "https://test.api.amadeus.com/v1/security/oauth2/token";

  useEffect(() => {
    axios.post(url, body, config).then((res) => {
      console.log(res.data.access_token);
    });
  }, []);

  return (
    <div>
      <p>some text</p>
    </div>
  );
};

export default getToken;
