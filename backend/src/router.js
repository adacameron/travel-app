const Amadeus = require("amadeus");
const router = require("express").Router();

const { CLIENT_ID, CLIENT_SECRET } = require("./config");

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

router.get("/", (req, res) => {
  amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: "SYD",
      destinationLocationCode: "BKK",
      departureDate: "2022-08-01",
      adults: "2",
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
});

module.exports = router;